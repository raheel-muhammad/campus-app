import { Typography } from "@mui/material";
import React from "react";
import CustomModal from ".";
import { style } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { useState } from "react";
import StickyHeadTable from "../CustomTable";

const AppliedStudentModal = ({ open, setOpen, item }) => {
  const Students = useSelector((state) => state?.loginUser?.appliedStudents);
  const companyStudents = Students?.filter((std) => item?.appliedStudents?.includes(std?.userId));
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
        <StickyHeadTable data={companyStudents} item={item}/>
      </CustomModal>
    </>
  );
};

export default AppliedStudentModal;
