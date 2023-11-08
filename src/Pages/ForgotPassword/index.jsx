import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import test from "../../assets/sideImage.jpg";
import { style } from "./style";
import CustomTextField from "../../components/textField";
import CustomButton from "../../components/button";
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
          <CustomTextField label="Email" sx={style.name} />

          <Stack spacing={2} direction="row">
            <CustomButton sx={style.button} />
          </Stack>
          <Box component={"div"} sx={style.paragraphDiv}>
            <Typography variant="p" gutterBottom sx={style.paragraphTwo}>
              Already have an account?
            </Typography>
            <Typography variant="p" gutterBottom sx={style.paragraphThree}>
              Sign In
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
