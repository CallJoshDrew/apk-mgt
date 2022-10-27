import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function Details() {
  return (
    <React.Fragment>
      <Box sx={{ margin: "10px 20px 100px", padding: "20px 10px", border: 1, borderRadius: "15px", borderColor: "white"}}>
      <Grid container  paddingLeft="15px">
        <Grid item xs={12}>
          <Typography variant="h6" >
            Personal Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            Ahmad Zahid Hamidi
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            999999-99-9999
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            Male
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            January 04, 1953
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            019-7777777
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            pejabatpresiden@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            No.389,Country Heights,43000 Kajang, Selangor Darul Ehsan.
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="10px">
          <Typography variant="h6">
            Emergency Contact
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            Hamidah Khamis
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
            No.389,Country Heights,43000 Kajang, Selangor Darul Ehsan.
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
            ACC Name Holder: Partner
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="10px">
          <Typography variant="h6">
            Education Background
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            University of Malaya
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="10px">
          <Typography variant="h6">
            Employment History
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            Deputy Prime Minister  (2008 - 2018)
          </Typography>
        </Grid>
      </Grid></Box>
    </React.Fragment>
  );
}

export default Details;
