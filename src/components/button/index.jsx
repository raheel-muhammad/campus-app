import Button from "@mui/material/Button";
import React from "react";
import { style } from "./style";

const CustomButton = ({ text, sx, ...props }) => {
  return (
    <Button variant="contained" sx={{ ...style.button, ...sx }} {...props}>
      {text}
    </Button>
  );
};

export default CustomButton;
