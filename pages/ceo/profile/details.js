import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function Details() {
  return (
    <React.Fragment>
      <Box sx={{ margin: "10px 20px 30px", padding: "20px 10px", border: 1, borderRadius: "15px", borderColor: "white"}}>
      <Grid container  paddingLeft="15px">
        <Grid item xs={12}>
          <Typography variant="h6" >
            Personal Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            Bossku
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            530723-06-5165
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            Male
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            July 23, 1953 
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            019-8888888
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            mukhlis313@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            NO.11Jalan Langgak Duta Taman Duta 50480 Kuala Lumpur.
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="10px">
          <Typography variant="h6">
            Emergency Contact
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            Rosmah Mansor
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            Wife
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            018-9999999
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            NO.11Jalan Langgak Duta Taman Duta 50480 Kuala Lumpur.
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="10px">
          <Typography variant="h6">
            Bank Account Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            Am Bank Account No: 8888888888
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            ACC Name Holder: Bossku
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="10px">
          <Typography variant="h6">
            Education Background
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            An undergraduate degree in economics from the University of Nottingham.
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="10px">
          <Typography variant="h6">
            Employment History
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            Prime Minister of Malaysia (2009 - 2018)
          </Typography>
        </Grid>
      </Grid></Box>
    </React.Fragment>
  );
}

export default Details;
