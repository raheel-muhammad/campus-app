import { Box, Button, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { ref, update } from "firebase/database";
import * as React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { db } from "../../Lib/Firebase";
import AppliedStudentModal from "../Modal/AppliedStudentModal";
import ApplyModal from "../Modal/ApplyModal";
import { style } from "./style";
const JobCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { userId, role } = useSelector((state) => state.loginUser.userData);

  const handleJobs = async (item) => {
    let appliedStudents = item?.appliedStudents?.length
      ? item?.appliedStudents
      : [];
    try {
      await update(ref(db, "posts/" + item.id + "/" + item.jobId), {
        appliedStudents: [...appliedStudents, userId],
      });
      setOpen(false);
      toast.success("Applied Successfully");
    } catch (error) {
      setOpen(false);
      toast.error("error occurred");
    }
  };
  return (
    <>
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
            Job Title: {item.jobTitle}
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            Job Description: {item.jobDescription}
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            Min CGPA : {item.minimumGpaRequired}
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            Min Salary: {item.minimumSalary}
          </Typography>
          {role === "student" ? (
            !item?.appliedStudents?.find((el) => el === userId) && (
              <Button sx={style.submitBtn} onClick={() => setOpen(true)}>
                Apply Now
              </Button>
            )
          ) : (
            <Button sx={style.submitBtn} onClick={() => setOpen(true)}>
              View Applied Students
            </Button>
          )}
        </CardContent>
      </Card>
      {role === "student" ? (
        <ApplyModal
          open={open}
          setOpen={setOpen}
          onClick={() => handleJobs(item)}
        />
      ) : (
        <AppliedStudentModal item={item} open={open} setOpen={setOpen} />
      )}
    </>
  );
};

export default JobCard;
