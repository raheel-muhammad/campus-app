import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomModal from ".";
import { logOutUser } from "../../redux/Action";
import { style } from "./style";

export const LogoutModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth)
      .then(() => {
        dispatch(logOutUser());
        navigate("/signIn");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <CustomModal open={open}>
      <Typography
        id="transition-modal-title"
        variant="h6"
        component="h2"
        sx={style.subContainer}
      >
        Logout
      </Typography>
      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        Do you really want to leave and log out?
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
          onClick={handleLogout}
        >
          Yes, logout
        </Button>
      </Box>
    </CustomModal>
  );
};
