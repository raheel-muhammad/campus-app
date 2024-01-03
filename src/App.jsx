import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import theme from "./theme";
import Router from "./Router/Router";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged, onValue, ref, db, auth } from "./Lib/Firebase";
import { getAllUserData, getUserData, getCompanyData } from "./redux/Action";
import { getAllJobs, getAppliedStudents } from "./redux/Action/loginUser";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { appliedStudents } = useSelector((state) => state?.loginUser);
  let array = appliedStudents ? [...appliedStudents] : [];
  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      console.log("user:", user);
      let databaseListner;
      if (user) {
        let userData;
        databaseListner = onValue(ref(db, "users/" + user.uid), (snapshot) => {
          userData = snapshot.val();
          dispatch(getUserData({ ...userData }));
          console.log("userData:", userData);
          if (userData?.role === "admin") {
            onValue(ref(db, "users/"), (snapshot) => {
              const allUsersData = snapshot.val();
              dispatch(getAllUserData(Object.values(allUsersData)));
            });
            setLoading(false);
          }
          if (userData?.role === "company") {
            onValue(ref(db, "posts/" + user.uid), (snapshot) => {
              const jobs = snapshot.val();
              Object.values(jobs).map((item) => {
                if (item?.appliedStudents)
                  item?.appliedStudents.map((id) =>
                    onValue(ref(db, "users/" + id), (snapshot) => {
                      const students = snapshot.val();
                      if (
                        (appliedStudents && appliedStudents?.length == 0) ||
                        appliedStudents?.filter(
                          (checkId) => checkId?.userId == id
                        )?.length != 0
                      ) {
                        array.push(students);
                        dispatch(getAppliedStudents([...array]));
                      }
                    })
                  );
              });
              dispatch(getCompanyData(Object.values(jobs)));
              setLoading(false);
            });
          }
          if (userData?.role === "student") {
            onValue(ref(db, "posts/"), (snapshot) => {
              const allJobs = snapshot.val();
              dispatch(getAllJobs(Object.values(allJobs)));
              setLoading(false);
            });
          }
        });
      } else {
        if (databaseListner) {
          databaseListner();
        }
        setLoading(false);
      }
    });
  }, []);
  if (loading) return <div>loading....</div>;
  if (!loading)
    return (
      <ThemeProvider theme={theme}>
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
        <Router />
      </ThemeProvider>
    );
};

export default App;
