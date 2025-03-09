// src/About.jsx
import React from "react";
import frinds from "/images/frinds.jpg" 
export const About = () => {
    return (
        <>
            <div className="about-page">
                <div className="first-img-frnd mt-5 mb-5">
                    <div className="frnd-img"><img src={frinds} alt="img" /></div>
                    <div className="first-text"><p>Friendship is a bond built on trust, understanding, and shared moments. True friends stand by each other in both joy and hardship, offering support without expectation.A good friend makes life brighter, turning ordinary moments into cherished memories. In a world that changes constantly, true friendship remains a priceless treasure.</p></div>
                </div>
               
               
            </div>
        </>

    )
};
