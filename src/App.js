import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";

import AdminDashboard from "./components/AdminDashboard";
import ForgotPassword from "./Pages/ForgotPassword";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import theme from "./theme";
import CompanyCards from "./components/CompanyCards";
import Router from "./Router/Router";
import { useDispatch } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";
import {
  onAuthStateChanged,
  onValue,
  ref,
  db,
  auth,
} from "../src/Lib/Firebase";
import { getUserData } from "./redux/action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onValue(ref(db, "users/" + user.uid), (snapshot) => {
          const data = snapshot.val();
          console.log(data, "123");
          dispatch(
            getUserData({
              userId: user.uid,
              ...data,
            })
          );
        });
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Toaster position="top-right" reverseOrder={false} />
      <Router />
    </ThemeProvider>
  );
};

export default App;
