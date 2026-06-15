import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      style={{
        height: "80vh",
        background:
          "linear-gradient(to right,#2563eb,#1e40af)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>
        GYKS
      </h1>

      <h2>
        Preserving Traditional Skills
      </h2>

      <p style={{ marginTop: "20px" }}>
        Learn • Earn • Empower
      </p>

      <Link to="login" className="join-btn">
        Join Now
      </Link>
    </section>
  );
}

export default Hero;