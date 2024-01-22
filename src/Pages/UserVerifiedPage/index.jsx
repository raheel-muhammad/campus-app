import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import test from "../../assets/warning.jpg";
import { logOutUser } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const UserVerifiedPage = () => {
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
    <>
      <Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "600",
              display: "flex",
              fontSize: "24px",
              justifyContent: "center",
              marginTop: "7%",
              marginBottom: "5%",
              width: "100%",
              heightL: "100vh",
            }}
          >
            Verification Required!
          </Typography>
          <Box
            component={"img"}
            src={test}
            alt="Mountain"
            sx={{
              width: "20%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              marginTop: "5%",
              fontWeight: "400",
              display: "flex",
              justifyContent: "center",
              fontSize: { xs: "12px", sm: "16px", md: "20px" },
            }}
          >
            You are not verified please contact to admin.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleLogout}
            sx={{
              color: "#fff",
              background: "#7433ff",
              margin: "1%",
              "&:hover": {
                color: "#7433ff",
                background: "#ff",
              },
            }}
          >
            LogOut
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default UserVerifiedPage;
