import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./WisdomGuide.scss";

export default function WisdomGuide() {
    const guideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = guideRef.current;
        if (!el) return;

        // Початковий стан — прихований
        gsap.set(el, { opacity: 0, y: 50 });

        // Плавна поява після невеликої затримки
        gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
        });
    }, []);

    return (
        <div className="wisdom-guide" ref={guideRef}>
            <div className="hologram-bg">
                <div className="ai-orb">
                    <div className="orb-ring"></div>
                    <div className="orb-ring"></div>
                </div>
            </div>
            <div className="wisdom-content">
                <p>
                You have entered the{" "}
                <span className="highlight">Hall of Zero Limits.</span>
                <br />
                Great things lie ahead for all who open themselves to finding their gift.
                </p>

                <div className="wisdom-buttons">
                    <button className="arrow-btn left">←</button>
                    <button className="arrow-btn right">→</button>
                </div>
            </div>

            <h2 className="guide-title">
                WISDOM
                <br />
                GUIDE
            </h2>
        </div>
    );
}
