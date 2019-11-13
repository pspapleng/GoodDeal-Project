import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {withStyles} from '@material-ui/core/styles';



const ValidationTextField = withStyles({
  root: {
    '& input:invalid + fieldset': {
      borderColor: '#3d458d',
      borderWidth: 3,
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  card: {
    width: '23vw',
    borderColor: '#3d458d',
    variant: 'outlined',
    color: 'primary',
    border: '8px solid'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.😎"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"

  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    width: 200
  },
  margin: {
    marginTop: theme.spacing(2)
  },
  withoutLabel: {
    marginTop: theme.spacing(2)
  },
  textField: {
    width: 200
  },
  menu: {
    width: 200
  }
  
}));

const currencies = [
  {
    value: "฿",
    label: "Bath"
  },
  {
    value: "%",
    label: "Percent"
  }
];

export default function SimpleCard() {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState("Bath");

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.container}>
          <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Name"
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className={classes.container}>
          <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Cost"
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className={classes.container}>
        <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Discount"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-select-currency"
            select
            className={classes.textField}
            value={currency}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className={classes.container}>
          <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Shipping"
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className={classes.container}>
          <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Premium"
            margin="normal"
            variant="outlined"
          />
        </div>
        
        <form className={classes.root} noValidate>
            <ValidationTextField
              className={classes.margin}
              label="Total"
              required
              variant="outlined"
              id="validation-outlined-input"
              margin="normal"
            />
          </form>

      </CardContent>
    </Card>
  );
}