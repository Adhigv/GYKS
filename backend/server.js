require("dotenv").config();

const express = require("express");

const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const skillRoutes = require("./routes/skillRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const connectDB =
  require("./config/db");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use("/api/users",userRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/enrollments", enrollmentRoutes);

app.get("/", (req, res) => {

  res.send(
    "GYKS Backend Running"
  );

});

app.listen(
  process.env.PORT,
  () => {

    console.log(
      `Server Running on Port ${process.env.PORT}`
    );

  }
);
app.get("/api/test", (req, res) => {

  res.json({
    message: "backend is working"
  });
});