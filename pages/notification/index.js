import React from "react";
import TopNav from "../../components/topNav";

import BottomNav from "../../components/bottomNav";
import { Box, Grid, Paper, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ClearIcon from "@mui/icons-material/Clear";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function Notification() {
  const pageTitle = "Notification";
  const page = "notification";
  return (
    <React.Fragment>
      <TopNav pageTitle={pageTitle} />
      <Box padding="10px">
        <Paper sx={{ backgroundColor: "#1E90FF", marginBottom: "10px" }}>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            padding="15px 10px"
          >
            <Grid item xs={2} align="center">
              <InfoIcon />
            </Grid>
            <Grid item xs={10}>
              <Typography>New Project!</Typography>
              <Typography variant="h7">
                You just created E&E Project!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ backgroundColor: "#f14235", marginBottom: "10px" }}>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            padding="15px 10px"
          >
            <Grid item xs={2} align="center">
              <ReportProblemIcon />
            </Grid>
            <Grid item xs={10}>
              <Typography>Project Delayed</Typography>
              <Typography variant="h7">
                E&E Project is currently behind the schedule!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ backgroundColor: "#0FC432", marginBottom: "10px" }}>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            padding="15px 10px"
          >
            <Grid item xs={2} align="center">
              <TaskAltIcon />
            </Grid>
            <Grid item xs={10}>
              <Typography>Project Completed</Typography>
              <Typography variant="h7">
                E&E Project has just completed!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <BottomNav page={page} />
    </React.Fragment>
  );
}
