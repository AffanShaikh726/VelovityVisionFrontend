import React from "react";
import "./footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    <b>
                        &copy; {currentYear} VelocityVision. All rights
                        reserved.
                    </b>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
