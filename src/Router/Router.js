import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard";
import VerifiedUser from "../Pages/VerifiedUser";
import ForgotPassword from "../Pages/ForgotPassword";
import PostedJobs from "../Pages/PostedJobs";
import AppliedJobs from "../Pages/AppliedJobs";
import BlockedUsers from "../Pages/BlockedUser";
import Profile from "../Pages/Profile";
import NonVerifiedUsers from "../Pages/NonVerifiedUser";
import PostJobs from "../components/PostJobs";
import AllJobs from "../components/AllJobs";
import { useSelector } from "react-redux";
import UserVerifiedPage from "../Pages/UserVerifiedPage";
const Router = () => {
  const { role, userId, isVerified } = useSelector(
    (state) => state?.loginUser?.userData
  );
  console.log("role:", role);
  console.log("isVerified:", isVerified);
  console.log("userId:", userId);

  return (
    <Routes>
      {!userId ? (
        <>
          <Route exact path="/" element={<Login />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </>
      ) : !isVerified ? (
        <>
        <Route path="/User-Verified-Page" element={<UserVerifiedPage />} />
        <Route path="*" element={<Navigate replace to="/User-Verified-Page" />} />
        </>
      ) : role === "admin" ? (
        <>
          <Route path="/Verified-Users" element={<VerifiedUser />} />
          <Route path="/Non-Verified-Users" element={<NonVerifiedUsers />} />
          <Route path="/Blocked-Users" element={<BlockedUsers />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dashboard" element={<AdminDashboard />} />
          <Route path="/*" element={<Navigate replace to="/Dashboard" />} />
        </>
      ) : role === "company" ? (
        <>
          <Route path="/Posted-Jobs" element={<PostedJobs />} />
          <Route path="/Post-Jobs" element={<PostJobs />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dashboard" element={<AdminDashboard />} />
          <Route path="/*" element={<Navigate replace to="/Dashboard" />} />
        </>
      ) : (
        <>
          <Route path="/All-jobs" element={<AllJobs />} />
          <Route path="/Applied-Jobs" element={<AppliedJobs />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dashboard" element={<AdminDashboard />} />
          <Route path="/*" element={<Navigate replace to="/Dashboard" />} />
        </>
      )}
    </Routes>
  );
};
export default Router;
