import React, { useState } from "react";
import BottomNav from "../../components/bottomNav";
import TopNav from "../../components/topNav";
import Avatar from "@mui/material/Avatar";
import Bossku from "../../public/bossku.jpg";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

import Chip from "@mui/material/Chip";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "@mui/material/Link";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Details from "./details";

export default function Profile() {
  const pageTitle = "My Profile";
  const page = "profile";
  const name = "Bossku";
  const role = "Chief Administrative & Financial Controller";
  const grade = "A";

  const [rating, setRating] = useState(4.5);
  const numberRating = Math.round(rating * 10) / 10;
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const [evaluationTime, setEvaluationTime] = useState('Monthly');

  // const handleChange = () => {
  //   console.log(evaluationTime);
  // }
  return (
    <React.Fragment>
      <TopNav pageTitle={pageTitle} />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1, md: 2 }}
        padding={{ xs: "40px 10px 10px", md: "60px 10px 10px" }}
      >
        <Grid item xs={12}>
          <Avatar
            alt="user"
            src={Bossku.src}
            sx={{ width: 120, height: 120 }}
          />
        </Grid>
        <Grid item xs={12}>
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">{name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            {role}({grade})
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          border: 1,
          borderRadius: "15px",
          borderColor: "yellow",
          margin: "10px 20px",
        }}
      ><Link href="/profile/rating" underline="none" aria-label="My Current Rating" color="white">
        <Grid
          container
          direction="column"
          padding={{ xs: "10px 25px", md: "20px" }}
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
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </Grid>
            <Grid item xs={6} align="right">
              <Typography variant="h4">{numberRating}</Typography>
            </Grid>
          </Grid>
        </Grid>
        </Link>
      </Box>
      <Box sx={{ margin: "10px 20px" }}>
        <Box align="center" padding="10px">
          <Link
            href="/profile/edit"
            underline="none"
            aria-label="Edit my profile"
          >
            <Chip
              label="Edit Profile"
              color="primary"
              icon={<AccountCircleIcon />}
              onClick={handleClick}
            />
          </Link>
        </Box>
      </Box>
      <Details />
      {/* special marginbottom = 10 (Box) to avoid the fixed bottom nav */}
      <Box sx={{ margin: "10px 20px", marginBottom: 10, padding:"20px 10px", backgroundColor: '#0288d1', borderRadius:"15px"}} align="center">
        <Typography variant="h6" gutterBottom>Evaluation Form Setting</Typography>
        <Typography variant="body1" gutterBottom>Select the time for evaluation. Every evaluation form will be distributed by the 1st of the month after setting.</Typography>
        <FormControl sx={{marginTop: 2, width:"70%"}}>
        <InputLabel id="demo-simple-select-helper-label">Time</InputLabel>
        <Select
          value={evaluationTime}
          label="Time"
          onChange={(e) => setEvaluationTime(e.target.value)}
          // onClick={handleChange()}
        >
          <MenuItem value={'Monthly'}>Monthly</MenuItem>
          <MenuItem value={'2 Months'}>2 Months</MenuItem>
          <MenuItem value={'3 Months'}>3 Months</MenuItem>
          <MenuItem value={'6 Months'}>6 Months</MenuItem>
        </Select>
      </FormControl>
      </Box>
      <BottomNav page={page} />
    </React.Fragment>
  );
}
