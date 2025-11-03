import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./TutorialPanel.scss";

export default function TutorialPanel() {
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = panelRef.current;
        if (!el) return;

        gsap.fromTo(
            el,
            { opacity: 0, scale: 0.9, filter: "blur(6px)" },
            { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
        );
    }, []);

    return (
        <div className="tutorial-panel" ref={panelRef}>
            <div className="panel-outline"></div>

            <div className="panel-content">
                <h2 className="panel-title">TUTORIAL</h2>

                <div className="panel-items">
                    <div className="item">
                        <div className="icon">🖱️</div>
                        <p>Scroll up and down to explore the Hall</p>
                    </div>
                    <div className="item">
                        <div className="icon">✨</div>
                        <p>Tap the glowing icon to reveal wisdom</p>
                    </div>
                    <div className="item">
                        <div className="icon">≡</div>
                        <p>Use the menu to track your progress</p>
                    </div>
                </div>

                <button className="start-btn">BEGIN JOURNEY →</button>
            </div>
        </div>
    );
}
