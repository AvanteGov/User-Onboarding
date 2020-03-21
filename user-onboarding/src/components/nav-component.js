import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
   
    return (
        <div className="nav-container">
            <Link to="/form-page">
                <div className="nav-container__form-link-container">
                    <h2> FORM PAGE </h2>
                </div>
            </Link>
            <Link to="/team-page">
                <div className="nav-container__team-link-container">
                    <h2> TEAM PAGE </h2>
                </div>
            </Link>

        </div>
    )
}


export default NavComponent