import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import ForgotPassword from "./Pages/ForgotPassword";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
const theme = createTheme({
  palette: {
    primary: {
      main: "#7433FF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignUp />
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
    </ThemeProvider>
  );
}

export default App;
