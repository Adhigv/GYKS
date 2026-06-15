const Enrollment = require("../models/Enrollment");

exports.createEnrollment = async (req, res) => {
  try {
    // console.log("BODY:",req.body);

    const enrollment =
      await Enrollment.create({
        name:req.body.name,
        email:req.body.email,
        skill:req.body.skill
      });
      // console.log("SAVED:",
      //   enrollment
      // );

      res.status(201).json(enrollment);

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message
    });
  }
};

exports.getEnrollments = async (req, res) => {

  try {

    const enrollments =
      await Enrollment.find()
        // .populate("studentId")
        // .populate("skillId");

    res.json(enrollments);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }
};

exports.approveEnrollment =
async (req, res) => {

  try {

    const enrollment =
      await Enrollment.findById(
        req.params.id
      );

    enrollment.status =
      "approved";

    await enrollment.save();

    res.json(enrollment);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }
};