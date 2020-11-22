import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const BusyComponent = () => {
  const classes = useStyles();
  const color = "primary";
  const text = "Loading...";

  return (
    <div className={classes.root}>
      <div
        style={{
          alignContent: "center",
          alignItems: "center",
          flex: "1",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Typography color={color}>{text}</Typography>
        <LinearProgress color={color} />
      </div>
    </div>
  );
};

export default BusyComponent;
