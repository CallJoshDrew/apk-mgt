import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

export default function FinanceCard() {
  return (
    <Container maxWidth="md" sx={{ margin: "15px 0", padding: "20px 10px" }}>
      <Link href="/staff/finance" underline="none" color="black">
        <Box sx={{ paddingLeft: "10px", paddingBottom: "5px" }}>
          <Typography variant="h5" color="white">
            Year 2022
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            border: 1,
            borderColor: "white",
            borderRadius: "5px",
            padding: "10px 5px",
            backgroundColor: "#f5f5f5",
          }}>
          <Grid container justifyContent='space-around' alignItems='center'>
            <Grid item xs={5} sx={{ padding: '10px 5px', boxShadow: 2, borderRadius: "5px", backgroundColor: "#0FC432", color: "white",  marginRight:'5px'}} align="center">
              <Typography >Total Realised</Typography>
              <Typography >RM 0</Typography>
            </Grid>
            <Grid item xs={6} sx={{ padding: '10px 5px', boxShadow: 2, borderRadius: "5px", backgroundColor: "#1E90FF", color: "white", marginLeft:'5px'}} align="center">
              <Typography >Total Unrealised</Typography>
              <Typography >RM 500</Typography>
            </Grid>            
          </Grid>
        </Box>
      </Link>
    </Container>
  );
}
