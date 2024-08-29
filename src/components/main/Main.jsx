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
                <div className="centre"><i class="fa-solid fa-user"></i><p>  :   {r_count}</p></div>
                <p>Regular Student</p>
                </div>
                <div className="item">
                <div className="centre"><i class="fa-solid fa-user"></i><p>  :   {Remidial_count}</p></div>
                <p>Regular Student</p>
                </div>
                <div className="item">
                <div className="centre"><i class="fa-solid fa-user"></i><p>  :   {p_count}</p></div>
                <p>Regular Student</p>
                </div>
            </div>
        </div>
    )
}