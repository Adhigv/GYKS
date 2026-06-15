const express = require("express");

const router = express.Router();

const {
  createEnrollment,
  getEnrollments,
  approveEnrollment
}
=
require(
"../controllers/enrollmentController"
);

router.post(
"/",
createEnrollment
);

router.get(
"/",
getEnrollments
);

router.put(
"/approve/:id",
approveEnrollment
);

module.exports = router;