import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import theme from "./theme";
import Router from "./Router/Router";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged, onValue, ref, db, auth } from "./Lib/Firebase";
import { getAllUserData, getUserData } from "./redux/Action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // let userListner;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // userListner =
        onValue(ref(db, "users/" + user.uid), (snapshot) => {
          const data = snapshot.val();
          if (data.role === "admin") {
            onValue(ref(db, "users/"), (snapshot) => {
              const data = snapshot.val();
              dispatch(getAllUserData(Object.values(data)));
            });
          }
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
