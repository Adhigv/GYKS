import { useState } from "react";
import axios from "axios";
function EnrollmentForm() {

 const [form,setForm]= useState(
  
  {
    name: "",
    email: "",
    skill: ""
  }
);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
  try {

    const res = await API.post(
      "/api/enrollments",
      {
        name: form.name,
        email: form.email,
        skill: form.skill
      }
    );
    console.log(res.data);
    alert("Application Submitted Successfully");
    setForm({
      name:"",
      email:"",
      skill:""
    });

  } catch (error) {

    console.log(error);

    alert(
      error.response?.data?.message ||
      "Enrollment Failed"
    );
  }
};

  return (
    <section className="py-20">

      <div className="max-w-xl mx-auto bg-white p-10 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Student Enrollment
        </h1>

        <input
          className="w-full border p-3 mb-4 rounded"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 mb-4 rounded"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 mb-4 rounded"
          name="skill"
          placeholder="Interested Skill"
          onChange={handleChange}
        />

        <button
            type="button"
            onClick={handleSubmit}
            className="submit-btn"

          >
            Apply Now
        </button>

      </div>

    </section>
  );
}

export default EnrollmentForm;