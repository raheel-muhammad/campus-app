import * as Yup from "yup";
export const signUpSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  role: Yup.string().required("Role must be selected"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password should be same"),
});

export const signInSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});
