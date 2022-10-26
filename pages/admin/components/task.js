import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Input } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Staff from "./staff";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import NewTask from "./newTask";


import MenuItem from "@mui/material/MenuItem";

export default function Task() {
  const [task1Begin, setTask1Begin] = useState(null);
  const [task1Completed, setTask1Completed] = useState(null);
  const [task1Progress, setTask1Progress] = useState("");
  const [addStaff, setAddStaff] = useState([]);
  const [addTask, setAddTask] = useState([]);
  const [status, setStatus] = useState("Ongoing");
  
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
  const [count, setCount] = useState(2);
  const [taskCount, setTaskCount] = useState(2);
  const addNewStaff = (event, index) => {
    addStaff &&
      addStaff.length < 4 &&
      setAddStaff(
        addStaff.concat(<Staff key={addStaff.length} count={taskCount} />)
      );
    setTaskCount(taskCount + 1);
  };
  const addNewTask = (event, index) => {
    addTask &&
      addTask.length < 4 &&
      setAddTask(
        addTask.concat(<NewTask key={addTask.length} count={count} />)
      );
    setCount(count + 1);
  };

  const [task1, setTask1] = useState("");
  return (
    <React.Fragment>
      <Box
        sx={{
          border: 1,
          borderColor: "white",
          backgroundColor: "white",
          borderRadius: "5px",
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
                borderRadius: "5px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "700",
              }}
            >
              Task 1
            </Button>
            <Fab
              onClick={addNewTask}
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
        </Grid>
        <Grid container justifyContent="center" alignContent="center" alignItems="center" spacing={2}>
          {/* Add Staff */}
          <Grid item xs={4} marginTop="10px">
            <Button variant="contained">Staff 1</Button>
          </Grid>
          <Grid item xs={2}>
            <Fab
              onClick={addNewStaff}
              sx={{
                marginLeft: "-5px",
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
          <Grid item xs={6}>
            <Typography color="black">Status</Typography>
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

          {addStaff}
        </Grid>
      </Box>
      {addTask}
    </React.Fragment>
  );
}
