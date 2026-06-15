const User = require("../models/User");
const Enrollment = require("../models/Enrollment");

exports.dashboardStats = async (req, res) => {
    try{ 
        const students = await User.countDocuments({
            role:"student"
        });
        const mentors= await User.countDocuments({
            role:"mentor",
            approvalStatus:"approved"
        });
        const pending= await User.countDocuments({
            role:"mentor",
            approvalStatus:"pending"
        });
        const enrollmrnts = await Enrollment.countDocuments();
        res.json({
            students,
            mentors,
            pending,
            enrollments
        });
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

 const mentor =
 await User.findByIdAndUpdate(
   req.params.id,
   {
     approvalStatus:"approved",
     approvalMessage:"Approved by Admin",
     isApproved:true
   },
   {new:true}
 );

 res.json(mentor);


exports.rejectMentor = async (req,res)=>{

 const mentor =
 await User.findByIdAndUpdate(
   req.params.id,
   {
     approvalStatus:"rejected",
     approvalMessage:"Rejected by Admin",
     isApproved:false
   },
   {new:true}
 );

 res.json(mentor);
};