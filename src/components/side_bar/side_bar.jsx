import React from "react";
import "./side_bar.css";
import Logo from "./logo.jpg"

function SideBar() {
    return(
        <>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="LOGO" width={"130px"} height={"170px"} />
                </div>
                <div className="nav">
                    <ul>
                        <li><div>
                            <i class="fa-solid fa-people-group"></i>
                            <p>Student Management</p>
                            </div></li>
                        <li><div>
                            <i class="fa-solid fa-bars-progress"></i>
                            <p>Financial Management</p>
                            </div></li>
                        <li><div>
                            <i class="fa-solid fa-medal"></i>
                            <p>Quality Control</p>
                            </div></li>
                        <li><div>
                            <i class="fa-solid fa-list-check"></i>
                            <p>Report Delivery</p>
                            </div></li>
                        <li><div>
                            <i class="fa-solid fa-chart-simple"></i>
                            <p>Attendence</p>
                            </div></li>
                    </ul>

                    <div className="setting">
                            <i class="fa-regular fa-circle-question"></i>
                            <i class="fa-solid fa-gear mergin"></i>
                            <i class="fa-solid fa-person-through-window"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBar;