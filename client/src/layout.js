import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import User from './user/user.view';

const Layout = () => {
  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          children = {
            <User />
          }
        />
      </Container>
    </div>
  );
};

export default Layout;
