import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import theme from "./theme";
import Router from "./Router/Router";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged, onValue, ref, db, auth } from "./Lib/Firebase";
import { getAllUserData, getUserData, getCompanyData } from "./redux/Action";
import { getAllJobs } from "./redux/Action/loginUser";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let userData;
        onValue(ref(db, "users/" + user.uid), (snapshot) => {
          userData = snapshot.val();
          dispatch(getUserData({ ...userData }));
          if (userData?.role === "admin") {
            onValue(ref(db, "users/"), (snapshot) => {
              const allUsersData = snapshot.val();
              dispatch(getAllUserData(Object.values(allUsersData)));
            });
          }
          if (userData?.role === "company") {
            onValue(ref(db, "posts/" + user.uid), (snapshot) => {
              const jobs = snapshot.val();
              dispatch(getCompanyData(Object.values(jobs)));
            });
          }
          if (userData?.role === "student") {
            onValue(ref(db, "posts/"), (snapshot) => {
              const allJobs = snapshot.val();
              dispatch(getAllJobs(Object.values(allJobs)));
              console.log("jobs", Object.values(allJobs));
            });
          }
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
