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

const Login = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Box
      component={"div"}
      sx={{ display: "flex", border: "50px solid #B99AFF",  borderImage: 'linear-gradient(to right, #b99aff,  #69477d) 1',
      borderImageSlice: 1,height:"869px",overflow:"auto" }}
    >
      <img src={test} alt="Mountain" style={{ width: "50%",height:"100%" }} />
      <Box component={"div"} sx={style.container}>
        <Box sx={{ display: "flex", flexDirection: "column"}}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "700" }}>
            Sign In
          </Typography>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ marginBottom: 5 }}
          />
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
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              letterSpacing: "space-between",
              marginBottom: 5,
            }}
          >
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Remember me"
            />
            <Typography
              variant="p"
              gutterBottom
              sx={{
                mr: 2,
                marginTop: "10px",
                color: "darkgrey",
                textDecoration: "underline",
              }}
            >
              Forgot Password?
            </Typography>
          </FormGroup>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              sx={{
                borderRadius: 50,
                backgroundColor: "#7433FF",
                width: "50%",
              }}
            >
              Sign In
            </Button>
          </Stack>
          {
            <Box sx={{ marginTop: "20px" }}>
              <Typography
                variant="p"
                gutterBottom
                sx={{ mr: 2, marginTop: "10px", color: "darkgrey" }}
              >
                Don't have an account yet?
              </Typography>
              <Typography
                variant="p"
                gutterBottom
                sx={{
                  mr: 2,
                  marginTop: "10px",
                  color: "black",
                  textDecoration: "underline",
                }}
              >
                Sign Up
              </Typography>
            </Box>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
