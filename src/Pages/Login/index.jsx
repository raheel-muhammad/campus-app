import { Box, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { style } from "./style";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CustomTextField from "../../components/TextField";
import CustomButton from "../../components/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import test from "../../Assets/sideImage.jpg";
import { useFormik } from "formik";
import { signInSchema } from "../../Schemas";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const auth = getAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        navigate("/Dashboard");
      } catch (error) {
        setLoading(false);
        alert(error?.message.split("/")[1].replace(")", ""));
      }
    },
  });
  const handleSignUp = () => {
    navigate("/signUp");
  };
  const handleForgotPass = () => {
    navigate("/forgotPassword");
  };

  const formikValidation = () => {
    return !!(
      Object.values(formik?.errors).some((error) => !!error) ||
      Object.values(formik?.values).some((value) =>
        typeof value === "boolean" ? !value : !value?.length
      )
    );
  };
  return (
    <Box component={"div"} sx={style.border}>
      <Box src={test} component={"img"} alt="Mountain" sx={style.image} />
      <Box component={"div"} sx={style.container}>
        <Box
          component={"form"}
          sx={style.rightSide}
          onSubmit={formik.handleSubmit}
        >
          <Typography variant="h4" sx={style.signIn}>
            Sign In
          </Typography>
          <CustomTextField
            label="Email"
            name="email"
            id="email"
            sx={{ mb: formik.errors.email ? 1.5 : 2.5 }}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email ? (
            <p style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}>
              {formik.errors.email}
            </p>
          ) : null}
          <CustomTextField
            id="password"
            label="Password"
            name="password"
            sx={{ mb: formik.errors.password ? 1.5 : 2.5 }}
            value={formik.values.password}
            onChange={formik.handleChange}
            variant="outlined"
            style={style.password}
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
          {formik.errors.password && formik.touched.password ? (
            <p style={{ marginTop: "6px", marginBottom: "12px", color: "red" }}>
              {formik.errors.password}
            </p>
          ) : null}
          <FormGroup sx={style.forgotPassword}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
            <Typography
              variant="p"
              sx={style.paragraph}
              onClick={handleForgotPass}
            >
              Forgot Password?
            </Typography>
          </FormGroup>
          <Stack spacing={2} direction="row">
            <CustomButton
              type="submit"
              disabled={formikValidation()}
              loading={loading ? "Loading..." : "Sign In"}
            />
          </Stack>
          <Box sx={style.paragraphDiv}>
            <Typography variant="p" sx={style.paragraphTwo}>
              Don't have an account yet?
            </Typography>
            <Typography
              variant="p"
              sx={style.paragraphThree}
              onClick={handleSignUp}
            >
              Sign Up
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
