import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { useSnackbar } from "notistack";

import { HttpGet, HttpPost } from "../api/calls";
import { ApiUris } from "../api/constants";
import BusyComponent from "./busy.component";
import UserComponent from "./user.component";
import PageAlert from "./page.alert";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "90%",
    marginLeft: "5%",
    //marginRight: "15px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const User = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    search: "",
  });

  const handleTextChange = (event) => {
    event.preventDefault();
    setState({ search: event.target.value });
  };

  const reload = async () => {
    if (state.search.length < 1) {
      setIsLoading(true);
      const result = await HttpGet(null, ApiUris.getUsers, null, null);
      if (result.status === 200) {
        setUserData(result.data);
      } else {
        return enqueueSnackbar("Unable to load data at this time.", {
          variant: "error",
        });
      }
      setIsLoading(false);
    }
  };

  const searchNow = async (e) => {
    e.preventDefault();
    if (state.search.length > 1) {
      doSearch(state.search);
    }
  };

  const doSearch = async (searchTerm) => {
    setIsLoading(true);
    const Data = { searchTerm: searchTerm };
    if (searchTerm.length > 1) {
      const result = await HttpPost(null, ApiUris.searchUsers, Data, null);
      if (result.status === 200) {
        setUserData(result.data);
        setIsLoading(false);
        return;
      } else {
        setIsLoading(false);
        return enqueueSnackbar("Unable to load data at this time.", {
          variant: "error",
        });
      }
    } else {
      const result = await HttpGet(null, ApiUris.getUsers, null, null);
      if (result.status === 200) {
        setUserData(result.data);
        setIsLoading(false);
        return;
      } else {
        setIsLoading(false);
        return enqueueSnackbar("Unable to load data at this time.", {
          variant: "error",
        });
      }
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    const result = await HttpGet(null, ApiUris.getUsers, null, null);
    if (result.status === 200) {
      setUserData(result.data);
    } else {
      return enqueueSnackbar("Unable to load data at this time.", {
        variant: "error",
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    //get data uplon page load
    fetchData();
  }, []);

  return (
    <div>
      <br />
      <br />
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <TextField
          type="search"
          className={classes.input}
          placeholder="Search Users"
          onChange={handleTextChange}
          onMouseOut={reload}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={searchNow}          
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <br />
      {isLoading ? (
        <BusyComponent />
      ) : (
        <div style={{ marginLeft: "5%", width: "90%"}}>
          {userData.length < 1 ? (
            <PageAlert
              alertType="error"
              typoColor="secondary"
              alertTitle="Not Found !"
              alertMessage="No User wih such information"
              mainMessage="No User wih such information"
            />
          ) : (
            <>
              {userData.map((item, index) => (
                // key=index
                <UserComponent item={item} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
