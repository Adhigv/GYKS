const User =
require("../models/User");
const  Enrollment = require("../models/Enrollment");
exports.getPendingMentors =
async(req,res)=>{
    try{

        const mentors =
        await User.find({
        role:"mentor",
        approvalStatus:"pending"
        });

        res.json(mentors);
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

exports.approveMentor =
async(req,res)=>{
    try{

        const mentor =
        await User.findByIdAndUpdate(
            req.params.id,
            {
                approvalStatus:"approved",
                isApproved:true,
                approvalMessage:"Approved by Admin"
            },
            {new:true}
        );
        res.json(mentor);
    } catch (error){
        res.status(500).json({
            message:error.message
        });
    }
};

    
exports.rejectMentor =async(req,res)=>{
    try {
        const mentor = await User.findByIdAndUpdate(req.params.id,
        {
            approvalStatus: "rejected",
            isApproved:false,
            approvalMessage: "Rejected by Admin"
        },
        {new:true}
    );
    res.json(mentor);
} catch (error){
    res.status(500).json({
        message:error.message

    });
}
};
      
exports.dashboardStats = async (req,res)=>{
    try{

        const students =
        await User.countDocuments({
            role:"student"
        });

        const mentors =
        await User.countDocuments({
            role:"mentor",
            approvalStatus:"approved"
        });

        const pending =
        await User.countDocuments({
            role:"mentor",
            approvalStatus:"pending"
        });
        const enrollments= await Enrollment.countDocuments();

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