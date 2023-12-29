import { TextField } from "@mui/material";
import React from "react";
import { style } from "./style";

const CustomTextField = ({ sx, ...props }) => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      {...props}
      sx={{ ...style.name, ...sx }}
    />
  );
};

export default CustomTextField;
