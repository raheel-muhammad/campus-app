import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomModal from ".";
import { style } from "./style";

const ApplyModal = ({ open, setOpen, onClick }) => {
  return (
    <CustomModal open={open}>
      <Typography
        id="transition-modal-title"
        variant="h6"
        component="h2"
        sx={style.subContainer}
      >
        Vacancy
      </Typography>
      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        Do you really want to apply?
      </Typography>
      <Box sx={style.modal}>
        <Button
          component={"button"}
          sx={[style.button, style.cancelButton]}
          onClick={() => setOpen(false)}
        >
          No,Cancel
        </Button>
        <Button
          component={"button"}
          sx={[style.button, style.confirmButton]}
          onClick={onClick}
        >
          Yes, Apply
        </Button>
      </Box>
    </CustomModal>
  );
};

export default ApplyModal;
