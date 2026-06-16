import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import API from "../services/api";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    const response = await api.get("/skills");

    setSkills(response.data);
  };

  const enroll= async(skillId) => {
    

    const enrollSkill =
    async (skillId) => {
      const user = 
      JSON.parse(
      localStorage.getItem("user")
    );
      try {
    
          await API.post("api/auth/enrollments",
            {
            studentId:user._id, 
            skillId
          }
        );
        Toast.success(
          "Enrollment Submitted"
        );
      } catch (err) {
        Toast.error(
          err.response?.data?.message
        );
      }
    };
  return (
    <>
    <Navbar />
    
    <div style={{ padding: "30px" }}>
      <h1>Available Skills</h1>

      <div className="skills-grid">
  {skills.map((skill) => (
    <div key={skill._id} className="skill-card">

      <div className="skill-badge">
        {skill.category}
      </div>

      <h3>{skill.title}</h3>

      <p>{skill.description}</p>

      <p>
        Mentor:
        {skill.mentor?.name}
      </p>

      <button className="enroll-btn" onClick={() => enrollSkill(skill._id)}>
        Enroll Now
      </button>

    </div>
  ))}
  </div>
  </div>
    </>
  );
}
}
export default Skills;