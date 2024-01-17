import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard";
import VerifiedUser from "../Pages/VerifiedUser";
import ForgotPassword from "../Pages/ForgotPassword";
import AppliedStudents from "../Pages/AppliedStudents";
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

  if (!userId)
    return (
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    );
  if (!!userId && !isVerified) {
    return (
      <Routes>
        <Route path="/User-Verified-Page" element={<UserVerifiedPage />} />
        <Route path="/Dashboard" element={<AdminDashboard />} />
        {isVerified && <Navigate to="/Dashboard" />}
      </Routes>
    );
  }
  if (userId && role === "admin")
    return (
      <Routes>
        <Route path="/Dashboard" element={<AdminDashboard />} />
        <Route path="/Verified-Users" element={<VerifiedUser />} />
        <Route path="/Non-Verified-Users" element={<NonVerifiedUsers />} />
        <Route path="/Blocked-Users" element={<BlockedUsers />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    );
  if (userId && role === "company")
    return (
      <Routes>
        <Route path="/Dashboard" element={<AdminDashboard />} />
        <Route path="/Posted-Jobs" element={<PostedJobs />} />
        <Route path="/Post-Jobs" element={<PostJobs />} />
        <Route path="/Applied-Students" element={<AppliedStudents />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/User-Verified-Page" element={<UserVerifiedPage />} />
      </Routes>
    );
  if (userId && role === "student")
    return (
      <Routes>
        <Route path="/Dashboard" element={<AdminDashboard />} />
        <Route path="/All-jobs" element={<AllJobs />} />
        <Route path="/Applied-Jobs" element={<AppliedJobs />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/User-Verified-Page" element={<UserVerifiedPage />} />
      </Routes>
    );
};
export default Router;
