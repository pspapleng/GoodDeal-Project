import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import IconButtons from '@material-ui/core/IconButton';
import BinIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
// name cost discount shipping premium

let currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'THB',
    label: '฿',
  },
];
export default () => {
  let classes = useStyles();
  const [currency, setCurrency] = React.useState('THB');

  let handleChange = event => {
    setCurrency(event.target.value);
  };
  return (
    <div>
        <Paper style={{padding:20,margin:20}}>
           <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
        </Paper>
    </div>
  );
};
