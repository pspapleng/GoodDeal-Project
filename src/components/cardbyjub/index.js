import React from "react";
import ReactDOM from 'react-dom';

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Add from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
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
    if (event.target.value == "%") {
      setValues({...values,
        currency: 'Percent',
        total: (values.cost*(100-values.discount))/100 + values.shipping - values.premium}
      );
    }
    else {
      setValues({...values,
        currency: 'Baht',
        total: values.cost - values.discount + values.shipping - values.premium}
      );
    }
  };

  let handleCost = event => {
    if (values.currency == 'Percent') {
      if (event.target.value == '') {
        setValues({...values,
          cost: 0,
          total: (0*(100-values.discount))/100 + values.shipping - values.premium}
        );
      }
      else {
        setValues({...values,
          cost: parseFloat(event.target.value),
          total: (parseFloat(event.target.value)*(100-values.discount))/100 + values.shipping - values.premium}
        );
      }
    }
    else {
      if (event.target.value == '') {
        setValues({...values,
          cost: 0,
          total: 0 - values.discount + values.shipping - values.premium}
        );
      }
      else {
        setValues({...values,
          cost: parseFloat(event.target.value),
          total: parseFloat(event.target.value) - values.discount + values.shipping - values.premium}
        );
      }
    }
  };

  let handleDiscount = event => {
    if (values.currency == 'Percent') {
      if (event.target.value == ''){
        setValues({...values,
          discount: 0,
          total: (values.cost*(100-0))/100 + values.shipping - values.premium}
        );
      }
      else {
        setValues({...values,
          discount: parseFloat(event.target.value),
          total: (values.cost*(100-parseFloat(event.target.value)))/100 + values.shipping - values.premium}
        );
      }
    }
    else {
      if (event.target.value == ''){
        setValues({...values,
          discount: 0,
          total: values.cost - 0 + values.shipping - values.premium}
        );
      }
      else {
        setValues({...values,
          discount: parseFloat(event.target.value),
          total: values.cost - parseFloat(event.target.value) + values.shipping - values.premium}
        );
      }
    }
  };

  let handleShipping = event => {
    if (values.currency == 'Percent') {
      if (event.target.value == '') {
        setValues({...values,
          shipping: 0,
          total: (values.cost*(100-values.discount))/100 + 0 - values.premium}
        );
      }
      else {
        setValues({...values,
          shipping: parseFloat(event.target.value),
          total: (values.cost*(100-values.discount))/100 + parseFloat(event.target.value) - values.premium}
        );
      }
    }
    else {
      if (event.target.value == '') {
        setValues({...values,
          shipping: 0,
          total: values.cost - values.discount + 0 - values.premium}
        );
      }
      else {
        setValues({...values,
          shipping: parseFloat(event.target.value),
          total: values.cost - values.discount + parseFloat(event.target.value) - values.premium}
        );
      }
    }
  };

  let handlePremium = event => {
    if (values.currency == 'Percent') {
      if (event.target.value == '') {
        setValues({...values,
          premium: 0,
          total: (values.cost*(100-values.discount))/100 + values.shipping - 0}
        );
      }
      else {
        setValues({...values,
          premium: parseFloat(event.target.value),
          total: (values.cost*(100-values.discount))/100 + values.shipping - parseFloat(event.target.value)}
        );
      }
    }
    else {
      if (event.target.value == '') {
        setValues({...values,
          premium: 0,
          total: values.cost - values.discount + values.shipping - 0}
        );
      }
      else {
        setValues({...values,
          premium: parseFloat(event.target.value),
          total: values.cost - values.discount + values.shipping - parseFloat(event.target.value)}
        );
      }
    }
  };

  // function Delete(currentEl){
  //   currentEl.p
  // }

  // function handlePremium1(e) {
  //   if (values.currency == 'Percent') {
  //     if (event.target.value == '') {
  //       setValues({...values,
  //         premium: 0,
  //         total: (values.cost*(100-values.discount))/100 + values.shipping - 0}
  //       );
  //     }
  //     else {
  //       setValues({...values,
  //         premium: parseFloat(event.target.value),
  //         total: (values.cost*(100-values.discount))/100 + values.shipping - parseFloat(event.target.value)}
  //       );
  //     }
  //   }
  //   else {
  //     if (event.target.value == '') {
  //       setValues({...values,
  //         premium: 0,
  //         total: values.cost - values.discount + values.shipping - 0}
  //       );
  //     }
  //     else {
  //       setValues({...values,
  //         premium: parseFloat(event.target.value),
  //         total: values.cost - values.discount + values.shipping - parseFloat(event.target.value)}
  //       );
  //     }
  //   }
  // }
  

  // let [premiumArr, setPremium] = React.useState([0]);
  // let handleAdd = () => {
  //   let clone = [...premiumArr];
  //   let lstdx = clone.length - 1;
  //   clone.push(clone[lstdx] + 1);
  //   setPremium(clone);
  // };

  // function handleAdd()
  // {
  //   // var iDiv = document.createElement('div');
  //   // iDiv.className='classes.container';
  //   // var chl = document.createElement('TextField');
  //   // chl.className='classes.textField';
  //   // chl.label='Premium';
  //   // chl.margin="normal";
  //   // chl.variant="outlined";
  //   // chl.onChange='handlePremium';
  //   // iDiv.appendChild(chl);
  //   // iDiv.className='classes.container';
  //   // document.getElementById("5555").appendChild(iDiv);
  //   // document.getElementById("5555").innerHTML += "<div className={classes.container}><TextField id=\"123\" className={classes.textField} label=\"Premium\" margin=\"normal\" variant=\"outlined\" onChange={handlePremium} InputProps={{ startAdornment: ( <InputAdornment position=\"start\">฿</InputAdornment> ) }} /> </div>"
  //   var itm = document.getElementById("5555");
  //   // var itm_2 = document.getElementById("123");
  //   // var sss = itm_2.value;
  //   var sss = itm.firstChild.value;
  //   itm.firstChild.value = "";
  //   // itm_2.value = "";
  //   var cln = itm.cloneNode(true);
  //   cln.firstChild.value = '';
  //   // // cln.firstChild.value = "123";
  //   // // var childnode = cln.childNodes[1];
  //   // // childnode.addEventListener("onChange", handlePremium1);
  //   document.addEventListener('change', handlePremium);
  //   document.getElementById("555").appendChild(cln);
  //   document.getElementById("555").innerHTML += cln.children
  //   // document.getElementById("123").value = sss;
  // }

  // // function handleAdd(){
  // //   var c = document.createElement('TextField')
  // //   document.getElementById('5555').appendChild(c)
    
  // // }

  // function handleDelete()
  // {
  //   var e = document.getElementById("555");
  //   if (e.hasChildNodes()) {
  //     e.removeChild(e.lastChild);
  //   }
  // }

  // function addCard() {
  //   document.getElementById('main').innerHTML = 'sdsad';
  // }

  // function deleteCard(currentEl){
  //   currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
  // }


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
            id="123"
            className={classes.textField}
            label="Premium"
            margin="normal"
            variant="outlined"
            onChange={handlePremium}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">฿</InputAdornment>
              )
            }}
          />
        </div>
        
        <div className={classes.container} id='555'>
        </div>

          {/* <IconButton onClick={handleAdd}>
            <Add></Add>
          </IconButton>
          <IconButton onClick={handleDelete}>
            <Delete></Delete>
          </IconButton> */}
        
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
              )
            }}
          />
        </form>
        <IconButton>
          <DeleteForeverIcon fontSize="large" />
        </IconButton>
      </CardContent>
    </Card>
  );
}
