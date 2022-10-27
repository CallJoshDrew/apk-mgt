
import styles from "../../styles/Home.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import BGimage from "../../public/emanagementBG.png";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

import { inputLabelClasses } from "@mui/material/InputLabel";
import Link from "@mui/material/Link";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Home() {
  return (
    <div className={styles.container}>
      <Container maxWidth="md" className={styles.container} sx={{paddingBottom:"30px", marginBottom:"10px"}}>
        <ThemeProvider theme={theme}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Box
                className={styles.bgimage}
                component="img"
                alt="e-management"
                src={BGimage.src}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" className={styles.h1} align="center">
                Welcome to APK e-Management
              </Typography>
            </Grid>
          </Grid>
          <Box
            noValidate
            autoComplete="off"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            gap="20px"
						flexWrap="wrap"
						sx={{padding: "30px 0"}}
          >
            <TextField
              label="Your Email"
              type='email'
              variant="outlined"
              autoComplete="off"
              required
              sx={{ input: { color: "white", width: '25ch' }}}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: "white",
                  [`&.${inputLabelClasses.shrink}`]: {
                    // set the color of the label when shrinked (usually when the TextField is focused)
                    color: "white",
                  },
                },
              }}
            />
            <TextField
              label="Enter Password"
              type='password'
              variant="outlined"
              autoComplete="off"
              required
              sx={{ input: { color: "white", width: '25ch' } }}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: "white",
                  [`&.${inputLabelClasses.shrink}`]: {
                    // set the color of the label when shrinked (usually when the TextField is focused)
                    color: "white",
                  },
                },
              }}
            />
            <Button variant="contained" href="/partner/dashboard" fullWidth sx={{padding: "10px 20px"}}>
              Submit
            </Button>
						<Typography variant="h7" component="div" align="center" sx={{color: "white"}}>
							Forgot Password? <span><Link href="/password" underline="none" color="white">Click here</Link></span>
						</Typography>
						<Typography variant="h7" component="div" align="center" sx={{color: "white"}}>
							By Continuing you agree to the Terms and Conditions
						</Typography>
          </Box>
        </ThemeProvider>
      </Container>
    </div>
  );
}

{
  /* <main className={styles.main}>
  <h1 className={styles.title}>
    Welcome to <a href="https://nextjs.org">Next.js!</a> integrated with{" "}
    <a href="https://mui.com/">Material-UI!</a>
  </h1>
  <p className={styles.description}>
    Get started by editing <code className={styles.code}>pages/index.js</code>
  </p>
</main>; */
}
