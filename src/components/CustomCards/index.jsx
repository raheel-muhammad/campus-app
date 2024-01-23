import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { style } from "./style";
import { useSelector } from "react-redux";

const Cards = () => {
  const { allJobs, userData, allUsers,Students,item,companyJobs } = useSelector(
    (state) => state?.loginUser
  );
  const allJobsArray = allJobs.flatMap((item, index) => {
    return Object.values(item);
  });
  const availableJobs = companyJobs.filter(
    (job) => !job?.appliedStudents?.find((el) => el === userData.userId)
  );
  const appliedJobs = companyJobs.filter((job) =>
    job?.appliedStudents?.find((el) => el === userData.userId)
  );
  const PostedJobs = companyJobs.filter((job) =>
    job?.appliedStudents?.find((el) => el === userData.userId)
  );
  const NonVerifiedUser = allUsers.filter(
    (item) =>
      !item.isVerified && !item.isBlock && !item.isReject && !item.isUnblock
  );
  const VerifiedUser = allUsers.filter(
    (item) => item.isVerified && !item.isBlock
  );
  const BlockedUser = allUsers.filter((item) => item.isBlock);
  const appliedStudents = Students?.filter((std) => item?.appliedStudents?.includes(std?.userId));
  const index =
    userData.role === "admin" ? 0 : userData.role === "company" ? 1 : 2;
  const data = [
    [
      { name: "Total Jobs", value: allJobsArray?.length },
      { name: "Verified-Users", value: VerifiedUser?.length },
      { name: "Non-Verified-Users", value: NonVerifiedUser?.length },
      { name: "Blocked-Users", value: BlockedUser?.length },
    ],
    [
      { name: "Posted Jobs", value: PostedJobs?.length || 0 },
      { name: "Applied Students", value: appliedStudents?.length||0 },
    ],
    
    [
      { name: "Total Jobs", value: allJobsArray?.length || 0 },
      { name: "Available Jobs", value: availableJobs?.length || 0 },
      { name: "Applied Jobs", value: appliedJobs?.length || 0 },
    ],
  ];
  console.log("posted Jobs",PostedJobs)
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
