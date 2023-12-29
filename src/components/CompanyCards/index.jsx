import * as React from "react";
import Card from "@mui/material/Card";
import { Button, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { style } from "./style";
import { useSelector } from "react-redux";
import CustomModal from "../Modal";
import { useState } from "react";
const StdCards = ({ data = [] }) => {
  console.log(data, "data");
  const [open, setOpen] = useState(false);
  const appliedJobs = useSelector(
    (state) => state?.LoginUser?.userData?.userId
  );
  console.log("appliedJobs", appliedJobs);
  const handleClick = () => {
    setOpen(true);
  };
  const handleJobs = () => {
    // if (role == "student") {
    // }
  };
  return (
    <>
      <Box sx={style.MainCard}>
        {data?.map((item, index) => {
          return (
            <Card sx={style.card}>
              <CardContent sx={style.cardDiv}>
                <Box
                  sx={style.cardSubDiv}
                  component={"img"}
                  src={
                    "//vendfrontendassets.freetls.fastly.net/images/setup/set-up-outlets-v3.svg"
                  }
                  alt="Mountain"
                />
                <Typography sx={{ fontWeight: "600", marginBottom: "10px" }}>
                  {item.jobTitle}
                </Typography>
                <Typography sx={{ marginBottom: "10px" }}>
                  {item.jobDescription}
                </Typography>
                <Typography sx={{ marginBottom: "10px" }}>
                  {item.minimumGpaRequired}
                </Typography>
                <Typography sx={{ marginBottom: "10px" }}>
                  {item.minimumSalary}
                </Typography>
                <Button sx={style.submitBtn} onClick={handleClick}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          );
        })}
        <CustomModal
          open={open}
          setOpen={setOpen}
          title="Vacancy"
          paragraph="Do you really want to apply?"
          confirmButtonText="Yes, apply"
          onClick={handleJobs}
        />
      </Box>
    </>
  );
};
export default StdCards;
