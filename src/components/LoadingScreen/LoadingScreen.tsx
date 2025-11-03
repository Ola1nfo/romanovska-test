import './LoadingScreen.scss'

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


//img
import spriteLogo from "../../components/LoadingScreen/img/sprite.png";
import wakandaLogo from "../../components/LoadingScreen/img/wakanda.png";


export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const startDelay = setTimeout(() => {
            const timer = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => navigate("/home"), 500);
                    return 100;
                    }
                    return prev + 1;
                });
            }, 40);
        }, 1500); 

        return () => {
            clearTimeout(startDelay);
        };
    }, [navigate]);

    return (
        <div className="loading-screen">
            <div className="loading-bg" />

            <div className="loading-content">
                <div className="logos">
                <img src={spriteLogo} alt="Sprite" className="logo" />
                <span className="multiply">×</span>
                <img
                    src={wakandaLogo}
                    alt="Wakanda Forever"
                    className="logo"
                />
                </div>

                <h1 className="title-load">
                    <span className="subtitle-load"><span className='the-text-load'>THE</span> <span className='hall-text-load'>HALL </span> <span className='of-text-load'>OF</span></span>
                    <span className="main-text-load">ZERO LIMITS</span>
                </h1>

                <div className="progress-bar">
                    <div className="progress-fill" style={{width: `${progress}%` }}></div>
                </div>
                <p className="progress-text">{progress}%</p>
            </div>
        </div>
    );
}