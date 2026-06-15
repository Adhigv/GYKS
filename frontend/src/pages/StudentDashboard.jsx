import "./StudentDashboard.css";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaUserGraduate,
  FaCertificate,
} from "react-icons/fa";

function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="student-dashboard">

      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Welcome Back, {user?.name} 👋</h1>
        <p>{user?.email}</p>

        <span className="role-badge">
          {user?.role}
        </span>
      </motion.div>

      <div className="stats-grid">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="dashboard-card"
        >
          <FaBookOpen className="card-icon" />
          <h3>Skills</h3>
          <h2>12</h2>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="dashboard-card"
        >
          <FaUserGraduate className="card-icon" />
          <h3>Enrollments</h3>
          <h2>4</h2>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="dashboard-card"
        >
          <FaCertificate className="card-icon" />
          <h3>Certificates</h3>
          <h2>1</h2>
        </motion.div>

      </div>
    </div>
  );
}

export default StudentDashboard;