import react from "react";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard";
import VerifiedUser from "../Pages/VerifiedUser";
import ForgotPassword from "../Pages/ForgotPassword";
import BlockedStudents from "../Pages/BlockedStudents";
import AppliedStudents from "../Pages/AppliedStudents";
import PostedJobs from "../Pages/PostedJobs";
import AppliedJobs from "../Pages/AppliedJobs";
import BlockedUsers from "../Pages/BlockedUser";
import Profile from "../Pages/Profile";
import NonVerifiedUsers from "../Pages/NonVerifiedUser";

const Router = () => {
  return (
    <Routes>
      <>
        <Route path="/Dashboard" element={<AdminDashboard />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Verified-Users" element={<VerifiedUser />} />
        <Route path="/Non-Verified-Users" element={<NonVerifiedUsers />} />
        <Route path="/Blocked-Users" element={<BlockedUsers />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Applied-Jobs" element={<AppliedJobs />} />
        <Route path="/Posted-Jobs" element={<PostedJobs />} />
        <Route path="/Applied-Students" element={<AppliedStudents />} />
        <Route path="/Blocked-Students" element={<BlockedStudents />} />
      </>
    </Routes>
  );
};
export default Router;
