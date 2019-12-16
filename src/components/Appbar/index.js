import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

let useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: "#3d458d"
  },
  goodText: {
    color: "white",
    fontWeight: 600,
    fontSize: 50
  },
  dealText: {
    color: "#fbc132",
    fontWeight: 600,
    fontSize: 50
  },
  moreText: {
    color: "white",
    fontWeight: 600,
    fontSize: 40
  }
}));

export default () => {
  let classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  position="static" className={classes.bar}>
        <Toolbar>
          <Typography className={classes.goodText}>Good</Typography>
          <Typography className={classes.dealText}>Deal *</Typography>
          <Typography className={classes.moreText}>Choose the best one for you</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
