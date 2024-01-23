import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import ApprovalIcon from "@mui/icons-material/Approval";
import BlockIcon from "@mui/icons-material/Block";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import PostAddIcon from "@mui/icons-material/PostAdd";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import WorkIcon from "@mui/icons-material/Work";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutModal } from "../../components/Modal/LogoutModal";
import { style } from "./style";
import MenuIcon from '@mui/icons-material/Menu';
import CustomDrawer from "../../components/CustomDrawer"
const Wrapper = ({ children }) => {
  const [openDrawer,setOpenDrawer]=useState(false)
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
  const Logout = () => {
    setOpen(true);
  };
  const handleMenuIcon = ()=>{
    setOpenDrawer(true);
  }
  const updateMenuItems = (role) => {
    if (role === "company") {
      setMenuItems([
        { Icon: DashboardIcon, name: "Dashboard", handleClick },
        { Icon: AccountCircleIcon, name: "Profile", handleClick },
        { Icon: PostAddIcon, name: "Posted-Jobs", handleClick },
        { Icon: PostAddIcon, name: "Post-Jobs", handleClick },
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
                <MenuIcon sx={{display:{xs:"block",sm:"none"}}} onClick={handleMenuIcon}/>
                <CustomDrawer menuItems={menuItems} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
              Dashboard
              <Box sx={style.dashboardItems}>
                <NotificationAddIcon />
                <Avatar alt="User Profile" src={""} />
              </Box>
            </Box>
          </Box>
          <Box sx={style.profile}>
            <Box>{children}</Box>
          </Box>
          <LogoutModal open={open} setOpen={setOpen} />
        </Box>
      </Box>
    </>
  );
};
export default Wrapper;
