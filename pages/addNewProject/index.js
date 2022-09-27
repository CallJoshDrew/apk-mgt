import {
  Box,
  Button,
  ButtonBase,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import TopNav from "../../components/topNav";

import MenuItem from "@mui/material/MenuItem";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function NewProject() {
  const pageTitle = "Add New Project";

  const [projectName, setProjectName] = useState("New Project");
  const [picName, setPicName] = useState("");
  const [bonus, setBonus] = useState(100);
  const [projectBegin, setProjectBegin] = useState(null);
  const [projectEnd, setProjectEnd] = useState(null);
  const [status, setStatus] = useState("");

  const handleSave = (e) => {
    console.log(projectName, picName, bonus, projectBegin, projectEnd, status);
  };
  const handlePIC = (event) => {
    setPicName(event.target.value);
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };
  const statusNow = [
    {
      value: "Unappointed",
    },
    {
      value: "Haven't Start",
    },
    {
      value: "Ongoing",
    },
    {
      value: "Completed",
    },
    {
      value: "Terminated",
    },
  ];
  const persons = [
    {
      value: "Simeon",
    },
    {
      value: "Martha",
    },
    {
      value: "Matthias",
    },
    {
      value: "Sapphira",
    },
  ];
  return (
    <React.Fragment>
      <TopNav pageTitle={pageTitle} />
      <Box sx={{ paddingTop: "20px" }}>
        <form noValidate autoComplete="off" onSubmit={handleSave}>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
            sx={{ padding: "20px 15px" }}
          >
            <Grid item xs={12}>
              <TextField
                onInput={(e) => setProjectName(e.target.value)}
                label="New Project"
                variant="outlined"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                variant="outlined"
                label="Person in Charge"
                value={picName}
                onChange={handlePIC}
                fullWidth
                focused
              >
                {persons.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} align="right">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Project Begin"
                  // minDate={dayjs('2022-10-01')}
                  value={projectBegin}
                  onChange={(newValue) => {
                    setProjectBegin(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  fullWidth
                  focused
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6} align="right">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Project End"
                  value={projectEnd}
                  onChange={(newValue) => {
                    setProjectEnd(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  fullWidth
                  focused
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6}>
              <TextField
                onInput={(e) => setBonus(e.target.value)}
                label="Bonus (RM)"
                variant="outlined"
                type="number"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                variant="outlined"
                label="Status"
                value={status}
                onChange={handleStatus}
                fullWidth
                focused
              >
                {statusNow.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </form>
      </Box>
    </React.Fragment>
  );
}

9;
