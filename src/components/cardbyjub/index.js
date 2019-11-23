import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {withStyles} from '@material-ui/core/styles';
import Add from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';



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
    width: '24vw',
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
    label: "Baht"
  },
  {
    value: "%",
    label: "Percent"
  }
];

export default function SimpleCard({ deleteCallback }) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("Baht");
  const [values, setValues] = React.useState({
    name: '',
    cost: 0,
    discount: 0,
    currency: 'Bath',
    shipping: 0,
    premium: '',
    total: 0,
  });

  const handleChange = event => {
    setCurrency(event.target.value);
    if (event.target.value == "%") {
      setValues({...values,
        total: (values.cost*(values.cost-values.discount))/100 + values.shipping});
    }
    else {
      setValues({...values,
        total: values.cost - values.discount + values.shipping});
    }
  };

  const handleCost = event => {
    setValues({...values, 
      cost: parseFloat(event.target.value),
      total: parseFloat(event.target.value) - values.discount + values.shipping});
  };

  const handleDiscount = event => {
    setValues({...values, 
      discount: parseFloat(event.target.value),
      total: values.cost - parseFloat(event.target.value) + values.shipping});
  };

  const handleShipping = event => {
    setValues({...values, 
      shipping: parseFloat(event.target.value),
      total: values.cost - values.discount + parseFloat(event.target.value)});
  };

  let [premiumArr, setPremium] = React.useState([0]);
  let handleAdd = () => {
    let clone = [...premiumArr];
    let lstdx = clone.length - 1;
    clone.push(clone[lstdx] + 1);
    setPremium(clone);
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
            InputProps={{
              startAdornment: <InputAdornment position="start">฿</InputAdornment>,
            }}
            onChange={handleCost}
          />
        </div>
        <div className={classes.container}>
        <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Discount"
            margin="normal"
            variant="outlined"
            onChange={handleDiscount}
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
            InputProps={{
              startAdornment: <InputAdornment position="start">฿</InputAdornment>,
            }}
            onChange={handleShipping}
          />
        </div>
        <div className={classes.container}>
          <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Premium"
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">฿</InputAdornment>,
            }}
            />
          <IconButton onClick={handleAdd}>
            <Add></Add>
          </IconButton>
          <IconButton onClick={deleteCallback}>
            <Delete></Delete>
          </IconButton>
        </div>
        
        <form className={classes.root} noValidate>
            <ValidationTextField
              className={classes.margin}
              value={values.total}
              label="Total"
              required
              variant="outlined"
              id="validation-outlined-input"
              margin="normal"
              InputProps={{
                startAdornment: <InputAdornment position="start">฿</InputAdornment>,
              }}
            />
          </form>

          

      </CardContent>
    </Card>
  );
}