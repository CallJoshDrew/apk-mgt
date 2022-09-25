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
    value: 37,
    label: '37%',
  },
  {
    value: 100,
    label: 'Feb 01 23',
  },
];
function valuetext(value) {
  return `${value}%`;
}

export default function Ongoing() {
  
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} align="left" paddingLeft="20px"><Typography gutterBottom>Ongoing</Typography></Grid>
        <Grid item xs={12} align="left">
          <Box sx={{border: 2, borderRadius: "15px", borderColor: "#f44336",}}>
            <Grid container padding="10px 15px">
              <Grid item xs={10}><Typography variant="h6">Construction ABC</Typography></Grid>
              <Grid item xs={1}><SentimentVeryDissatisfiedIcon fontSize="large" color="error"/></Grid>
              <Grid item xs={12}><Button variant="contained" color="error">PIC Partner ABC</Button></Grid>
              <Grid item xs={12}>
                <Box padding="30px">
                <Slider aria-label="Custom marks" defaultValue={37} getAriaValueText={valuetext} step={10}
                        valueLabelDisplay="auto" marks={marks} disabled color="secondary"/>
                </Box>
              </Grid>
              <Grid item xs={12}><Button variant="contained" color="error" fullWidth>RM 1,000</Button></Grid>
           </Grid>
          </Box></Grid>
        
      </Grid>
    </React.Fragment>
  );
}
