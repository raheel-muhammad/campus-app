import Button from "@mui/material/Button";

import React from "react";

const CustomButton = ({ sx, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{ borderRadius: 50, backgroundColor: "#7433FF", width: "50%", ...sx }}
      {...props}
    />
  );
};

export default CustomButton;
