import * as React from "react";
import Box from "@mui/material/Box";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BlockIcon from "@mui/icons-material/Block";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ApprovalIcon from "@mui/icons-material/Approval";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../components/Modal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Wrapper = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const state = useSelector((state) => state);
  console.log("state", state);
  useEffect(() => {
    updateMenuItems(state?.loginUser.userData.userrole);
  }, []);
  const navigate = useNavigate();
  const handleClick = (name) => {
    navigate(`/${name}`);
  };
  const Logout = (name) => {
    setOpen(true);
  };
  const updateMenuItems = (role) => {
    if (role === "company") {
      setMenuItems([
        { Icon: DashboardIcon, name: "Dashboard", handleClick },
        { Icon: PostAddIcon, name: "Posted-Jobs", handleClick },
        { Icon: ApprovalIcon, name: "Applied-Students", handleClick },
        { Icon: BlockIcon, name: "Blocked-Students", handleClick },
        { Icon: AccountCircleIcon, name: "Profile", handleClick },
        { Icon: LogoutIcon, name: "Logout", handleClick: Logout },
      ]);
    } else if (role === "student") {
      setMenuItems([
        { Icon: DashboardIcon, name: "Dashboard", handleClick },
        { Icon: AccountCircleIcon, name: "Profile", handleClick },
        { Icon: ApprovalIcon, name: "Applied-Jobs", handleClick },
        { Icon: LogoutIcon, name: "Logout", handleClick: Logout },
      ]);
    } else {
      setMenuItems([
        { Icon: DashboardIcon, name: "Dashboard", handleClick },
        { Icon: VerifiedUserIcon, name: "Verified-Users", handleClick },
        { Icon: GppMaybeIcon, name: "Non-Verified-Users", handleClick },
        { Icon: AccountCircleIcon, name: "Profile", handleClick },
        { Icon: BlockIcon, name: "Blocked-Users", handleClick },
        { Icon: LogoutIcon, name: "Logout", handleClick: Logout },
      ]);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          background: "aliceblue",
        }}
      >
        <Box
          sx={{
            background: "#7433FF",
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            position: "fixed",
            width: {
              xs: "220px",
              sm: "220px",
              md: "220px",
              lg: "220px",
              xl: "250px",
            },
            display: { xs: "none", sm: "block" },
            height: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
            },
            cursor: "pointer",
          }}
        >
          <AddHomeWorkIcon
            sx={{
              color: "#fff",
              fontSize: "40px",
              paddingLeft: "90px",
              paddingTop: "20px",
            }}
          />
          <Box
            sx={{
              color: "#fff",
              fontWeight: "400",
              paddingLeft: "60px",
              paddingBottom: "30px",
            }}
          >
            Campus-App
          </Box>
          {menuItems.map((item) => {
            return (
              <>
                <Box
                  sx={{
                    height: 75,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "600",
                    paddingLeft: "30px",
                    gap: "15px",
                  }}
                  onClick={() => item.handleClick(item.name)}
                >
                  <item.Icon />
                  {item.name}
                </Box>
              </>
            );
          })}
        </Box>
        <Box
          sx={{
            width: "100%",
            marginLeft: { xs: "10px", sm: "10px", md: "10px", lg: "80px" },
          }}
        >
          <Box
            sx={{
              background: "#7433FF",
              height: 70,
              borderBottomLeftRadius: 10,
              borderTopRightRadius: "30px",
              position: "fixed",
              zIndex: "1",
              marginLeft: { xs: "0px", sm: "250px" },
              width: {
                xs: "93%",
                sm: "64%",
                md: "73%",
                lg: "75%",
                xl: "81%",
              },
            }}
          >
            <Box
              sx={{
                color: "#fff",
                fontWeight: "600",
                paddingTop: "15px",
                paddingLeft: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Dashboard
              <Box
                sx={{
                  paddingRight: "50px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <NotificationAddIcon />
                <Avatar alt="User Profile" src={""} />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ marginTop: "100px", marginLeft: { xs: "0px", sm: "250px" } }}
          >
            <Box>{children}</Box>
            <CustomModal
              open={open}
              setOpen={setOpen}
              title="Logout"
              paragraph="Do you really want to leave and log out?"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Wrapper;
