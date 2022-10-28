import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Input } from "@mui/material";
import Task from "./task";


export default function Phase(count, index) {
  const phase = count.phase;
  const [phase1, setPhase1] = useState("");
  console.log(`"count": ${phase}`);
  
  return (
    <React.Fragment>
      <Box key={index}
            sx={{
              // border: 1,
              // // borderColor: "white",
              // backgroundColor: "#333333",
              borderRadius: "15px",
              padding: "15px 0px",
            }}
          >
            <Grid container alignItems="center">
              <Grid item xs={4} paddingLeft="0px">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "5px",
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "700",
                  }}
                >
                  Phase { phase ? phase : 1}
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Input
                  placeholder="Title"
                  aria-label="Phase 1 Title"
                  disableUnderline={true}
                  onInput={(e) => setPhase1(e.target.value)}
                />
              </Grid>
            </Grid>
            {/* Task 1 Container */}
            <Task />
          </Box>
    </React.Fragment>
  )
}

