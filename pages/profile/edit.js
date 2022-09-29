import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/router";

function EditProfile() {
  const [name, setName] = useState("");
  const [ic, setIC] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [bank, setBank] = useState("");
  const [accName, setACCName] = useState("");
  const [edu, setEDU] = useState("");
  const [employment, setEmployment] = useState("");

  const router = useRouter()
  const handleSaveProfile =  (e) => {
    e.preventDefault();
    console.log(name, ic, gender, dob, contact, email, address, bank, accName, edu, employment);
    handleClick();
    setTimeout(() => router.push('/profile'), 3000);
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

  const [checkedAAA1, setCheckedAAA1] = useState(false);
  const [checkedAAA2, setCheckedAAA2] = useState(false);
  const [checkedAAA3, setCheckedAAA3] = useState(false);

  const handleCheckAAA1 = (event) => {
    setCheckedAAA1(event.target.checked);
  };
  const handleCheckAAA2 = (event) => {
    setCheckedAAA2(event.target.checked);
  };
  const handleCheckAAA3 = (event) => {
    setCheckedAAA3(event.target.checked);
  };

  return (
    <React.Fragment>
      <Box
        sx={{ margin: "10px", padding: "10px" }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSaveProfile}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" paddingLeft="5px">
              Personal Information
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              // error temporary out on hold
              // helperText="Incorrect entry."
              onInput={(e) => setName(e.target.value)}
              required
              label="Name"
              placeholder="Name as per I.C."
              fullWidth
              multiline
              maxRows={2}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              onInput={(e) => setIC(e.target.value)}
              required
              label="Identification Card"
              placeholder="Example: 200101-12-5551"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              onInput={(e) => setGender(e.target.value)}
              required
              label="Gender"
              placeholder="Male or Female Only"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              onInput={(e) => setDOB(e.target.value)}
              required
              label="Date of Birth"
              placeholder="Example: January 01 2000"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              onInput={(e) => setContact(e.target.value)}
              required
              label="Mobile Contact"
              placeholder="Example: 012-345-6789"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="email"
              onInput={(e) => setEmail(e.target.value)}
              required
              label="Email"
              placeholder="Example: johndoe@gmail.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              onInput={(e) => setAddress(e.target.value)}
              required
              label="Address"
              placeholder="Full Home Address"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" paddingLeft="5px">
              Bank Account Details
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              onInput={(e) => setBank(e.target.value)}
              required
              label="Bank"
              placeholder="For Salary Transaction ONLY"
              fullWidth
              multiline
              maxRows={2}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              onInput={(e) => setACCName(e.target.value)}
              required
              label="ACC Name Holder"
              placeholder="Bank Account Name Holder"
              fullWidth
              multiline
              maxRows={2}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" paddingLeft="5px">
              Education Background
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              onInput={(e) => setEDU(e.target.value)}
              required
              label="Education Background"
              placeholder="Example: St. Michael's Secondary School (2015 - 2020) SPM"
              fullWidth
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" paddingLeft="5px">
              Employment History
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              onInput={(e) => setEmployment(e.target.value)}
              required
              label="Employment History"
              placeholder="Example: Astral Projek Konsult (Chief Administrative & Financial Executive) 2010 - current"
              fullWidth
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" paddingLeft="5px">
              Ackowlegement and Authorization
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedAAA1}
                    onChange={handleCheckAAA1}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="I certify that all answers given herein are true and complete to the best of my knowledge"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedAAA2}
                    onChange={handleCheckAAA2}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="I authorize investigation of al statements contained inthis application for employment as may be necessary in arriving at an employment decision"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedAAA3}
                    onChange={handleCheckAAA3}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="In the event of employment, I understand that any offers and details agreed between me and the company shall not be disclosed to any parties"
              />
            </FormGroup>
          </Grid>
          {/* Save Button */}
          <Grid item xs={6} align="right">
            <Button
              type="submit"
              variant="contained"
              sx={{ padding: "5px 10px" }}
            >
              Save
            </Button>
          </Grid>
          {/* Back Button */}
          <Grid item xs={6} align="left">
            <Button
              href="/profile"
              aria-label="Back to My Profile Page"
              variant="contained"
              sx={{ padding: "5px 10px" }}
            >
              Back
            </Button>
          </Grid>
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            You have saved your details successfully!
          </Alert>
        </Snackbar>
      </Box>
    </React.Fragment>
  );
}

export default EditProfile;
