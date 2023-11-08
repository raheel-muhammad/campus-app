import { Box, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { style } from "./style";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import test from "../../assets/sideImage.jpg";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CustomTextField from "../../components/textField";
import CustomButton from "../../components/button";
const Login = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Box component={"div"} sx={style.border}>
      <Box src={test} component={"img"} alt="Mountain" sx={style.image} />
      <Box component={"div"} sx={style.container}>
        <Box sx={style.rightSide}>
          <Typography variant="h4" sx={style.signIn}>
            Sign In
          </Typography>
          <CustomTextField label="Email" />

          <CustomTextField
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
          <FormGroup sx={style.forgotPassword}>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Remember me"
            />
            <Typography variant="p" sx={style.paragraph}>
              Forgot Password?
            </Typography>
          </FormGroup>
          <Stack spacing={2} direction="row">
            <CustomButton text="Sign In" />
          </Stack>
          <Box sx={style.paragraphDiv}>
            <Typography variant="p" sx={style.paragraphTwo}>
              Don't have an account yet?
            </Typography>
            <Typography variant="p" sx={style.paragraphThree}>
              Sign Up
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
