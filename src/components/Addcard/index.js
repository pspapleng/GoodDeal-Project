import React from "react"  
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  card: {
    minHeight: 100,
    border: 10,
    position: "fixed",
  },
  pos: {
    marginBottom: 12,
  },
  //โค้ดของเครื่องหมายบวก ขนาด สี ตำแหน่ง
  icon: {
    width: 120,
    height: 120,
    color: "#3d458d",
    top: "auto",
    left: "auto",
    bottom: 320,
    right: 48,
    position: "fixed",
  },
  
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

  border: {
    bgcolor: 'background.paper',
    m: 1,
    border: 1, 
    style: { width: '5rem', height: '5rem' },
  },

}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    //grid ทำให้กล่องไปอยู๋ชิดริมขวาของหนน้า ใน box คือโค้ดความหนาของขอบ สีขอบ สีพื้นหลังของการ์ด คสามสูงแล้วก็ความกว้าง
    <Grid 
    container
    direction="row"
    justify="flex-end"
    position="fixed">
      <Card>
        <Box align="center" jusify="center" justifyItems="fixed" border={3} borderColor="#3d458d" bgcolor="#eaebef" height="720px" width="200px" position="relative">
        <AddIcon className={classes.icon} />
        </Box>
      </Card>
    </Grid>
  );
}
