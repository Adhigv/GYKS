import React, { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminDashboard.css";

function AdminDashboard() {
const [mentors, setMentors] = useState([]);

const [studentCount, setStudentCount] = useState(0);
const [mentorCount, setMentorCount] = useState(0);
const [pendingCount, setPendingCount] = useState(0);
const [enrollmentCount, setEnrollmentCount] = useState(0);

useEffect(() => {
fetchMentors();
fetchDashboardStats();
}, []);

const fetchMentors = async () => {
try {
const res = await axios.get(
`http://localhost:5000/api/users/pending-mentors`
);

  setMentors(res.data);
  setPendingCount(res.data.length);
} catch (error) {
  console.log(error);
}

};

const fetchDashboardStats = async () => {
try {
const res = await axios.get(
`http://localhost:5000/api/users/dashboard-stats`
);

  setStudentCount(res.data.students || 0);
  setMentorCount(res.data.mentors || 0);
  setEnrollmentCount(res.data.enrollments || 0);
} catch (error) {
  console.log(error);
}

};

const approveMentor = async (id) => {
try {
await axios.put(
`http://localhost:5000/api/users/approve/${id}`
);

  toast.success("Mentor Approved");
  fetchMentors();
  fetchDashboardStats();
} catch (error) {
  toast.error("Approval Failed");
}

};

const rejectMentor = async (id) => {
try {
await axios.put(
`http://localhost:5000/api/users/reject/${id}`
);

  toast.error("Mentor Rejected");
  fetchMentors();
  fetchDashboardStats();
} catch (error) {
  toast.error("Rejection Failed");
}

};
// const dashboardStats = async () => {
//     try{
//         const students = await User.countDocuments({role:"student"});
//         const mentors = await User.countDocuments({role:"mentor"});
//         const pending = await User.countDocuments({role:"mentor", approvalStatus:"pending"});
//         const enrollments = await Enrollment.countDocuments();
//         res.json({
//             students,
//             mentors,
//             pending,
//             enrollments
//         });
//     } catch (error){
//         console.log(error);
//         res.status(500).json({
//             message:error.message
//         });
//     }
// }
return (
<div className="admin-container">

  <ToastContainer />

  <h1 className="page-title">
    GYKS Admin Dashboard
  </h1>

  <div className="stats-grid">

    <div className="stat-card">
      <h3>Total Students</h3>
      <h1>
        {studentCount}
      </h1>
    </div>

    <div className="stat-card">
      <h3>Total Mentors</h3>
      <h1>
        {mentorCount}
      </h1>
    </div>

    <div className="stat-card">
      <h3>Pending Requests</h3>
      <h1>
        {pendingCount}
      </h1>
    </div>

    <div className="stat-card">
      <h3>Total Enrollments</h3>
      <h1>
        {enrollmentCount}
      </h1>
    </div>

  </div>

  <h2 className="pending-title">
    Pending Mentor Requests
  </h2>

  {mentors.length === 0 ? (
    <div className="empty-state">
      No Pending Mentor Requests
    </div>
  ) : (
    mentors.map((mentor) => (
      <motion.div
        key={mentor._id}
        className="mentor-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mentor-name">
          {mentor.name}
        </div>

        <div className="mentor-email">
          {mentor.email}
        </div>

        <div className="action-buttons">

          <button
            className="approve-btn"
            onClick={() =>
              approveMentor(mentor._id)
            }
          >
            Approve
          </button>

          <button
            className="reject-btn"
            onClick={() =>
              rejectMentor(mentor._id)
            }
          >
            Reject
          </button>

        </div>

      </motion.div>
    ))
  )}

</div>

);
}

export default AdminDashboard;