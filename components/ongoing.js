import React from "react";
import Grid from "@mui/material/Grid";
import Typography  from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Slider from '@mui/material/Slider';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const timeLineStatus = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 40,
    label: '40%',
  },
  {
    value: 60,
    label: '60%',
  },
  {
    value: 100,
    label: '100%',
  },
];
function valuetext(value) {
  return `${value}%`;
}

export default function Ongoing() {
  const [value, setValue] = React.useState([40, 60]);
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} align="left" paddingLeft="20px"><Typography gutterBottom>Ongoing</Typography></Grid>
        <Grid item xs={12} align="left">
          <Box sx={{border: 2, borderRadius: "15px", borderColor: "#f44336",}}>
            <Grid container padding="10px 15px" spacing={1}>
              <Grid item xs={10}><Typography variant="h6">Construction ABC</Typography></Grid>
              <Grid item xs={1}><SentimentVeryDissatisfiedIcon fontSize="large" color="error"/></Grid>
              <Grid item xs={12}><Button variant="contained" color="error">PIC Simeon</Button></Grid>
              <Grid item xs={12}>
                <Box padding="20px">
                <Slider getAriaLabel={() => 'Minimum distance shift'} value={value} getAriaValueText={valuetext} step={10}
                        valueLabelDisplay="auto" marks={timeLineStatus} disabled />
                </Box>
                <Typography align="center" gutterBottom color="red">30 Days Delayed</Typography>
              </Grid>
              <Grid item xs={12}><Button variant="contained" color="error" fullWidth>RM 1,000</Button></Grid>
           </Grid>
          </Box></Grid>
        
      </Grid>
    </React.Fragment>
  );
}
