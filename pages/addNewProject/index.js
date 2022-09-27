import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import TopNav from "../../components/topNav";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Container, Grid, Input } from "@mui/material";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function NewProject() {
  const pageTitle = "Add New Project";

  const [projectName, setProjectName] = useState("New Project");
  const [picName, setPicName] = useState("");
  const [bonus, setBonus] = useState(100);
  const [projectBegin, setProjectBegin] = useState(null);
  const [projectEnd, setProjectEnd] = useState(null);
  const [status, setStatus] = useState("");

  const [phase1, setPhase1] = useState("");
  const [task1, setTask1] = useState("");
  const [task1Staff1, setTask1Staff1] = useState("");
  const [task1Staff1Bonus, setTask1Staff1Bonus] = useState("");
  const [task1Begin, setTask1Begin] = useState(null);
  const [task1Completed, setTask1Completed] = useState(null);
  const [task1Progress, setTask1Progress] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    console.log(
      projectName,
      picName,
      bonus,
      projectBegin,
      projectEnd,
      status,
      phase1,
      task1,
      task1Staff1,
      task1Staff1Bonus,
      task1Begin,
      task1Completed,
      task1Progress
    );
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
    <Container >
      <TopNav pageTitle={pageTitle} />
      <Box  marginBottom="30px">
        <form noValidate autoComplete="off" onSubmit={handleSave}>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
            sx={{ padding: "10px 0 30px" }}
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
          <Grid container alignItems="center" marginTop="15px">
            <Grid item xs={5} align="center">
              <Typography variant="h7">PIC to assign</Typography>
            </Grid>
            <Grid item xs={7} align="center">
              <Button
                variant="contained"
                startIcon={<LibraryAddIcon />}
                sx={{ borderRadius: "15px" }}
              >
                Add New Phase
              </Button>
            </Grid>
          </Grid>
          <Box
            sx={{
              // border: 1,
              // // borderColor: "white",
              // backgroundColor: "#333333",
              borderRadius: "15px",
              padding: "15px 0px",
            }}
          >
            <Grid container alignItems="center">
              <Grid item xs={4} paddingLeft="5px">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "700",
                  }}
                >
                  Phase 1
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Input
                  placeholder="Title"
                  aria-label="Task 1 Title"
                  disableUnderline={true}
                  onInput={(e) => setPhase1(e.target.value)}
                />
              </Grid>
            </Grid>
            {/* Task 1 Container */}
            <Box
              sx={{
                border: 1,
                borderColor: "white",
                backgroundColor: "white",
                borderRadius: "15px",
                marginTop: "15px",
                padding: "10px 20px",
              }}
            >
              <Grid container alignItems="center" spacing={1.5}>
                <Grid item xs={6}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      paddingTop: "6px",
                      marginRight: "10px",
                      fontSize: "0.6rem",
                      borderRadius: "20px",
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    Task 1
                  </Button>
                  <Fab
                    sx={{
                      height: "1.5rem",
                      minHeight: "1.5rem",
                      width: "1.5rem",
                    }}
                    color="primary"
                    aria-label="add"
                  >
                    <AddIcon sx={{ fontSize: "1rem" }} />
                  </Fab>
                </Grid>
                <Grid item xs={6}>
                  <Input
                    placeholder="Description"
                    aria-label="Task 1 Description"
                    sx={{ color: "black" }}
                    disableUnderline={true}
                    onInput={(e) => setTask1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography color="black">Staff</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Fab
                    sx={{
                      marginLeft:"-5px",
                      marginTop: "-3px",
                      height: "1.5rem",
                      minHeight: "1.5rem",
                      width: "1.5rem",
                    }}
                    color="primary"
                    aria-label="add"
                  >
                    <AddIcon sx={{ fontSize: "1rem" }} />
                  </Fab>
                </Grid>
                <Grid item xs={6}>
                  <Input
                    placeholder="Staff"
                    aria-label="Staff"
                    sx={{ color: "black" }}
                    disableUnderline={true}
                    onInput={(e) => setTask1Staff1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography color="black">Bonus (RM)</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Input
                    placeholder="Set The Bonus"
                    type="number"
                    aria-label="Bonus"
                    sx={{ color: "black" }}
                    disableUnderline={true}
                    onInput={(e) => setTask1Staff1Bonus(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography color="black">Begin</Typography>
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      // label="Month/Day/Year"
                      value={task1Begin}
                      onChange={(newValue) => {
                        setTask1Begin(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          variant="outlined"
                          placeholder="Enter Date"
                          sx={{
                            input: {
                              color: "black",
                              border: 1,
                              borderColor: "black",
                            },
                            svg: { color: "black" },
                          }}
                          {...params}
                        />
                      )}
                      fullWidth
                      focused
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="black">Completion</Typography>
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={task1Completed}
                      onChange={(newValue) => {
                        setTask1Completed(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          variant="outlined"
                          placeholder="Enter Date"
                          sx={{
                            input: {
                              color: "black",
                              border: 1,
                              borderColor: "black",
                            },
                            svg: { color: "black" },
                          }}
                          {...params}
                        />
                      )}
                      fullWidth
                      focused
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="black">% of Progress</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Input
                    placeholder="%"
                    type="number"
                    aria-label="% of Progress"
                    sx={{ color: "black" }}
                    disableUnderline={true}
                    onInput={(e) => setTask1Progress(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* Save Button */}
          <Grid container spacing={2}>
            <Grid item xs={6} align="right">
              <Button
                type="submit"
                variant="contained"
                
                sx={{ padding: "5px 10px", width:"70%" }}
              >
                Save
              </Button>
            </Grid>
            {/* Back Button */}
            <Grid item xs={6} align="left">
              <Button
                href="/dashboard"
                aria-label="Back to My Profile Page"
                variant="contained"
                sx={{ padding: "5px 10px", width:"70%" }}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

9;
