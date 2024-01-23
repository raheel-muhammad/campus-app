import * as React from "react";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import {
  Box,
  Drawer,
  List,
} from "@mui/material";
import { style } from "../../Pages/Wrapper/style";

const CustomDrawer = ({ openDrawer, setOpenDrawer,menuItems}) => {
  const handleClose = () => setOpenDrawer(false);
  return (
    <Drawer anchor={"left"} open={openDrawer} onClose={handleClose}>
      <Box
        sx={{
          width: 250,
          height: "100%",
          background:"#7433ff",
        
        }}
        role="presentation"
        onClick={handleClose}
      >
        <List>
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
        </List>
      </Box>
    </Drawer>
  );
};
export default CustomDrawer;
