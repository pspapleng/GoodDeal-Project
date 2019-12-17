import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/cardbyjub";
import Addcard from "../../components/Addcard";
import AppBar from "../../components/Appbar";
let useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#eaebef",
    paddingTop: theme.spacing(2)
  }
}));

export default function SpacingGrid() {
  const [list, setList] = React.useState([0, 1]);
  let classes = useStyles();

  let newCard = e => {
    e.preventDefault();
    let clonelist = [...list];
    clonelist.push(clonelist[clonelist.length - 1] + 1);
    setList(clonelist);
  };

  let removeCard = e => {
    setList(list.filter(el => el !== e));
  };
  return (
    <div>
      <AppBar className={classes.appbarStyle}></AppBar>
      <Grid className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            justify="center"
            alignContent="center"
            alignItems="center"
            spacing={2}
          >
            {list.map((card, index) => {
              return (
                <Grid item key={card}>
                  <Card
                    deleteCallback={() => {
                      removeCard(card);
                    }}
                  ></Card>
                </Grid>
              );
            })}

            {list.length < 3 ? (
              <Grid item>
                <Addcard
                  clickCallback={e => {
                    newCard(e);
                  }}
                ></Addcard>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
