import React from "react";
import Wrapper from "../Wrapper";
import CompanyCards from "../../components/CompanyCards";
import { useSelector } from "react-redux";
const AppliedJobs = () => {
  const userId = useSelector((state) => state.loginUser.userData.userId);
  const allJobs = useSelector((state) => state?.loginUser?.allJobs);
  const allJobsArray = allJobs
    .flatMap((item, index) => {
      return Object.entries(item).map(([keys, values], index) => {
        return { ...values, jobId: keys };
      });
    })
    .filter((job) => job?.appliedStudents?.find((el) => el == userId));
  return (
    <Wrapper>
      <CompanyCards data={allJobsArray} />
    </Wrapper>
  );
};

export default AppliedJobs;
