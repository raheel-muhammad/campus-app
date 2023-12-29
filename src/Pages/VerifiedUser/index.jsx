import React, { useState } from "react";
import Wrapper from "../Wrapper";
import { useSelector } from "react-redux";
import StickyHeadTable from "../../components/CustomTable";
const VerifiedUser = () => {
  const allUsers = useSelector((state) => state.loginUser.allUsers);
  const [verifiedUser, setVerifiedUser] = useState(
    allUsers?.filter((item) => item.isVerified)
  );
  return (
    <Wrapper>
      <StickyHeadTable
        data={verifiedUser}
        setData={setVerifiedUser}
        check={"vu"}
      />
    </Wrapper>
  );
};

export default VerifiedUser;
