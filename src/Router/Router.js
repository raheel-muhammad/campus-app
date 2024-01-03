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
const Router = () => {
  const { role, userId } = useSelector((state) => state?.loginUser?.userData);
  console.log("id", userId);
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

  if (role === "admin")
    return (
      <Routes>
        <Route path="/Dashboard" element={<AdminDashboard />} />
        <Route path="/Verified-Users" element={<VerifiedUser />} />
        <Route path="/Non-Verified-Users" element={<NonVerifiedUsers />} />
        <Route path="/Blocked-Users" element={<BlockedUsers />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    );
  if (role === "company")
    return (
      <Routes>
        <Route path="/Dashboard" element={<AdminDashboard />} />
        <Route path="/Posted-Jobs" element={<PostedJobs />} />
        <Route path="/Post-Jobs" element={<PostJobs />} />
        <Route path="/Applied-Students" element={<AppliedStudents />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    );
  if (role === "student")
    return (
      <Routes>
        <Route path="/Dashboard" element={<AdminDashboard />} />
        <Route path="/All-jobs" element={<AllJobs />} />
        <Route path="/Applied-Jobs" element={<AppliedJobs />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    );
};
export default Router;
