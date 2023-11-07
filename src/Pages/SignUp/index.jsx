import { Box, IconButton , InputAdornment } from "@mui/material";
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
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const SignUp = () => {
  const [toggle, setToggle] = useState(false);
  return (
<Box component="div" style={{
  display: "flex",
  border: "50px solid  #B99AFF",
  borderImage: 'linear-gradient(to right, #b99aff,  #69477d) 1',
    borderImageSlice: 1,
    height:"869px",
    overflow:"auto",
}}>

      <Box  component={'img'} src={test} alt="Mountain" sx={{width:'50%',height:"100%",display:{xs:"none",sm:"block",md:'block'}}}/>
    <Box component={"div"} sx={style.container}>
      <Box sx={{ display: "flex", flexDirection: "column"}}>
      <Box sx={{display:"flex",justifyContent:'flex-end', marginBottom: 5 }} >
        <Typography variant="p" gutterBottom sx={{mr:2,marginTop:'7px',
            color: "darkgrey"}} >
          Already have an account?
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: 50,
            backgroundColor: "#7433FF",
            padding:"10px"
          }}
          >
          Sign In
        </Button>
      </Box>
        <Typography variant="h4" gutterBottom sx={{fontWeight:"700"}}>
          Welcome to Campus App!
        </Typography>
        <Typography
          variant="p"
          gutterBottom
          sx={{
            marginBottom: 5,
            color: "darkgrey",
          }}
          >
          Register your account
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{ marginBottom: 5 }}
          />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ marginBottom: 5 }}
          />
        <FormControl sx={{ marginBottom: 5 }}>
          <Typography id="demo-radio-buttons-group-label">
            Select Role:
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="admin"
            name="radio-buttons-group"
          >
           
            <FormControlLabel
              value="student"
              control={<Radio />}
              label="Student"
              />
            <FormControlLabel
              value="company"
              control={<Radio />}
              label="Company"
              />
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ marginBottom: 5 }}
          type={toggle ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setToggle((prev) => !prev)}>
                    {toggle ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        <TextField
          id="outlined-basic"
          label="Confirm"
          variant="outlined"
          sx={{ marginBottom: 5 }}
          type={"password"}
          />
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            sx={{ borderRadius: 50, backgroundColor: "#7433FF", width: "50%",padding:"10px" }}
            >
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Box>
            </Box>
  );
};

export default SignUp;
