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
import { Alert, Container, Grid, Input, Slider, Snackbar } from "@mui/material";

import { useRouter } from "next/router";
import Phase from "../../components/phase";

export default function Unappointed() {
  const pageTitle = "Construction ZZZ";

  const [projectName, setProjectName] = useState("Construction ZZZ");
  const [picName, setPicName] = useState("Bossku");
  const [bonus, setBonus] = useState(10000);
  const [projectBegin, setProjectBegin] = useState(dayjs("2022-08-01"));
  const [projectEnd, setProjectEnd] = useState(dayjs("2023-10-30"));
  const [status, setStatus] = useState("Unappointed");

  const router = useRouter();
  const handleSave = (e) => {
    e.preventDefault();
    handleClick();
    setTimeout(() => router.push("/notification"), 3000);
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
    {
      value: "Bossku",
    },
  ];

  const [count, setCount] = useState(2);
  const [phaseNew, setPhaseNew] = useState([]);
  const [removePhase, setRemovePhase] = useState([]);
  const addNewPhase = (event, index) => {
    // console.log(`phaseNew.length : ${phaseNew.length}`);
    // if phaseNew.length -1 === index && phaseNew.length < 4 && (

    // )
    setCount(count + 1);
    phaseNew &&
      phaseNew.length < 4 &&
      setPhaseNew(
        phaseNew.concat(<Phase key={phaseNew.length} phase={count} />)
      );
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

  function valuetext(value) {
    return `${value}`;
  }

  const [value, setValue] = React.useState([0, 0]);

  const timeLineStatus = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 50,
      label: "50%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];
  const [task1Begin, setTask1Begin] = useState(null);
  const [task1Completed, setTask1Completed] = useState(null);

  return (
    <Container>
      <TopNav pageTitle={pageTitle} />
      <Box marginBottom="30px">
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
                label="Project"
                variant="outlined"
                value={projectName}
                disabled
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
                disabled
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
                  disabled
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
                  disabled
                  focused
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6}>
              <TextField
                onInput={(e) => setBonus(e.target.value)}
                label="Bonus (RM)"
                value={bonus}
                variant="outlined"
                type="number"
                fullWidth
                focused
                disabled
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
                disabled
              >
                {statusNow.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Box
            sx={{
              padding: "10px 40px",
              border: 1,
              borderRadius: "5px",
              borderColor: "#333333",
              backgroundColor: "#333333",
            }}
          >
            <Typography paddingTop="10px" align="center">
              Project Timeline
            </Typography>
            <Slider
              size="small"
              value={value}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              step={10}
              marks={timeLineStatus}
              disabled
            />
            <Typography
              paddingTop="10px"
              align="center"
              gutterBottom
              color="white"
            >
              0 Day(s) Delayed
            </Typography>
          </Box>

          <Box
            sx={{
              borderRadius: "15px",
              padding: "30px 0px 15px",
            }}
          >
            <Grid container alignItems="center">
              <Grid item xs={4} paddingLeft="0px">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "5px",
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "700",
                  }}
                >
                  Phase 1
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Typography>Title</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              border: 1,
              borderColor: "white",
              backgroundColor: "white",
              borderRadius: "5px",
              marginTop: "5px",
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
              </Grid>
              <Grid item xs={6}>
                <Typography color="black"></Typography>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignContent="center"
              alignItems="center"
              spacing={2}
            >
              {/* Add Staff */}
              <Grid item xs={6} marginTop="10px">
                <Button variant="contained">Staff 1</Button>
              </Grid>

              <Grid item xs={6}>
                <Typography color="black"></Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">Bonus (RM)</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black"></Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">Begin</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black"></Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">Completion</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black"></Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">% of Progress</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black"></Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">Status</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">Unappointed</Typography>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
