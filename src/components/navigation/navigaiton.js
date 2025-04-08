import React from "react";
import "./navigation.css";
import velocityImage from "./Velocity Vision.png";

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img
                        src={velocityImage}
                        alt="Velocity Vision Logo"
                        className="logo-image"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
