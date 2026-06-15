const express = require("express");
const router = express.Router();
const {
  getPendingMentors,
  approveMentor,
  rejectMentor,
  dashboardStats
} = require("../controllers/userControllers");

const User = require("../models/User");


router.get("/pending-mentors", getPendingMentors);
router.put("/approve/:id", approveMentor);
router.put("/reject/:id",rejectMentor);
router.get("/dashboard-stats", dashboardStats);

router.get("/profile/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
});

module.exports = router;