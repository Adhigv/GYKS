const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  mentorName: {
    type: String
  }

},
{
  timestamps: true
}
);

module.exports = mongoose.model(
  "Skill",
  skillSchema
);