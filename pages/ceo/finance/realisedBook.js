import React from 'react'
import Box from "@mui/material/Box";
import TopNav from "../components/topNav";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from '../components/bottomNav'

export default function RealisedBook() {
  const pageTitle = "RealisedBook"
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginTop: "15px", typography: 'body1', marginBottom:"60px" }}>
      <TopNav pageTitle={pageTitle}/>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable"
            scrollButtons="auto" allowScrollButtonsMobile>
            <Tab label="Unrealised" value="1" />
            <Tab label="Realised" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{padding: "10px 15px"}}>
            <Grid container alignItems="center" spacing={1.5}>
              <Grid item xs={12}>
                <Box 
                  sx={{backgroundColor: "#ffa726",
                  borderRadius: "5px",
                  marginTop: "15px",
                  padding: "20px",}}>
                    <Grid  container align="center" spacing={1}>
                    <Grid item xs={6}><Typography color="white">Construction ABC</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">RM 1,000</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">Phase 1 - Ongoing</Typography></Grid>
                    <Grid item xs={6}><Button variant="contained" sx={{backgroundColor: 'white', color:"#ffa726"}}>Realise?</Button></Grid>
                    </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box 
                  sx={{backgroundColor: "#ffa726",
                  borderRadius: "5px",
                  marginTop: "15px",
                  padding: "20px",}}>
                    <Grid  container align="center" spacing={1}>
                    <Grid item xs={6}><Typography color="white">Construction EDF</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">RM 3,000</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">Phase 1 - Haven&apos;t Start</Typography></Grid>
                    <Grid item xs={6}><Button variant="contained" sx={{backgroundColor: 'white', color:"#ffa726"}}>Realise?</Button></Grid>
                    </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box 
                  sx={{backgroundColor: "#0FC432",
                  borderRadius: "5px",
                  marginTop: "15px",
                  padding: "20px",}}>
                    <Grid  container align="center" spacing={1}>
                    <Grid item xs={6}><Typography color="white">Construction EDF</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">RM 5,000</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">Phase 1 - Completed</Typography></Grid>
                    <Grid item xs={6}><Button variant="contained" sx={{backgroundColor: 'white', color:"#0FC432"}}>Realise?</Button></Grid>
                    </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box 
                  sx={{backgroundColor: "#ffa726",
                  borderRadius: "5px",
                  marginTop: "15px",
                  padding: "20px",}}>
                    <Grid  container align="center" spacing={1}>
                    <Grid item xs={6}><Typography color="white">Construction YYY</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">RM 2,000</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">Phase 1 - Terminated</Typography></Grid>
                    <Grid item xs={6}><Button variant="contained" sx={{backgroundColor: 'white', color:"#ffa726"}}>Realise?</Button></Grid>
                    </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box 
                  sx={{backgroundColor: "#ffa726",
                  borderRadius: "5px",
                  marginTop: "15px",
                  padding: "20px",}}>
                    <Grid  container align="center" spacing={1}>
                    <Grid item xs={6}><Typography color="white">Construction ZZZ</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">RM 10,000</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">Phase 1 - Unappointed</Typography></Grid>
                    <Grid item xs={6}><Button variant="contained" sx={{backgroundColor: 'white', color:"#ffa726"}}>Realise?</Button></Grid>
                    </Grid>
                </Box>
              </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value="2" sx={{padding: "10px 15px"}}>
            <Grid container alignItems="center" spacing={1.5}>
              <Grid item xs={12}>
                <Box 
                  sx={{backgroundColor: "#333333",
                  borderRadius: "5px",
                  marginTop: "15px",
                  padding: "20px",}}>
                    <Grid  container align="center" spacing={1}>
                    <Grid item xs={6}><Typography color="white">Construction SSS</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">RM 2,000</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">Completed</Typography></Grid>
                    <Grid item xs={6}><Button variant="contained" sx={{backgroundColor: 'white', color:"#333333"}}>Done</Button></Grid>
                    </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box 
                  sx={{backgroundColor: "#333333",
                  borderRadius: "5px",
                  marginTop: "15px",
                  padding: "20px",}}>
                    <Grid  container align="center" spacing={1}>
                    <Grid item xs={6}><Typography color="white">Construction HHH</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">RM 1,000</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">Completed</Typography></Grid>
                    <Grid item xs={6}><Button variant="contained" sx={{backgroundColor: 'white', color:"#333333"}}>Done</Button></Grid>
                    </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box 
                  sx={{backgroundColor: "#333333",
                  borderRadius: "5px",
                  marginTop: "15px",
                  padding: "20px",}}>
                    <Grid  container align="center" spacing={1}>
                    <Grid item xs={6}><Typography color="white">Construction PDF</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">RM 1,000</Typography></Grid>
                    <Grid item xs={6}><Typography color="white">Completed</Typography></Grid>
                    <Grid item xs={6}><Button variant="contained" sx={{backgroundColor: 'white', color:"#333333"}}>Done</Button></Grid>
                    </Grid>
                </Box>
              </Grid>
            </Grid>
        </TabPanel>
      </TabContext>
      <BottomNav />
      </Box>
  )
}

