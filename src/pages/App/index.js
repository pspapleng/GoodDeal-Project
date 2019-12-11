import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
  let [cardList, setCardlist] = React.useState([0, 1]);

  let handleClick = () => {
    let cloneArr = [...cardList];
    cloneArr.push(cloneArr[cloneArr.length - 1] + 1);
    setCardlist(cloneArr);
    console.log(cloneArr);
  };

  let handleDelete = () => {
    let cloneArr = [...cardList];
    cloneArr.pop();
    setCardlist(cloneArr);
  };

  return (
    <div>
      <AppBar></AppBar>
      <Grid className={(classes.root, classes.control)}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {cardList.map(val => (
              <Grid item key={val}>
                <Card deleteCallback={handleDelete}></Card>
              </Grid>
            ))}
            {cardList.length < 3 ? (
              <Grid item>
                <Addcard clickCallback={handleClick}></Addcard>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
