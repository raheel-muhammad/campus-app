import React, { useState } from "react";
import { useSelector } from "react-redux";
import StickyHeadTable from "../../components/CustomTable";
import Wrapper from "../Wrapper";
const BlockedUsers = () => {
  const allUsers = useSelector((state) => state.loginUser.allUsers);
  const [blockedUser, setBlockedUser] = useState(
    allUsers?.filter((item) => item.isBlock)
  );
  return (
    <Wrapper>
      <StickyHeadTable
        data={blockedUser}
        setData={setBlockedUser}
        check={"bu"}
        name="Blocked-Users"
      />
    </Wrapper>
  );
};

export default BlockedUsers;
