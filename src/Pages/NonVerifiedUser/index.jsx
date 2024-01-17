import React, { useState } from "react";
import { useSelector } from "react-redux";
import StickyHeadTable from "../../components/CustomTable";
import Wrapper from "../Wrapper";
const NonVerifiedUsers = () => {
  const allUsers = useSelector((state) => state.loginUser.allUsers);
  const [nonVerifiedUser, setNonVerifiedUser] = useState(
    allUsers?.filter(
      (item) =>
        !item.isVerified && !item.isBlock && !item.isReject && !item.isUnblock
    ) || []
  );
  return (
    <Wrapper>
      <StickyHeadTable
        data={nonVerifiedUser}
        setData={setNonVerifiedUser}
        check={"nvu"}
        name="Non-Verified-Users"
      />
    </Wrapper>
  );
};

export default NonVerifiedUsers;
