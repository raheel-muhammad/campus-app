import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { style } from "./style";
import { useSelector } from "react-redux";
import { useState } from "react";

const Cards = () => {
  const { allJobs, userData } = useSelector((state) => state?.loginUser);
  const allJobsArray = allJobs.flatMap((item, index) => {
    return Object.values(item);
  });
  const availableJobs = allJobsArray.filter(
    (job) => !job?.appliedStudents?.find((el) => el == userData.userId)
  );
  const appliedJobs = allJobsArray.filter((job) =>
    job?.appliedStudents?.find((el) => el == userData.userId)
  );
  const PostedJobs = allJobsArray.filter((job) =>
    job?.appliedStudents?.find((el) => el == userData.userId)
  );
  const index =
    userData.role == "admin" ? 0 : userData.role == "company" ? 1 : 2;
  const data = [
    [
      { name: "Total Jobs", value: allJobsArray.length },
      { name: "Verified-Users", value: 5342 },
      { name: "Non-Verified-Users", value: 4321 },
      { name: "Blocked-Users", value: 33 },
    ],
    [
      { name: "Posted Jobs", value: PostedJobs?.length || 0 },
      { name: "Applied Students", value: 23 },
    ],
    [
      { name: "Total Jobs", value: allJobsArray?.length || 0 },
      { name: "Available Jobs", value: availableJobs?.length || 0 },
      { name: "Applied Jobs", value: appliedJobs?.length || 0 },
    ],
  ];
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={style.grid}
    >
      {data[index].map((item, index) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={style.card}>
              <CardContent>
                <Typography sx={style.para}>{item.name}</Typography>

                <Typography variant="body2" sx={style.body}>
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cards;