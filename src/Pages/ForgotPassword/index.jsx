import { Box } from "@mui/material";
import React, { useState } from "react";
import { style } from "./style";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import test from '../../assets/sideImage.jpg';


const ForgotPassword = () => {

  return (
    <Box component = {'div'} sx={{display:"flex",border:"50px solid #B99AFF",  borderImage: 'linear-gradient(to right, #b99aff, #69477d) 1',
    borderImageSlice: 1,height:"869px",overflow:"auto"}}>
    <img src={test} alt="Mountain" style={{width:'50%'}}/>
  <Box component={"div"} sx={style.container}>
    <Box sx={{ display: "flex", flexDirection: "column"}}>
      <Typography variant="h4" gutterBottom sx={{fontWeight:"700"}}>
        Forgot Password
      </Typography>    
      <Typography variant="p" gutterBottom  style={{marginBottom: "30px",whiteSpace:""}}>
    <pre>{"Enter your email to recieve an email to \n reset your password"}</pre>
      </Typography>  
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{ marginBottom: 5 }}
        />
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          sx={{ borderRadius: 50, backgroundColor: "#7433FF", width: "50%" }}
          >
          Send
        </Button>
      </Stack>
            {<Box sx={{marginTop:"20px"}}>
              <Typography variant="p" gutterBottom sx={{mr:2,marginTop:'10px',
                  color: "darkgrey"}} >
                Already have an account?
              </Typography>
              <Typography variant="p" gutterBottom sx={{mr:2,marginTop:'10px',
                  color: "black",textDecoration:"underline"}} >
                Sign In
              </Typography>
            </Box> }

    </Box>
  </Box>
  </Box>
  )
}

export default ForgotPassword