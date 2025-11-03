import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./TutorialPanel.scss";

interface TutorialPanelProps {
  onFinish: () => void; 
}

export default function TutorialPanel({ onFinish }: TutorialPanelProps) {
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = panelRef.current;
        if (!el) return;

        gsap.fromTo(
        el,
        { opacity: 0, scale: 0.9, filter: "blur(6px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "power3.out" }
        );
    }, []);

    const handleStart = () => {
        const el = panelRef.current;
        if (!el) return;

        gsap.to(el, {
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)",
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: onFinish, 
        });
    };

    return (
        <div className="tutorial-overlay" ref={panelRef}>
        <h2 className="panel-title">
            <span className="panel-symbols">⟟⋏⋏⋔⟊⋏⟒⋉</span>
            <span className="panel-text">TUTORIAL</span>
        </h2>

        <div className="tutorial-panel">
            <svg className="sci-frame" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <defs>
                <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
                </filter>
            </defs>

            <polygon
                className="frame-outline"
                points="
                40,0 
                960,0 
                1000,40 
                1000,560 
                960,600 
                40,600 
                0,560 
                0,40
                "
                stroke="#00ffcc"
                strokeWidth="3"
                fill="rgba(0, 255, 200, 0.08)"
                filter="url(#glow)"
                strokeLinejoin="round"
            />

            <line x1="80" y1="40" x2="160" y2="40" className="frame-line" />
            <line x1="840" y1="40" x2="920" y2="40" className="frame-line" />
            <line x1="80" y1="560" x2="160" y2="560" className="frame-line" />
            <line x1="840" y1="560" x2="920" y2="560" className="frame-line" />
            </svg>

            <div className="panel-content">
            <div className="panel-items">
                <div className="item">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5"/>
                    </svg>
                </div>
                <p>Scroll up and down to explore the Hall</p>
                </div>

                <div className="item">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                    </svg>
                </div>
                <p>Tap on this icon to access the content</p>
                </div>

                <div className="item">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
                    <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
                <p>This menu will help track your progress</p>
                </div>
            </div>

            <button className="start-btn" onClick={handleStart}>
                BEGIN JOURNEY ↠
            </button>
            </div>
        </div>
        </div>
    );
}
