import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <nav
        style={{
          background: "#0f172a",
          color: "white",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link 
        to="/"
        style={{
          display:"flex",
          alignItems:"center",
          gap:"10px",
          textDecoration:"none",
          color:"white",
        }}
        >
          <img
          src={logo}
          alt="GYKS Logo"
          style={{
            width:"40px",
            height:"40px",
            borderRadius:"50%",
          }}
          />
          <h2 style={{margin:0}}>GYKS</h2>
          </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            fontSize: "28px",
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          ☰
        </button>

        <div
          style={{
            position: "fixed",
            top: 0,
            right: menuOpen ? "0" : "-280px",
            width: "250px",
            height: "100vh",
            background: "#0f172a",
            paddingTop: "60px",
            transition: "0.3s",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/skills" style={linkStyle}>Skills</Link>
          <Link to="/events" style={linkStyle}>Events</Link>
          <Link to="/donate" style={linkStyle}>Donate</Link>
          <Link to="/login" style={linkStyle}>Login</Link>

          {user && user.role === "admin" && (
            <Link to="/admin" style={linkStyle}>Admin Dashboard</Link>
          )}

          {user && user?.role === "mentor" && (
            <Link to="/mentor" style={linkStyle}>Mentor Dashboard</Link>
          )}

          {user && user?.role === "student" && (
            <Link to="/student" style={linkStyle}>Student Dashboard</Link>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
        />
      )}
    </>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "15px 25px",
  fontSize: "18px",
};

export default Navbar;