import { TextField } from "@mui/material";

import React from "react";

const CustomTextField = ({ sx, label, ...props }) => {
  return (
    <TextField
      id="outlined-basic"
      sx={{ mb: 5, ...sx }}
      variant="outlined"
      label={label}
      {...props}
    />
  );
};

export default CustomTextField;
