import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import test from "../../Assets/sideImage.jpg";
import CustomButton from "../../components/Button";
import CustomTextField from "../../components/TextField";
import { forgotPasswordSchema } from "../../Schemas";
import { style } from "./style";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await sendPasswordResetEmail(auth, values.email).then((response) => {});
        formik.resetForm();
        setLoading(false);
        toast.success("Email Send Successfully");
      } catch (error) {
        setLoading(false);
        alert(error?.message.split("/")[1].replace(")", ""));
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
    <Box component={"div"} sx={style.border}>
      <Box component={"img"} src={test} alt="Mountain" sx={style.image} />
      <Box component={"div"} sx={style.container}>
        <Box
          component={"form"}
          sx={style.rightSide}
          onSubmit={formik.handleSubmit}
        >
          <Typography variant="h4" sx={style.ForrgotPassword}>
            Forgot Password
          </Typography>
          <Typography variant="p" sx={style.paragraph}>
            <pre>
              {"Enter your email to receive an email to reset your\npassword"}
            </pre>
          </Typography>
          <CustomTextField
            label="Email"
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
          <CustomButton
            type="submit"
            disabled={formikValidation()}
            loading={loading ? "Loading..." : "Send"}
          />
          <Box component={"div"} sx={style.paragraphDiv}>
            <Typography variant="p" gutterBottom sx={style.paragraphTwo}>
              Already have an account?
            </Typography>
            <Typography
              variant="p"
              gutterBottom
              sx={style.paragraphThree}
              onClick={handleSignIn}
            >
              Sign In
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
