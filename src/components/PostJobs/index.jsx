import React from "react";
import { Box, Button } from "@mui/material";
import CustomTextField from "../CustomText";
import { useFormik } from "formik";
import { style } from "./style";
import Wrapper from "../../Pages/Wrapper";
import { useSelector } from "react-redux";
import { push, ref, set } from "firebase/database";
import { db } from "../../Lib/Firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const PostJobs = () => {
  const state = useSelector((state) => state);
  const id = state?.loginUser?.userData?.userId;
  const companyName = state?.loginUser?.userData?.username;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      jobDescription: "",
      minimumGpaRequired: "",
      minimumSalary: "",
    },
    onSubmit: async (values) => {
      try {
        const postListRef = ref(db, "posts/" + id);
        const newPostRef = await push(postListRef);
        const data = await set(newPostRef, {
          jobTitle: values.jobTitle,
          jobDescription: values.jobDescription,
          minimumGpaRequired: values.minimumGpaRequired,
          minimumSalary: values.minimumSalary,
          id,
          companyName,
        });
        formik.resetForm();
        toast.success("Job-Post Successfully");
        navigate("/Posted-Jobs");
      } catch (error) {
        toast.error(error?.message.split("/")[1].replace(")", ""));
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
  return (
    <>
      <Wrapper>
        <Box sx={style.profileWrapper}>
          <Box
            sx={style.form}
            component={"form"}
            onSubmit={formik.handleSubmit}
          >
            <Box sx={style.vacancy}>Add Vacancy</Box>
            <CustomTextField
              label="jobTitle"
              name="jobTitle"
              sx={{ mb: formik.errors.jobTitle ? 1.5 : 2.5 }}
              value={formik.values.jobTitle}
              onChange={formik.handleChange}
            />
            {formik.errors.jobTitle && formik.touched.jobTitle ? (
              <p
                style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}
              >
                {formik.errors.jobTitle}
              </p>
            ) : null}
            <CustomTextField
              label="jobDescription"
              type="text"
              name="jobDescription"
              sx={{ mb: formik.errors.jobDescription ? 1.5 : 2.5 }}
              value={formik.values.jobDescription}
              onChange={formik.handleChange}
            />
            {formik.errors.jobDescription && formik.touched.jobDescription ? (
              <p
                style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}
              >
                {formik.errors.jobDescription}
              </p>
            ) : null}
            <CustomTextField
              label="minimumGpaRequired"
              type="text"
              name="minimumGpaRequired"
              sx={{ mb: formik.errors.minimumGpaRequired ? 1.5 : 2.5 }}
              value={formik.values.minimumGpaRequired}
              onChange={formik.handleChange}
            />
            {formik.errors.minimumGpaRequired &&
            formik.touched.minimumGpaRequired ? (
              <p
                style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}
              >
                {formik.errors.minimumGpaRequired}
              </p>
            ) : null}
            <CustomTextField
              label="minimumSalary"
              type="text"
              name="minimumSalary"
              sx={{ mb: formik.errors.minimumSalary ? 1.5 : 2.5 }}
              value={formik.values.minimumSalary}
              onChange={formik.handleChange}
            />
            {formik.errors.minimumSalary && formik.touched.minimumSalary ? (
              <p
                style={{ marginTop: "2px", marginBottom: "16px", color: "red" }}
              >
                {formik.errors.minimumSalary}
              </p>
            ) : null}
            <Box sx={style.buttonDiv}>
              <Button
                type="submit"
                sx={style.button}
                disabled={formikValidation()}
              >
                {" "}
                Post
              </Button>
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};

export default PostJobs;
