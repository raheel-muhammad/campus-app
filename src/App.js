import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ForgotPassword from "./Pages/ForgotPassword";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <SignUp /> */}
      <Login />
      {/* <ForgotPassword /> */}
    </ThemeProvider>
  );
}

export default App;
