import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, IconButton, InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import CustomTextField from "../../components/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import test from "../../assets/sideImage.jpg";
import { style } from "./style";
import CustomButton from "../../components/Button";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db, ref, set } from "../../Lib/Firebase";
import { getUserData } from "../../redux/action";
import toast from "react-hot-toast";

const SignUp = () => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      role: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      console.log("values", values);
      setLoading(true);
      try {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        ).then(async (res) => {
          {
            set(ref(db, "users/" + res.user.uid), {
              username: values.name,
              usermail: values.email,
              userrole: values.role,
            });
          }
          formik.resetForm();
          setLoading(false);
          dispatch(
            getUserData({
              userId: res.user.uid,
              username: values.name,
              usermail: values.email,
              userrole: values.role,
            })
          );
          toast.success("Registered Successfully");
          navigate("/Dashboard");
        });
      } catch (error) {
        toast.error(error?.message.split("/")[1].replace(")", ""));
        console.log("error", error);
        setLoading(false);
      }
    },
  });
  const formikValidation = () => {
    return !!(
      Object.values(formik?.errors).some((error) => !!error) ||
      Object.values(formik?.values).some((value) =>
        typeof value === "boolean" ? !value : !value?.length
      )
    );
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <Box component="div" style={style.border}>
      <Box component={"img"} src={test} alt="Mountain" sx={style.image} />
      <Box component={"div"} sx={style.container}>
        <Box
          component={"form"}
          sx={style.rightSide}
          onSubmit={formik.handleSubmit}
        >
          <Box component={"div"} sx={style.signInDiv}>
            <Typography variant="p" sx={style.paragraph}>
              Already have an account?
            </Typography>
            <CustomButton text="Sign In" onClick={handleSignIn} />
          </Box>
          <Typography variant="h4" sx={style.heading}>
            Welcome to Campus App!
          </Typography>
          <Typography variant="p" sx={style.paragraphTwo}>
            Register your account
          </Typography>
          {formik.values.role === "student" && "iiiiiiiisdfdsfdsfdsf"}
          <CustomTextField
            label="Name"
            name="name"
            sx={{ mb: formik.errors.name ? 1.5 : 2.5 }}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name ? (
            <p style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}>
              {formik.errors.name}
            </p>
          ) : null}

          <CustomTextField
            label="Email"
            type="text"
            name="email"
            sx={{ mb: formik.errors.email ? 1.5 : 2.5 }}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email ? (
            <p style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}>
              {formik.errors.email}
            </p>
          ) : null}
          <FormControl sx={style.role}>
            <Typography
              id="demo-radio-buttons-group-label"
              sx={{ mb: formik.errors.role ? 1.5 : 2.5 }}
            >
              Select Role:
            </Typography>
            {formik.errors.role && formik.touched.role ? (
              <p
                style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}
              >
                {formik.errors.role}
              </p>
            ) : null}
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="admin"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
                name="role"
                onClick={() => formik.setFieldValue("role", "student")}
              />
              <FormControlLabel
                value="company"
                control={<Radio />}
                label="Company"
                name="role"
                onClick={() => formik.setFieldValue("role", "company")}
              />
            </RadioGroup>
          </FormControl>
          <CustomTextField
            label="Password"
            type={toggle ? "text" : "password"}
            name="password"
            sx={{ mb: formik.errors.password ? 1.5 : 2.5 }}
            value={formik.values.password}
            onChange={formik.handleChange}
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
            <p style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}>
              {formik.errors.password}
            </p>
          ) : null}
          <CustomTextField
            label="Confirm"
            type={toggle ? "text" : "password"}
            name="confirmPassword"
            sx={{ mb: formik.errors.confirmPassword ? 1.5 : 2.5 }}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
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
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <p style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}>
              {formik.errors.confirmPassword}
            </p>
          ) : null}

          <Stack spacing={2} direction="row">
            <CustomButton
              type="submit"
              disabled={formikValidation()}
              loading={loading ? "Loading..." : "Sign Up"}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
