import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import TopNav from "../components/topNav";

import Rating from "@mui/material/Rating";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Alert, Container, Grid, Input, Slider, Snackbar } from "@mui/material";

import { useRouter } from "next/router";
import Phase from "../components/phase";

import StarIcon from "@mui/icons-material/Star";
export default function Completed() {
  const pageTitle = "Construction EDF";

  const [projectName, setProjectName] = useState("Construction EDF");
  const [picName, setPicName] = useState("Sapphira");
  const [bonus, setBonus] = useState(5000);
  const [projectBegin, setProjectBegin] = useState(dayjs("2022-08-01"));
  const [projectEnd, setProjectEnd] = useState(dayjs("2023-10-30"));
  const [status, setStatus] = useState("Completed");

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

  const [value, setValue] = React.useState([0, 100]);

  const timeLineStatus = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];
  const [task1Begin, setTask1Begin] = useState(null);
  const [task1Completed, setTask1Completed] = useState(null);

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  const [rating, setRating] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

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
              borderColor: "#0FC432",
              backgroundColor: "#0FC432",
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
                <Typography>Deposit / Mobilization Fee</Typography>
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
                <Typography color="black">Submit Document</Typography>
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
                <Typography color="black">Simone</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">Bonus (RM)</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">600</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">Begin</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">08/20/2022</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">Completion</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">010/20/2022</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">% of Progress</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">30%</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">Status</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="black">Completed</Typography>
              </Grid>
            </Grid>
          </Box>
        </form>
        <Box
          sx={{
            marginTop: "20px",
            padding: "20px 15px",
            border: 1,
            borderRadius: "5px",
            borderColor: "#333333",
            backgroundColor: "#333333",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography>Rating System</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button href="/ceo/profile/rating" variant="contained" color="warning">
                <Typography color="white">Current Rating</Typography>
              </Button>
            </Grid>
          </Grid>
          <Box
            sx={{
              paddingTop: "10px",
            }}
          >
            <Grid
              container
              direction="column"
              padding={{ xs: "10px", md: "20px" }}
            >
              <Grid item xs={12}>
                <Typography variant="h6">Simone</Typography>
              </Grid>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={6} align="left">
                  <Rating
                    name="hover-feedback"
                    value={rating}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Grid>
                <Grid item xs={6} align="right">
                  <Typography variant="h4">{rating}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              padding={{ xs: "10px", md: "20px" }}
            >
              <Grid item xs={12}>
                <Typography variant="h6">PIC Sapphira</Typography>
              </Grid>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={6} align="left">
                  <Rating
                    name="hover-feedback"
                    value={rating}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Grid>
                <Grid item xs={6} align="right">
                  <Typography variant="h4">{rating}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              padding={{ xs: "10px", md: "20px" }}
            >
              <Grid item xs={12}>
                <Typography variant="h6">Principal</Typography>
              </Grid>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={6} align="left">
                  <Rating
                    name="hover-feedback"
                    value={rating}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Grid>
                <Grid item xs={6} align="right">
                  <Typography variant="h4">{rating}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} align='center' margin='10px 0 15px'>
              <Typography color="white" gutterBottom>
                To update this task, please rate before pressing the &apos;Finish&apos;
                button below.
              </Typography>
            </Grid>
            <Grid item xs={12} align='center'><Button href='/ceo/profile/rating' variant='contained' color='success'><Typography color='white'>Finish</Typography></Button></Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
