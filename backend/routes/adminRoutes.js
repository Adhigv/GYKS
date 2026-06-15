const express = require("express");

const router = express.Router();
const {
  approveMentor,
  rejectMentor
} = require("../controllers/adminController");  
router.put("/approve/:id",approveMentor);
router.put("/reject/:id",rejectMentor);
module.exports = router;