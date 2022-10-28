import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import React from "react";
import TopNav from "../../../components/topNav";
import BottomNav from "../../../components/bottomNav";

export default function MyRating() {
  const pageTitle = "My Rating";
  const rating = 4.5;
  return (
    <Box paddingBottom="80px">
      <TopNav pageTitle={pageTitle} />
      <Box
        sx={{
          border: 1,
          borderRadius: "15px",
          borderColor: "yellow",
          margin: "30px 20px",
        }}
      >
        <Grid container
          direction="column"
          padding="10px 25px"
        >
          <Grid item xs={12} align="left">
            <Typography variant="h6">My Current Rating</Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={6} align="left">
              <Rating
                name="simple-controlled"
                value={rating}
                precision={0.5}
                size="large"
              />
            </Grid>
            <Grid item xs={6} align="right">
              <Typography variant="h4">4.5</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Typography align="center">20% (Evaluate every 2 months) </Typography>
      <Box
        sx={{
          border: 1,
          borderRadius: "15px",
          borderColor: "white",
          margin: "10px 20px",
        }}
      ><Grid container padding="20px">
          <Grid item xs={9} align="left"><Typography variant="h7">Initiative</Typography></Grid>
          <Grid item xs={3} align="right"><Typography variant="h7">4.0</Typography></Grid>
          <Grid item xs={9} align="left"><Typography variant="h7">Responsibility</Typography></Grid>
          <Grid item xs={3} align="right"><Typography variant="h7">4.0</Typography></Grid>
          <Grid item xs={9} align="left"><Typography variant="h7">Disciplinary</Typography></Grid>
          <Grid item xs={3} align="right"><Typography variant="h7">4.0</Typography></Grid>
          <Grid item xs={9} align="left"><Typography variant="h7">Work</Typography></Grid>
          <Grid item xs={3} align="right"><Typography variant="h7">4.0</Typography></Grid>
          <Grid item xs={9} align="left"><Typography variant="h7">Obedience</Typography></Grid>
          <Grid item xs={3} align="right"><Typography variant="h7">4.0</Typography></Grid>
          <Grid item xs={9} align="left"><Typography variant="h7">Decision Making</Typography></Grid>
          <Grid item xs={3} align="right"><Typography variant="h7">4.0</Typography></Grid>
          <Grid item xs={9} align="left"><Typography variant="h7">Independencise</Typography></Grid>
          <Grid item xs={3} align="right"><Typography variant="h7">4.0</Typography></Grid>
          <Grid item xs={9} align="left"><Typography variant="h7">Teamwork</Typography></Grid>
          <Grid item xs={3} align="right"><Typography variant="h7">4.0</Typography></Grid>
          <Grid item xs={9} align="left"><Typography variant="h7">Professionalism</Typography></Grid>
          <Grid item xs={3} align="right"><Typography variant="h7">4.0</Typography></Grid>
          <br />
          <Grid container paddingTop="20px">
            <Grid item xs={12} align="center" color="#808080"><Typography variant="h7">Boss (30%), Self (40%), Collegue (30%)</Typography></Grid>
          </Grid>
        </Grid></Box>
        <Grid container padding="30px 0 10px"align="center">
          <Grid item xs={12}><Typography align="center">80% (Based on Project/Task)</Typography></Grid>
        </Grid>
        <Box
        sx={{
          border: 1,
          borderRadius: "15px",
          borderColor: "white",
          margin: "10px 20px",
        }}
        > <Grid container padding="20px">
            <Grid item xs={6} align="left"><Typography variant="h7">Construction ABC</Typography></Grid>
            <Grid container>
              <Grid item xs={6} align="right"><Typography variant="h7">Phase 1</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">4.0</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">Phase 2</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">4.0</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">Phase 3</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">4.0</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">Phase 4</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">4.0</Typography></Grid>
            </Grid>
          </Grid>
          <Grid container padding="20px">
            <Grid item xs={6} align="left"><Typography variant="h7">Construction ABC</Typography></Grid>
            <Grid container >
              <Grid item xs={6} align="right"><Typography variant="h7">Phase 1</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">4.0</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">Phase 2</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">4.0</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">Phase 3</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">4.0</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">Phase 4</Typography></Grid>
              <Grid item xs={6} align="right"><Typography variant="h7">4.0</Typography></Grid>
            </Grid>
          </Grid>
          <Grid container padding="20px">
            <Grid item xs={12} align="center" color="#808080"><Typography variant="h7">Boss (30%), Self (40%), Collegue (30%)</Typography></Grid>
          </Grid></Box>
        <BottomNav/>
    </Box>
  );
}
