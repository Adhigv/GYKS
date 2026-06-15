const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
{
  name:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true
  },

  skill:{
    type:String,
    required:true
  },

  status:{
    type:String,
    enum:["pending","approved","rejected"],
    default:"pending"
  }
},
{
 timestamps:true
}
);

module.exports =
mongoose.model(
"Enrollment",
enrollmentSchema
);