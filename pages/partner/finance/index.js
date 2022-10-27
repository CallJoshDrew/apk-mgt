import React from "react";
import Box from "@mui/material/Box";
import TopNav from "../components/topNav";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BottomNav from "../components/bottomNav";


import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function FinanceYear() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const yearDate = Date.now();
  const yearNow = new Intl.DateTimeFormat("en-US", {
    year: "numeric"
  }).format(yearDate);

  const pageTitle = `Year ${yearNow} Summary`

  return (
    <Box marginBottom="60px">
      <TopNav pageTitle={pageTitle}/>
      
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
      <BottomNav />
    </Box>
  );
}
