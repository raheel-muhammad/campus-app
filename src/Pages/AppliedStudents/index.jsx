import React from "react";
import Wrapper from "../Wrapper";
import CustomTable from "../../components/CustomTable";
import { useSelector } from "react-redux";
const AppliedStudents = () => {
  const students = useSelector((state) => state);
  console.log("students", students);
  return (
    <Wrapper>
      <CustomTable data={students} />
    </Wrapper>
  );
};

export default AppliedStudents;
