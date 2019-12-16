import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/card";
import AddIcon from "@material-ui/icons/Add";
import { Grid, CardActionArea, CardContent } from "@material-ui/core";

let useStyles = makeStyles(theme => ({
  //โค้ดของการ์ด กว้าง สูง ขนาดขอบ สีขอบ จัดเครื่องบวกให้อยู่กลาง
  card: {
    width: "22vw",
    height: "80vh",
    border: "8px solid",
    borderColor: "#3d458d",
    borderRadius: 15,
    textAlign: "center"
  },
  //โค้ดของเครื่องหมายบวก ขนาด สี ตำแหน่งห่างจากด้านบน
  icon: {
    width: 120,
    height: 120,
    color: "#3d458d",
    marginTop: "13vw"
  },
  action: {
    flex: "1 1 auto"
  }
}));

export default function SimpleCard({ clickCallback }) {
  const classes = useStyles();

  return (
    <Grid justify="center">
      <CardActionArea className={classes.action} onClick={clickCallback}>
        <Card className={classes.card}>
          <CardContent>
            <AddIcon className={classes.icon} />
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
