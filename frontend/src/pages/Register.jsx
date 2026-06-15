import Navbar from "../components/Navbar";
import { useState } from "react";
import API from "../services/api";
import axios from "axios";

function Register() {

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
      role:"student "
    });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
      e.target.value
    });

  };

  const submit = async () => {

    try {

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        form
      );

      if (role==="mentor"){
        alert("Registration submitted. Waiting for Admin Approval.");
      }else{
        alert("Registration Succesfull.");
      }

    } catch(error){
      console.log(error.response.data);

      alert(error.response.data.message);

    }
  
};

  return (
  <>
    <Navbar />

    <div
      style={{
        width: "400px",
        margin: "100px auto",
        padding: "30px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "20px"
        }}
      >
        GYKS Register
      </h1>

      <input
        placeholder="Name"
        name="name"
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <input
        placeholder="Email"
        name="email"
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px"
        }}
      />
      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px"
        }}
      >
        <option value="student">
          Student
        </option>

        <option value="mentor">
          Mentor
        </option>
      </select>

      <button
        onClick={submit}
        style={{
          width: "100%",
          padding: "12px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Register
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "15px"
        }}
      >
        Already have an account?
      </p>

      <a
        href="/login"
        style={{
          display: "block",
          textAlign: "center",
          color: "#2563eb",
          fontWeight: "bold"
        }}
      >
        Login Here
      </a>
    </div>
  </>
);
  
}
export default Register;