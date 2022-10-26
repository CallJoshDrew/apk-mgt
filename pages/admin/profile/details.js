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
            Anwar Ibrahim
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            123456-12-1234
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            Male
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            August 10, 1947
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            017-8888888
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            info@anwaribrahim.com
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            Pusat Khidmat Parlimen Port Dickson,No.1, Jalan Waterfront 1, PD Waterfront, 71000 Port Dickson,Negeri Sembilan.
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="10px">
          <Typography variant="h6">
            Emergency Contact
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            Wan Azizah Wan Ismail
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
            Pusat Khidmat Parlimen Port Dickson,No.1, Jalan Waterfront 1, PD Waterfront, 71000 Port Dickson,Negeri Sembilan.
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
            ACC Name Holder: Admin
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
            Leader of the Opposition of Malaysia  (2020 - 2022)
          </Typography>
        </Grid>
      </Grid></Box>
    </React.Fragment>
  );
}

export default Details;
