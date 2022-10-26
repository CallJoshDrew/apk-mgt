import React from "react";
import Grid from "@mui/material/Grid";
import Typography  from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Slider from '@mui/material/Slider';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const marks = [
  {
    value: 0,
    label: 'Aug 01 22',
  },
  {
    value: 100,
    label: 'Oct 30 23',
  },
  
];
function valuetext(value) {
  return `${value}%`;
}

export default function Unappointed() {
  
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} align="left" paddingLeft="20px"><Typography gutterBottom>Unappointed</Typography></Grid>
        <Grid item xs={12} align="left">
          <Box sx={{border: 2, borderRadius: "15px", borderColor: "#29b6f6",}}>
            <Grid container padding="10px 15px" spacing={1}>
              <Grid item xs={10}><Typography variant="h6">Construction ZZZ</Typography></Grid>
             
              <Grid item xs={12}><Button variant="contained" color="info"><Typography color="white">PIC Bossku</Typography></Button></Grid>
              <Grid item xs={12}>
                <Box padding="30px">
                <Slider aria-label="Custom marks" defaultValue={0} getAriaValueText={valuetext} step={10}
                        valueLabelDisplay="auto" marks={marks} disabled/>
                </Box>
                <Typography align="center" gutterBottom color="white">0 Day(s) Delayed</Typography>
              </Grid>
              <Grid item xs={12}><Button variant="contained" color="info" fullWidth><Typography color="white">RM 10,000</Typography></Button></Grid>
           </Grid>
          </Box></Grid>
        
      </Grid>
    </React.Fragment>
  );
}
