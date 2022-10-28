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
            Ismail Sabri Yaakob
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            666666-66-6666
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            Male
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            January 18, 1960
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            016-1234567
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            ismailsabri@pmo.gov.my
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            Pejabat Perdana Menteri, Aras 5, Blok Utama, Bangunan Perdana Putra, Pusat Pentadbiran Kerajaan Persekutuan, 62502 PUTRAJAYA
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="10px">
          <Typography variant="h6">
            Emergency Contact
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            Muhaini Zainal Abidin
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            Wife
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            016-1234567
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            Pejabat Perdana Menteri, Aras 5, Blok Utama, Bangunan Perdana Putra, Pusat Pentadbiran Kerajaan Persekutuan, 62502 PUTRAJAYA
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="10px">
          <Typography variant="h6">
            Bank Account Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            Am Bank Account No: 6666666666
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            ACC Name Holder: Staff
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="10px">
          <Typography variant="h6">
            Education Background
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
          Honorary Ph.D. degree in Medicine from Nihon University (2022)
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop="10px">
          <Typography variant="h6">
            Employment History
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" >
            Prime Minister  (2021 - 2022)
          </Typography>
        </Grid>
      </Grid></Box>
    </React.Fragment>
  );
}

export default Details;
