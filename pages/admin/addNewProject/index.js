import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import TopNav from "../components/topNav";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Alert, Container, Grid, Input, Snackbar } from "@mui/material";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import Phase from "../components/phase";

export default function AddNewProject() {
  const pageTitle = "Add New Project";

  const [projectName, setProjectName] = useState("New Project");
  const [picName, setPicName] = useState("");
  const [bonus, setBonus] = useState(100);
  const [projectBegin, setProjectBegin] = useState(null);
  const [projectEnd, setProjectEnd] = useState(null);
  const [status, setStatus] = useState("");

  

  const router = useRouter()
  const handleSave = (e) => {
    e.preventDefault();
    handleClick();
    setTimeout(() => router.push('/admin/allNotification'), 2000);
  };

  const [open, setOpen] = useState(false);
  const vertical = "bottom";
  const horizontal = "center";
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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

  const [count, setCount] = useState(2);
  const [phaseNew, setPhaseNew] = useState([]);
  const [removePhase, setRemovePhase] = useState([]);
  const addNewPhase = (event, index) => {
   
    // console.log(`phaseNew.length : ${phaseNew.length}`);
    // if phaseNew.length -1 === index && phaseNew.length < 4 && (

    // )
    setCount(count+1)
    phaseNew && phaseNew.length < 4 && (
      setPhaseNew(phaseNew.concat(<Phase key={phaseNew.length} phase={count}/>))
    )
    // setRemovePhase(removePhase.concat(<Button variant="contained" key={phaseNew.length}><Typography>Remove</Typography></Button>))
  };

  const handleRemove = (index) => {
    // console.log(`index : ${index}`);
    const list = [...phaseNew];
    list.splice(index, 1);
    // console.log(`count : ${count}`);
    // setCount(count-1)
    // const list =  [...phaseNew];
    // list.splice(count, 1);
    // console.log(`count : ${count}`);
    setPhaseNew(list);
    
  };
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
          <Phase />
          {phaseNew}
          <Box onClick={handleRemove} key={phaseNew.length}>{removePhase}</Box>
          <Grid container alignItems="center" margin="5px 0 15px">
            <Grid item xs={12} align="right">
              <Button
                variant="contained"
                startIcon={<LibraryAddIcon />}
                sx={{ borderRadius: "5px" }}
                fullWidth
                onClick={(e) => addNewPhase()}
              >
                Add New Phase
              </Button>
            </Grid>
          </Grid>
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
                href="/admin/dashboard"
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
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          You have just created a New Project: {projectName}
        </Alert>
      </Snackbar>
    </Container>
  );
}