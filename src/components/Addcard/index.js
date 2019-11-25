import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/card";
import AddIcon from "@material-ui/icons/Add";

let useStyles = makeStyles(theme => ({
  //โค้ดของการ์ด กว้าง สูง ขนาดขอบ สีขอบ จัดเครื่องบวกให้อยู่กลาง
  card: {
    width: "28vw",
    height: "33.25vw",
    border: "8px solid",
    borderColor: "#3d458d",
    textAlign: "center"
  },
  //โค้ดของเครื่องหมายบวก ขนาด สี ตำแหน่งห่างจากด้านบน
  icon: {
    width: 120,
    height: 120,
    color: "#3d458d",
    marginTop: "11vw"
  }
}));

export default function SimpleCard() {
  let classes = useStyles();

  return (
    <Grid justify="center">
      <Card className={classes.card}>
        <AddIcon className={classes.icon} />
      </Card>
    </Grid>
  );
}
