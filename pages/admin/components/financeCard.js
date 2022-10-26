import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

export default function FinanceCard() {
  return (
    <Container maxWidth="md" sx={{ margin:"15px 0",padding: "20px 10px"}}>
      <Link href="/admin/finance" underline="none" color="black">
      <Box sx={{paddingLeft:"10px", paddingBottom:"5px"}}>
        <Typography variant="h5" color="white">Year 2022</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          border: 1,
          borderColor: "white",
          borderRadius: "5px",
          padding: "20px",
          backgroundColor:"#f5f5f5"
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center" spacing={0.5} >
          <Grid item xs={6}>
            <Typography align="center">Total Expenses</Typography></Grid>
            <Grid item xs={6}><Typography align="center">Total Collection</Typography></Grid>
          
          <Grid item xs={12}>
            <Box align="center" sx={{padding:"10px 0", boxShadow: 2, borderRadius: "50px", backgroundColor:"#1E90FF", color:"white"}}>
              <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={5}>
                <Typography align="center">RM 2,000</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography align="center">{"<"}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography align="center">RM 10,000</Typography>
              </Grid></Grid>
            </Box>
          </Grid>
        </Grid>
        {/* This below is Total Realized and Unrealized */}
        <Grid container justifyContent="space-between" alignItems="center" spacing={0.5}>
          <Grid item xs={6}>
            <Typography align="center">Total Realised</Typography></Grid>
            <Grid item xs={6}><Typography align="center">Total Unrealised</Typography></Grid>
          
          <Grid item xs={12}>
            <Box align="center" sx={{padding:"10px 0", boxShadow: 2, borderRadius: "50px", backgroundColor:"#0FC432", color:"white"}}>
              <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={5}>
                <Typography align="center">RM 3,000</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography align="center">{"/"}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography align="center">RM 7,000</Typography>
              </Grid></Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </Link>
    </Container>
  );
}
