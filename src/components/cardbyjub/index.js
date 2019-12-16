import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import InputAdornment from "@material-ui/core/InputAdornment";

let ValidationTextField = withStyles({
  root: {
    "& input:invalid + fieldset": {
      borderColor: "#3d458d",
      borderWidth: 3
    }
  }
})(TextField);

let useStyles = makeStyles(theme => ({
  card: {
    width: "22vw",
    height: "80vh",
    borderColor: "#3d458d",
    border: "8px solid",
    borderRadius: 15
  },
  root: {
    "& label.Mui-focused": {
      color: "#3d458d"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fbc132"
      },
      "&:hover fieldset": {
        borderColor: "#fbc132"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fbc132"
      }
    }
  },
  bullet: {
    display: "inline-block",
    margin: "2px",
    transform: "scale(0.😎"
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
  menu: {
    width: 200
  }
}));

let currencies = [
  {
    value: "฿",
    label: "฿"
  },
  {
    value: "%",
    label: "%"
  }
];

export default function SimpleCard({ deleteCallback }) {
  let classes = useStyles();

  let [currency, setCurrency] = React.useState("Baht");
  let [values, setValues] = React.useState({
    name: "",
    cost: 0,
    discount: 0,
    currency: "Bath",
    shipping: 0,
    premium: "",
    total: 0
  });

  let handleChange = event => {
    setCurrency(event.target.value);
    if (event.target.value === "%") {
      setValues({
        ...values,
        currency: "Percent",
        total:
          (values.cost * (100 - values.discount)) / 100 +
          values.shipping -
          values.premium
      });
    } else {
      setValues({
        ...values,
        currency: "Baht",
        total: values.cost - values.discount + values.shipping - values.premium
      });
    }
  };

  let handleCost = event => {
    if (values.currency === "Percent") {
      if (event.target.value === "") {
        setValues({
          ...values,
          cost: 0,
          total:
            (0 * (100 - values.discount)) / 100 +
            values.shipping -
            values.premium
        });
      } else {
        setValues({
          ...values,
          cost: parseFloat(event.target.value),
          total:
            (parseFloat(event.target.value) * (100 - values.discount)) / 100 +
            values.shipping -
            values.premium
        });
      }
    } else {
      if (event.target.value === "") {
        setValues({
          ...values,
          cost: 0,
          total: 0 - values.discount + values.shipping - values.premium
        });
      } else {
        setValues({
          ...values,
          cost: parseFloat(event.target.value),
          total:
            parseFloat(event.target.value) -
            values.discount +
            values.shipping -
            values.premium
        });
      }
    }
  };

  let handleDiscount = event => {
    if (values.currency === "Percent") {
      if (event.target.value === "") {
        setValues({
          ...values,
          discount: 0,
          total:
            (values.cost * (100 - 0)) / 100 + values.shipping - values.premium
        });
      } else {
        setValues({
          ...values,
          discount: parseFloat(event.target.value),
          total:
            (values.cost * (100 - parseFloat(event.target.value))) / 100 +
            values.shipping -
            values.premium
        });
      }
    } else {
      if (event.target.value === "") {
        setValues({
          ...values,
          discount: 0,
          total: values.cost - 0 + values.shipping - values.premium
        });
      } else {
        setValues({
          ...values,
          discount: parseFloat(event.target.value),
          total:
            values.cost -
            parseFloat(event.target.value) +
            values.shipping -
            values.premium
        });
      }
    }
  };

  let handleShipping = event => {
    if (values.currency === "Percent") {
      if (event.target.value === "") {
        setValues({
          ...values,
          shipping: 0,
          total:
            (values.cost * (100 - values.discount)) / 100 + 0 - values.premium
        });
      } else {
        setValues({
          ...values,
          shipping: parseFloat(event.target.value),
          total:
            (values.cost * (100 - values.discount)) / 100 +
            parseFloat(event.target.value) -
            values.premium
        });
      }
    } else {
      if (event.target.value === "") {
        setValues({
          ...values,
          shipping: 0,
          total: values.cost - values.discount + 0 - values.premium
        });
      } else {
        setValues({
          ...values,
          shipping: parseFloat(event.target.value),
          total:
            values.cost -
            values.discount +
            parseFloat(event.target.value) -
            values.premium
        });
      }
    }
  };

  let handlePremium = event => {
    if (values.currency === "Percent") {
      if (event.target.value === "") {
        setValues({
          ...values,
          premium: 0,
          total:
            (values.cost * (100 - values.discount)) / 100 + values.shipping - 0
        });
      } else {
        setValues({
          ...values,
          premium: parseFloat(event.target.value),
          total:
            (values.cost * (100 - values.discount)) / 100 +
            values.shipping -
            parseFloat(event.target.value)
        });
      }
    } else {
      if (event.target.value === "") {
        setValues({
          ...values,
          premium: 0,
          total: values.cost - values.discount + values.shipping - 0
        });
      } else {
        setValues({
          ...values,
          premium: parseFloat(event.target.value),
          total:
            values.cost -
            values.discount +
            values.shipping -
            parseFloat(event.target.value)
        });
      }
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <div className={classes.container}>
          <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Name"
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className={classes.container}>
          <TextField
            id="outlined-full-width"
            className={classes.textField}
            label="Cost"
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">฿</InputAdornment>
              )
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
            id="outlined-full-width"
            className={classes.textField}
            label="Shipping"
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">฿</InputAdornment>
              )
            }}
            onChange={handleShipping}
          />
        </div>
        <div className={classes.container}>
          <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Premium"
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">฿</InputAdornment>
              )
            }}
            onChange={handlePremium}
          />
        </div>

        <form className={classes.root} noValidate>
          <ValidationTextField
            className={classes.margin}
            value={values.total}
            label="Total"
            required
            variant="outlined"
            id="validation-outlined-input"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">฿</InputAdornment>
              ),
              readOnly: true
            }}
          />
        </form>
        <IconButton onClick={deleteCallback}>
          <DeleteForeverIcon fontSize="large" />
        </IconButton>
      </CardContent>
    </Card>
  );
}
