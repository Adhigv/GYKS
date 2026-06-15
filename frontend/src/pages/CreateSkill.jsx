import { useState } from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom";
import "./CreateSkill.css";

function CreateSkill() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/skills",
        {
          title,
          category,
          description,
          mentorId: user._id
        }
      );

      alert("Skill Created Successfully");
      navigate("/mentor");

      setTitle("");
      setCategory("");
      setDescription("");
      
    } catch (err) {
      alert("Error Creating Skill");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-page">
      <div className="create-card">

        <h1>Create New Skill</h1>
        <p>Share your traditional or technical knowledge.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Skill Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            required
          />

          <textarea
            rows="5"
            placeholder="Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Skill"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default CreateSkill;