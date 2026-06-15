const express = require("express");

const router = express.Router();

const {
createSkill,
getSkills
}
=
require("../controllers/skillControllers");

router.post("/",createSkill);

router.get("/",getSkills);

module.exports = router;