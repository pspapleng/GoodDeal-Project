import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
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
  }
}));

export default () => {
  const mystyle = useStyles();

  return (
    <div className={mystyle.root}>
      <AppBar position="fixed" className={mystyle.bar}>
        <Toolbar>
          <Typography className={mystyle.goodText}>Good</Typography>
          <Typography className={mystyle.dealText}>Deal</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
