import React from "react";
import { useFormik } from "formik";
import CustomTextField from "../../components/CustomText";
import Wrapper from "../Wrapper";
import { Box, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { update } from "firebase/database";
import { db, ref } from "../../Lib/Firebase";
import { style } from "./style";
import GenderField from "../../components/GenderField";

const Profile = () => {
  const state = useSelector((data) => data?.loginUser?.userData);
  console.log(state, "state");
  const formik = useFormik({
    initialValues: {
      gender: state?.gender,
      age: state?.age,
      education: state?.education,
      email: state?.email,
      username: state?.username,
    },
    onSubmit: async (values) => {
      console.log("VALUES", values);
      await update(ref(db, "users/" + state?.userId), values)
        .then((values) => {
          console.log("Data updated successfully!", values);
        })
        .catch((error) => {
          console.error("Error updating data: ", error);
        });
    },
  });

  return (
    <Wrapper>
      <Box sx={style.profileWrapper}>
        <Box sx={style.form} component={"form"} onSubmit={formik.handleSubmit}>
          <Box sx={style.profileContainer}>
            <Avatar alt="User Profile" src={""} sx={style.profile} />
            <Button>Upload Image</Button>
          </Box>
          <CustomTextField
            label="Name"
            name="username"
            sx={{ mb: formik.errors.username ? 1.5 : 2.5 }}
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && formik.touched.username ? (
            <p style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}>
              {formik.errors.username}
            </p>
          ) : null}
          <CustomTextField
            label="Email"
            type="text"
            name="email"
            sx={{ mb: formik.errors.email ? 1.5 : 2.5 }}
            value={formik.values.email}
            onChange={formik.handleChange}
            disabled
          />
          {formik.errors.email && formik.touched.email ? (
            <p style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}>
              {formik.errors.email}
            </p>
          ) : null}
          <GenderField sx={{ marginBottom: "10px" }} />
          {formik.errors.gender && formik.touched.gender ? (
            <p style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}>
              {formik.errors.gender}
            </p>
          ) : null}
          <CustomTextField
            label="Age"
            type="text"
            name="age"
            sx={{ mb: formik.errors.age ? 1.5 : 2.5 }}
            value={formik.values.age}
            onChange={formik.handleChange}
          />
          {formik.errors.age && formik.touched.age ? (
            <p style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}>
              {formik.errors.age}
            </p>
          ) : null}
          <CustomTextField
            label="Education"
            type="text"
            name="education"
            sx={{ mb: formik.errors.education ? 1.5 : 2.5 }}
            value={formik.values.education}
            onChange={formik.handleChange}
          />
          {formik.errors.education && formik.touched.education ? (
            <p style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}>
              {formik.errors.education}
            </p>
          ) : null}
          <Box sx={style.buttonDiv}>
            <Button type="submit" sx={style.button}>
              {" "}
              Save changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};
export default Profile;
