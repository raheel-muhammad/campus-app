import { TextField } from "@mui/material";

import React from "react";
import { style } from "./style";

const CustomTextField = ({ sx, label, ...props }) => {
  return (
    <TextField
      id="outlined-basic"
      sx={{ ...style.name, ...sx }}
      variant="outlined"
      label={label}
      {...props}
    />
  );
};

export default CustomTextField;
