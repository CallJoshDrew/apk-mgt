import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import Bossku from "../../public/bossku.jpg"
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import FinanceCard from "../../components/financeCard";
import BottomNav from "../../components/bottomNav";

export default function Dashboard() {
  const page = "dashboard"
  return (
    <Container maxWidth="md" sx={{padding:"30px 0"}}>
      <Grid container justifyContent="space-between" alignItems="center" padding="0 20px">
        <Grid item ><Typography color="white">Dashboard</Typography></Grid>
        <Grid item ><Link href="/profile"><Avatar alt="user" src={Bossku.src} /></Link></Grid>
        <Grid item xs={12}><Typography variant="h4" color="white" align="left">Hello Bossku</Typography></Grid>
      </Grid>
      <FinanceCard />
      <BottomNav page={page}/>
    </Container>
  );
}
