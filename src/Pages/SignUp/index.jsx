import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, IconButton, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import test from "../../assets/sideImage.jpg";
import { style } from "./style";
const SignUp = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Box component="div" style={style.border}>
      <Box component={"img"} src={test} alt="Mountain" sx={style.image} />
      <Box component={"div"} sx={style.container}>
        <Box component={"div"} sx={style.rightSide}>
          <Box component={"div"} sx={style.signInDiv}>
            <Typography variant="p" sx={style.paragraph}>
              Already have an account?
            </Typography>
            <Button variant="contained" sx={style.button}>
              Sign In
            </Button>
          </Box>
          <Typography variant="h4" gutterBottom sx={style.heading}>
            Welcome to Campus App!
          </Typography>
          <Typography variant="p" sx={style.paragraphTwo}>
            Register your account
          </Typography>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={style.name}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={style.email}
          />
          <FormControl sx={style.role}>
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
            sx={style.password}
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
            sx={style.confirm}
            type={"password"}
          />
          <Stack spacing={2} direction="row">
            <Button variant="contained" sx={style.buttonTwo}>
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
