import React from "react";
import "./main.css";
import { useState } from "react";

export default function Main() {
    const [r_count, setR_count] = useState(8);
    const [Remidial_count, setRemidial_count] = useState(2);
    const [p_count, setP_count] = useState(3);

    return(
        <div className="container-1">
            <div className="title">
                <h1>Student Management</h1>
            </div>
            <div className="comp">
                <div className="item">
                <div className="centre"><i class="fa-solid fa-user up"></i><p>  :   {r_count}</p></div>
                <p className="para">Regular Student</p>
                </div>
                <div className="item">
                <div className="centre"><i class="fa-solid fa-user-tie up"></i><p>  :   {Remidial_count}</p></div>
                <p className="para">Remidial Student</p>
                </div>
                <div className="item">
                <div className="centre"><i class="fa-solid fa-user-graduate up"></i><p>  :   {p_count}</p></div>
                <p className="para">In Pay Clubs</p>
                </div>
            
            </div>

            <hr />

            <div className="icons">
                <div className="part-1">
                    <i class="fa-solid fa-user"><p className="icon-para">Regular Enrollment</p></i>
                    <i class="fa-solid fa-book"><p className="icon-para">Remedial Enrollment</p></i>
                    <i class="fa-solid fa-user-graduate"><p className="icon-para">Club Management</p></i>
                </div>
                <div className="part-1">
                    <i class="fa-solid fa-people-roof"><p className="icon-para">Classroom Management</p></i>
                    <i class="fa-solid fa-envelope-open-text"><p className="icon-para">SMS/EMAIL</p></i>
                    <i class="fa-solid fa-signal"><p className="icon-para">Attendance</p></i>
                </div>
                <div className="part-1">
                    <i class="fa-solid fa-house-medical-flag"><p className="icon-para">Clinic</p></i>
                </div>
            </div>
        </div>
    )
}