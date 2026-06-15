import { useEffect, useState } from "react";
import axios from "axios";
import "./Enrollment.css";
import API from "../services/api";
function Enrollment() {

const [enrollments,
setEnrollments]
=
useState([]);

useEffect(() => {

fetchEnrollments();

}, []);

const fetchEnrollments =
async () => {

const res =
await API.get(
"/api/enrollments"
);

setEnrollments(
res.data
);

};

const approve =
async (id) => {

await API.put(
"/api/enrollments/approve/${id}"
);

fetchEnrollments();

};

return (

<div>

<h2>
Student Enrollments
</h2>

{
enrollments.map((e)=>(
<div
key={e._id}
className="card"
>

<h3>
{e.studentId?.name}
</h3>

<p>
{e.skillId?.title}
</p>

<p>
{e.status}
</p>

<button
onClick={()=>
approve(e._id)}
>
Approve
</button>

</div>
))
}

</div>

);
}

export default Enrollment;