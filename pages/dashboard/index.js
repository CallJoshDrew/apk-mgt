import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import Bossku from "../../public/bossku.jpg"
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import FinanceCard from "../../components/financeCard";
import BottomNav from "../../components/bottomNav";
import HavenStart from "../../components/haveNotStart";


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Ongoing from '../../components/ongoing'
import Completed from '../../components/completed'
import Unappointed from '../../components/unappointed'
import Terminated from '../../components/terminated'

export default function Dashboard() {
  const page = "dashboard"

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md" sx={{padding:"30px 0", marginBottom:"60px"}}>
      <Grid container justifyContent="space-between" alignItems="center" padding="0 20px">
        <Grid item ><Typography color="white">Dashboard</Typography></Grid>
        <Grid item ><Link href="/profile"><Avatar alt="user" src={Bossku.src} /></Link></Grid>
        <Grid item xs={12}><Typography variant="h4" color="white" align="left">Hello Bossku</Typography></Grid>
      </Grid>
      <FinanceCard />
      <Grid container paddingLeft="30px">
        <Grid item xs={4}><Typography variant="h6">All Projects</Typography></Grid>
          <Link href="/addNewProject"><Fab sx={{ height: '1rem', minHeight:'2rem', width: '2rem' }} color="primary" aria-label="add">
            <AddIcon sx={{ fontSize: "1rem" }} />
          </Fab></Link>
      </Grid>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable"
            scrollButtons="auto" allowScrollButtonsMobile>
            <Tab label="Ongoing" value="1" />
            <Tab label="Haven't Start" value="2" />
            <Tab label="Completed" value="3" />
            <Tab label="Terminated" value="4" />
            <Tab label="Unappointed" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"><Link href="/project/ongoing" underline="none" color="white"><Ongoing /></Link></TabPanel>
        <TabPanel value="2"><Link href="/project/haveNotStart" underline="none" color="white"><HavenStart /></Link></TabPanel>
        <TabPanel value="3"><Link href="/project/completed" underline="none" color="white"><Completed /></Link></TabPanel>
        <TabPanel value="4"><Link href="/project/terminated" underline="none" color="white"><Terminated /></Link></TabPanel>
        <TabPanel value="5"><Link href="/project/unappointed" underline="none" color="white"><Unappointed /></Link></TabPanel>
      </TabContext>
      </Box>

      <BottomNav page={page}/>
    </Container>
  );
}

