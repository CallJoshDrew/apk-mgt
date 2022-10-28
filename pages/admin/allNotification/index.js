import React from "react";
import TopNav from "../components/topNav";

import BottomNav from "../components/bottomNav";
import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ClearIcon from "@mui/icons-material/Clear";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function AllNotification() {
  const pageTitle = "Notification";
  const page = "notification";
  return (
    <React.Fragment>
      <TopNav pageTitle={pageTitle} />
      <Box padding="10px">
        <Box align='right'><Typography>09/28/2022</Typography></Box>
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
              <Link href="/admin/project/unappointed" underline="none" color="white"><Typography>New Project!</Typography>
              <Typography variant="h7">
                You just created Construction ZZZ
              </Typography></Link>
            </Grid>
          </Grid>
        </Paper>
        <Box align='right'><Typography>09/27/2022</Typography></Box>
        <Box sx={{ backgroundColor: "#f14235", marginBottom: "10px" }}>
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
              <Link href="/admin/project/ongoing" underline="none" color="white"><Typography>Project Delayed</Typography>
              <Typography variant="h7">
                Construction ABC is currently behind the schedule!
              </Typography></Link>
            </Grid>
          </Grid>
        </Box>
        <Box align='right'><Typography>09/26/2022</Typography></Box>
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
              <Link href="/admin/project/completed" underline="none" color="white"><Typography>Project Completed</Typography>
              <Typography variant="h7">
                Construction EDF has just completed!
              </Typography></Link>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <BottomNav page={page} />
    </React.Fragment>
  );
}
