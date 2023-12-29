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
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../components/Modal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { style } from "./style";

const Wrapper = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const state = useSelector((state) => state);

  useEffect(() => {
    updateMenuItems(state?.loginUser.userData.role);
  }, []);
  const navigate = useNavigate();
  const handleClick = (name) => {
    navigate(`/${name}`);
  };
  const handleLogout = () => {
    navigate("/signIn");
  };
  const Logout = () => {
    setOpen(true);
  };
  const updateMenuItems = (role) => {
    if (role === "company") {
      setMenuItems([
        { Icon: DashboardIcon, name: "Dashboard", handleClick },
        { Icon: AccountCircleIcon, name: "Profile", handleClick },
        { Icon: PostAddIcon, name: "Posted-Jobs", handleClick },
        { Icon: PostAddIcon, name: "Post-Jobs", handleClick },
        { Icon: ApprovalIcon, name: "Applied-Students", handleClick },
        { Icon: LogoutIcon, name: "Logout", handleClick: Logout },
      ]);
    } else if (role === "student") {
      setMenuItems([
        { Icon: DashboardIcon, name: "Dashboard", handleClick },
        { Icon: AccountCircleIcon, name: "Profile", handleClick },
        { Icon: WorkIcon, name: "All-Jobs", handleClick },
        { Icon: ApprovalIcon, name: "Applied-Jobs", handleClick },
        { Icon: LogoutIcon, name: "Logout", handleClick: Logout },
      ]);
    } else {
      setMenuItems([
        { Icon: DashboardIcon, name: "Dashboard", handleClick },
        { Icon: AccountCircleIcon, name: "Profile", handleClick },
        { Icon: VerifiedUserIcon, name: "Verified-Users", handleClick },
        { Icon: GppMaybeIcon, name: "Non-Verified-Users", handleClick },
        { Icon: BlockIcon, name: "Blocked-Users", handleClick },
        { Icon: LogoutIcon, name: "Logout", handleClick: Logout },
      ]);
    }
  };
  return (
    <>
      <Box sx={style.drawer}>
        <Box sx={style.drawerItems}>
          <AddHomeWorkIcon sx={style.icon} />
          <Box sx={style.heading}>Campus-App</Box>
          {menuItems.map((item) => {
            return (
              <>
                <Box
                  sx={style.itemNames}
                  onClick={() => item.handleClick(item.name)}
                >
                  <item.Icon />
                  {item.name}
                </Box>
              </>
            );
          })}
        </Box>
        <Box sx={style.Container}>
          <Box sx={style.subContainer}>
            <Box sx={style.dashboard}>
              Dashboard
              <Box sx={style.dashboardItems}>
                <NotificationAddIcon />
                <Avatar alt="User Profile" src={""} />
              </Box>
            </Box>
          </Box>
          <Box sx={style.profile}>
            <Box>{children}</Box>
            <CustomModal
              open={open}
              setOpen={setOpen}
              title="Logout"
              paragraph="Do you really want to leave and log out?"
              confirmButtonText="Yes, logout"
              onClick={handleLogout}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Wrapper;
