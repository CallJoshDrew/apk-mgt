import React, { useState } from "react";
import Box from "@mui/material/Box";
import TopNav from "../components/topNav";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import BottomNav from "../components/bottomNav";


import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FinanceYear() {
  const [expenses, setExpenses] = useState("");
  const [collection, setCollection] = useState("");

  const [open, setOpen] = useState(false);
  const [saveExpensesDate, setSaveExpensesDate] = useState("Date");
  const [saveCollectionDate, setSaveCollectionDate] = useState("Date");

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [dialog, setDialog] = useState(false);
  
  const closeDialog = () => {
    setDialog(false);
  };

  const currentFinance = () => {
    const collectionString = Number(collection);
    const expensesString = Number(expenses);
    // console.log(collectionString);
    // console.log(expensesString);
    if (collectionString > expensesString) {
      setDialog(true)
      // console.log(dialog)
    }
  }

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "MYR",
      maximumSignificantDigits: 3,
    }).format(value);

  const currencyExpenses = numberFormat(expenses);
  const currencyCollection = numberFormat(collection);
    
  const handleSaveExp = (e) => {
    e.preventDefault();
    if (currencyExpenses) {
      // console.log(currencyExpenses);
      const timestamp = Date.now();
      const printDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(timestamp);
      setSaveExpensesDate(printDate);
    }
    handleClick();
    currentFinance();
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const yearDate = Date.now();
  const yearNow = new Intl.DateTimeFormat("en-US", {
    year: "numeric"
  }).format(yearDate);

  const pageTitle = `Year ${yearNow} Summary`

  const handleSaveCol = (e) => {
    e.preventDefault();
    if(currencyCollection) {
      // console.log(currencyCollection);
      const timestamp = Date.now();
      const printDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(timestamp);
      setSaveCollectionDate(printDate);
    }
    handleClick();
    currentFinance();
  };

  return (
    <Box marginBottom="60px">
      <TopNav pageTitle={pageTitle}/>
      <Box sx={{ paddingTop: "20px" }}>
        <form noValidate autoComplete="off" onSubmit={handleSaveExp}>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
            sx={{ padding: "20px 15px" }}
          >
            <Grid item xs={6}>
              <Typography align="center">Year {yearNow} Expenses</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                onInput={(e) => setExpenses(e.target.value)}
                id="outlined-basic"
                label="RM"
                value={expenses}
                placeholder="Enter Number Only"
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item xs={9} paddingRight="5px">
              <Typography align="right">{saveExpensesDate}</Typography>
            </Grid>
            <Grid item xs={3} paddingRight="5px" align="right">
              <Button type="submit" variant="contained" sx={{ padding: "5px" }}>
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
        <form noValidate autoComplete="off" onSubmit={handleSaveCol}>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
            sx={{ padding: "20px 15px", color: "white" }}
          >
            <Grid item xs={6}>
              <Typography align="center">Year {yearNow} Collection</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                onInput={(e) => setCollection(e.target.value)}
                id="outlined-basic"
                label="RM"
                value={collection}
                placeholder="Enter Number Only"
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item xs={9} paddingRight="5px">
              <Typography align="right">{saveCollectionDate}</Typography>
            </Grid>
            <Grid item xs={3} paddingRight="5px" align="right">
              <Button type="submit" variant="contained" sx={{ padding: "5px" }}>
                Save
              </Button>
            </Grid>
          </Grid>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              The amount is saved successfully!
            </Alert>
          </Snackbar>
        </form>
      </Box>
      <Box sx={{ marginTop: "15px", typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable"
            scrollButtons="auto" allowScrollButtonsMobile>
            <Tab label="Unrealised" value="1" />
            <Tab label="Realised" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{padding: "10px 15px"}}>
          <Box 
            sx={{
              width: '100%', 
              typography: 'body1',
              backgroundColor: "#333333",
              borderRadius: "5px",
              marginTop: "15px",
              padding: "20px",
            }}
          >
            <Grid container alignItems="center" spacing={1.5}>
              <Grid item xs={10}>
                <Button variant='contained' color="warning">
                  <Typography color="white">Unrealised</Typography>
                </Button>
              </Grid>
              <Grid item xs={2}><Typography color="white">RM</Typography></Grid>
              <Grid item xs={12}>
                  <Typography color="white">Construction ABC</Typography>
              </Grid>
              <Grid item xs={9}><Typography color="white">- PIC SIMEON</Typography></Grid>
              <Grid item xs={3} align="center"><Typography color="white">1,000</Typography></Grid>
              <Grid item xs={12}>
                  <Typography color="white">Construction EDF</Typography>
              </Grid>
              <Grid item xs={9}><Typography color="white">- PIC Martha</Typography></Grid>
              <Grid item xs={3} align="center"><Typography color="white">3,000</Typography></Grid>
              <Grid item xs={12}>
                  <Typography color="white">Construction EDF</Typography>
              </Grid>
              <Grid item xs={9}><Typography color="white">- PIC Sapphira</Typography></Grid>
              <Grid item xs={3} align="center"><Typography color="white">5,000</Typography></Grid>
              <Grid item xs={12}>
                  <Typography color="white">Construction YYY</Typography>
              </Grid>
              <Grid item xs={9}><Typography color="white">- PIC Bossku</Typography></Grid>
              <Grid item xs={3} align="center"><Typography color="white">2,000</Typography></Grid>
              <Grid item xs={12}>
                  <Typography color="white">Construction ZZZ</Typography>
              </Grid>
              <Grid item xs={9}><Typography color="white">- PIC Bossku</Typography></Grid>
              <Grid item xs={3} align="center"><Typography color="white">10,000</Typography></Grid>
              <Grid item xs={9} align='right'>
                  <Typography color="white" fontWeight="700">Total</Typography>
              </Grid>
              <Grid item xs={3} align="center"><Typography color="white" fontWeight="700">21,000</Typography></Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value="2" sx={{padding: "10px 15px"}}>
        <Box 
            sx={{
              width: '100%', 
              typography: 'body1',
              backgroundColor: "#333333",
              borderRadius: "5px",
              marginTop: "15px",
              padding: "20px",
            }}
          >
            <Grid container alignItems="center" spacing={1.5}>
              <Grid item xs={10}>
                <Button variant='contained' color="success">
                  <Typography color="white">Realised</Typography>
                </Button>
              </Grid>
              <Grid item xs={2}><Typography color="white">RM</Typography></Grid>
              <Grid item xs={12}>
                  <Typography color="white">Construction SSS</Typography>
              </Grid>
              <Grid item xs={9}><Typography color="white">- PIC SIMEON</Typography></Grid>
              <Grid item xs={3} align="center"><Typography color="white">2,000</Typography></Grid>
              <Grid item xs={12}>
                  <Typography color="white">Construction HHH</Typography>
              </Grid>
              <Grid item xs={9}><Typography color="white">- PIC Martha</Typography></Grid>
              <Grid item xs={3} align="center"><Typography color="white">1,000</Typography></Grid>
              <Grid item xs={12}>
                  <Typography color="white">Construction PDF</Typography>
              </Grid>
              <Grid item xs={9}><Typography color="white">- PIC Josiah</Typography></Grid>
              <Grid item xs={3} align="center"><Typography color="white">1,000</Typography></Grid>
              <Grid item xs={9} align='right'>
                  <Typography color="white" fontWeight="700">Total</Typography>
              </Grid>
              <Grid item xs={3} align="center"><Typography color="white" fontWeight="700">4,000</Typography></Grid>
            </Grid>
          </Box>
        </TabPanel>
      </TabContext>
      </Box>
      
      {/* Dialog & BottomNav */}
      <BottomNav />
      <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{backgroundColor: "#0288d1"}}>
          {"The Total Colletion is greater than Total Expenses"}
        </DialogTitle>
        <DialogContent sx={{backgroundColor: "#0288d1"}}>
          <DialogContentText id="alert-dialog-description" sx={{color: "white"}}>
            Do you want to release bonus for completed projects now?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{backgroundColor: "white"}}>
          <Button onClick={closeDialog}>Not now</Button>
          <Button onClick={closeDialog} href="/ceo/finance/realisedBook"autoFocus>
            Yes, proceed
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

// Grid
//         container
//         justifyContent="space-around"
//         alignItems="center"
//         spacing={1}
//         sx={{padding: "20px 15px"}}
//       >
//         <Grid item xs={6}>
//           <Typography align="center">Year 2022 Collection</Typography>
//         </Grid>
//         <Grid item xs={6}>
//           <Box
//             align="center"
//             sx={{
//               padding: "5px 0",
//               boxShadow: 2,
//               borderRadius: "20px",
//               backgroundColor: "#1E90FF",
//               color: "white",
//             }}
//           >
//             <Typography align="center">RM 7,000</Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} paddingRight="5px">
//           <Typography align="right">Last Update:  9/20/22</Typography>
//         </Grid>
//       </Grid>
