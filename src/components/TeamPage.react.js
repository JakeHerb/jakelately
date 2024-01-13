import Lottie from "lottie-react";
import React from 'react';
import animationData from "../assets/animations/soundwave-animation.json";
import JanimationData from "../assets/animations/JAnimation.json";
import AanimationData from "../assets/animations/AAnimation.json";
import KanimationData from "../assets/animations/KAnimation.json"
import EanimationData from "../assets/animations/EAnimation.json"
import './css/TeamPage.css';

const TeamPage = () => {

    return (
        <div className="teamPage">
            <ul>
                <li>
                    <Lottie animationData={JanimationData} />
                </li>
                <li>
                    <Lottie animationData={AanimationData} />
                </li>
                <li>
                    <Lottie animationData={KanimationData} />
                </li>
                <li>
                    <Lottie animationData={EanimationData} />
                </li>
            </ul>
            {/* <Lottie animationData={animationData} /> */}
        </div>
    )
}

export default TeamPage;