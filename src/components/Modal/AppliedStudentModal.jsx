import { Typography } from "@mui/material";
import React from "react";
import CustomModal from ".";
import { style } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { useState } from "react";

const AppliedStudentModal = ({ open, setOpen, item }) => {
  console.log("item", item);
  const Students = useSelector((state) => state?.loginUser?.appliedStudents);
  console.log("Student", Students);
  const students = Students?.filter((item) => item?.id === Students.userId);
  console.log("students", students);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CustomModal open={open}>
        <CloseIcon sx={{ alignSelf: "self-end" }} onClick={handleClose} />
        <Typography
          id="transition-modal-title"
          variant="h6"
          component="h2"
          sx={style.subContainer}
        >
          Applied Students
        </Typography>
      </CustomModal>
    </>
  );
};

export default AppliedStudentModal;
