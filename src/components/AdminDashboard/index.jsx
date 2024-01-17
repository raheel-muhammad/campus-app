import React, { useState } from "react";
import StickyHeadTable from "../CustomTable";
import Cards from "../CustomCards";
import BarsDataset from "../Chart";
import Wrapper from "../../Pages/Wrapper";
import { useSelector } from "react-redux";
const AdminDashboard = () => {
  const role = useSelector((state) => state?.loginUser?.userData?.role);
  const allUsers = useSelector((state) => state.loginUser.allUsers);
  const [nonVerifiedUser, setNonVerifiedUser] = useState(
    allUsers?.filter(
      (item) =>
        !item.isVerified && !item.isBlock && !item.isReject && !item.isUnblock
    ) || []
  );
  return (
    <>
      <Wrapper>
        <Cards />
        <BarsDataset />
        {role === "admin" && (
          <StickyHeadTable
            name="Recent Approvals"
            data={nonVerifiedUser}
            setData={setNonVerifiedUser}
            check={"nvu"}
          />
        )}
      </Wrapper>
    </>
  );
};

export default AdminDashboard;
