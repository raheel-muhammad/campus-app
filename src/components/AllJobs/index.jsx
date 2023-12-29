import React from "react";
import Wrapper from "../../Pages/Wrapper";
import CompanyCards from "../CompanyCards";
import { useSelector } from "react-redux";
const AllJobs = () => {
  const allJobs = useSelector((state) => state?.loginUser?.allJobs);
  const allJobsArray = allJobs.flatMap((item, index) => {
    return Object.values(item);
  });
  console.log("first", allJobsArray);
  return (
    <Wrapper>
      <CompanyCards data={allJobsArray} />
    </Wrapper>
  );
};

export default AllJobs;
