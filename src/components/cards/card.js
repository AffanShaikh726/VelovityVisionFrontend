import React from "react";
import "./card.css"; // Optional: Add styles for the card

const Card = ({ tnum }) => {
    return (
        <div className="card">
            <div className="main">
                <h2>Violation Ticket #{tnum}</h2>
                <p className="description"></p>
                <div className="tokenInfo">
                    <div className="price">
                        <p>$100</p>
                    </div>
                    <div className="duration">
                        <ins>◷</ins>
                        <p>x days left</p>
                    </div>
                </div>
                <hr />
                <div className="creator">
                    <div className="wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt="Creator"
                        />
                    </div>
                    <p>PAY HERE</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
