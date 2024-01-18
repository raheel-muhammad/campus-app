import React from "react";
import Wrapper from "../Wrapper";
import CompanyCards from "../../components/CompanyCards";
import { useSelector } from "react-redux";
const PostedJobs = () => {
  const companiesJobs = useSelector((state) => state?.loginUser?.companyJobs);

  return (
    <Wrapper>
      <CompanyCards data={companiesJobs} />
    </Wrapper>
  );
};

export default PostedJobs;
