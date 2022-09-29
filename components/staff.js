import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Alert, Container, Grid, Input, Snackbar } from "@mui/material";

export default function Staff(count) {
  const staffNumber = count.count;
  console.log(`Staff Number ${staffNumber}`);
  const [task1Staff1, setTask1Staff1] = useState("");
  const [task1Staff1Bonus, setTask1Staff1Bonus] = useState("");
  const [task1Begin, setTask1Begin] = useState(null);
  const [task1Completed, setTask1Completed] = useState(null);
  const [task1Progress, setTask1Progress] = useState("");
  return (
    <React.Fragment>
    
        <Grid item xs={6} marginTop="30px">
          <Button variant="contained">Staff {staffNumber}</Button>
        </Grid>
        {/* <Grid item xs={4}>
        <Fab
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
      </Grid> */}
        <Grid item xs={6} marginTop="30px">
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

    </React.Fragment>
  );
}
