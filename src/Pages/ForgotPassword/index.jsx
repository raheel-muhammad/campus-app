import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import test from "../../assets/sideImage.jpg";
import { style } from "./style";

const ForgotPassword = () => {
  return (
    <Box component={"div"} sx={style.border}>
      <Box component={"img"} src={test} alt="Mountain" sx={style.image} />
      <Box component={"div"} sx={style.container}>
        <Box component={"div"} sx={style.rightSide}>
          <Typography variant="h4" sx={style.ForgotPassword}>
            Forgot Password
          </Typography>
          <Typography variant="p" sx={style.paragraph}>
            <pre>
              {"Enter your email to recieve an email to \n reset your password"}
            </pre>
          </Typography>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={style.email}
          />
          <Stack spacing={2} direction="row">
            <Button variant="contained" sx={style.button}>
              Send
            </Button>
          </Stack>
          {
            <Box component={"div"} sx={style.paragraphDiv}>
              <Typography variant="p" gutterBottom sx={style.paragraphTwo}>
                Already have an account?
              </Typography>
              <Typography variant="p" gutterBottom sx={style.paragraphThree}>
                Sign In
              </Typography>
            </Box>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
