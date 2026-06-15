import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("User in Navbar:", user);

  return (
    <nav
      style={{
        background: "#0f172a",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "Space-between",
      }}
    >
      <h2>GYKS</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Conditional Dashboard Links moved inside the JSX */}
        {user?.role === "student"}
        {user?.role === "mentor"}
        {user?.role === "admin"}

        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/about" style={{ color: "white" }}>About</Link>
        <Link to="/skills" style={{ color: "white" }}>Skills</Link>
        <Link to="/events" style={{ color: "white" }}>Events</Link>
        <Link to="/donate" style={{ color: "white" }}>Donate</Link>
        <Link to="/login" style={{ color: "white" }}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;