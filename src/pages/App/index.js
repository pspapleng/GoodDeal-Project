import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/cardbyjub";
import Addcard from "../../components/Addcard";
import AppBar from "../../components/Appbar";

let useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#eaebef"
  },
  control: {
    padding: theme.spacing(10)
  }
}));

export default function SpacingGrid() {
  let classes = useStyles();

  return (
    <div>
      <AppBar></AppBar>
      <Grid className={(classes.root, classes.control)}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Card></Card>
            </Grid>
            <Grid item>
              <Addcard></Addcard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
