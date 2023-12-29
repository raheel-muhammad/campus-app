import React from "react";
import StickyHeadTable from "../CustomTable";
import Cards from "../CustomCards";
import BarsDataset from "../Chart";
import Wrapper from "../../Pages/Wrapper";
const AdminDashboard = () => {
  return (
    <>
      <Wrapper>
        <Cards />
        <BarsDataset />
        <StickyHeadTable />
      </Wrapper>
    </>
  );
};

export default AdminDashboard;
