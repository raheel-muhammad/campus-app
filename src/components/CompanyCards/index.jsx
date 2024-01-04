import { Box } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import JobCard from "../JobCard";
import { style } from "./style";

const StdCards = ({ data = [] }) => {
  return (
    <Box sx={style.MainCard}>
      {data.map((item, index) => {
        return <JobCard item={item} />;
      })}
    </Box>
  );
};
export default StdCards;