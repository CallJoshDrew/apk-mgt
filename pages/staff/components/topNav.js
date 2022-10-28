import React from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import Bossku from "../../../public/ismail.jpg"

export default function TopNav({pageTitle}) {
  return (
    <React.Fragment>
      <Box sx={{ padding: "20px 5px 15px"}}>
        {/* boxShadow: "0.1px 1px white" temporary disable */}
        <Grid container justifyContent="space-between" alignItems="center" padding="0 20px">
          <Link href="/staff/dashboard" underline="none" aria-label="back to dashboard page"><ArrowCircleLeftIcon fontSize='large'sx={{color: "white"}}/></Link>
          <Grid item ><Typography variant="h7" color="white" align="left">{pageTitle}</Typography></Grid>
          <Grid item ><Link href="/staff/profile"><Avatar alt="user" src={Bossku.src} /></Link></Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

