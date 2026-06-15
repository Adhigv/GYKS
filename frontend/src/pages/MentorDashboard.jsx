import { Link } from "react-router-dom";
import{FaPlusCircle} from "react-icons/fa";

import "./MentorDashboard.css";


function MentorDashboard() {

const user =
JSON.parse(localStorage.getItem("user"));

return (

<div className="mentor-page">

<div className="sidebar">

<h2>GYKS Mentor</h2>

<ul>
<li>Dashboard</li>
<li>Skills</li>
<li>Students</li>
<li>Certificates</li>
</ul>

</div>

<div className="content">

<div className="welcome-card">

<h1>
Welcome {user?.name}
</h1>

<p>{user?.email}</p>

<p>Mentor Portal</p>

</div>

<div className="stats-grid">

<div className="stat-card">
<h3>Skills Created</h3>
<div className="stat-number">21</div>
</div>

<div className="stat-card">
<h3>Students</h3>
<div className="stat-number">34</div>
</div>

<div className="stat-card">
<h3>Certificates</h3>
<div className="stat-number">12</div>
</div>

</div>

<Link
to="/create-skill"
className="btn btn-primary btn-lg mt-4"
>
<FaPlusCircle />
 Create New Skill
</Link>
<Link
to="/enrollment"
className="dashboard-link"
>
View Enrollments
</Link>

</div>

</div>

);
}

export default MentorDashboard;