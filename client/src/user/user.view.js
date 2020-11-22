import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import { useSnackbar } from 'notistack';

import { HttpGet } from "../api/calls";
import { ApiUris } from "../api/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
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
    search: ''
  });

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
    console.log(value);
  }

  const doSearch = (item) => {
    setUserData([]);
  }

  const fetchData = async () => {
    setIsLoading(true);
    const result = await HttpGet(
      null,
      ApiUris.getUsers,
      null,
      null
    );
    if (result.status === 200) {
      setUserData(result.data);
      console.log(result.data);
    } else {
      return enqueueSnackbar("Unable to load data at this time.", { variant: "error"});
    }
    setIsLoading(false);
  };

  useEffect(() => {
    //get data uplon page load
    fetchData(); 
  }, []);

  return (
    <div>
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search Users"
          inputProps={{ "aria-label": "search users" }}
          onChange={handleTextChange}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default User;
