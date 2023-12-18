import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { style } from "./style";

const CustomModal = ({
  open,
  setOpen,
  title,
  paragraph,
  confirmButtonText,
}) => {
  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/signIn");
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style.Container}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={style.subContainer}
            >
              {title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {paragraph}
            </Typography>
            <Box sx={style.modal}>
              <Button
                component={"button"}
                sx={[style.button, style.cancelButton]}
                onClick={handleClose}
              >
                No,Cancel
              </Button>
              <Button
                component={"button"}
                sx={[style.button, style.confirmButton]}
                onClick={handleLogout}
              >
                {confirmButtonText}
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CustomModal;
