import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const PageAlert = ({ alertType, typoColor, alertTitle, alertMessage, mainMessage }) => {
  return (
    <div style={{ padding: "25px"}}>
      <Paper
        elevation={1}
        children={
          <div>
            <Alert severity={alertType}>
              <AlertTitle>{alertTitle}</AlertTitle>
              {alertMessage}
            </Alert>
            <div style={{ padding: "20px"}}>
              <Typography color={typoColor} >{mainMessage}</Typography>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default PageAlert;
