import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./WisdomGuide.scss";
import arrow from "./img/arrow.png";

export default function WisdomGuide() {
    const guideRef = useRef<HTMLDivElement>(null);
    const textContainer = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    const messages = [
        "You have entered the Hall of Zero Limits. Great things lie ahead for all who open themselves to finding their gift.",
        "This is an ever-changing space for creativity and growth. Here, you will find new insights and tools to help inspire you. After all, inspiration is the water every gift needs to grow.",
    ];

    useEffect(() => {
        const el = guideRef.current;
        if (!el) return;
        gsap.set(el, { opacity: 0, y: 50 });
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5,
        });
    }, []);

    useLayoutEffect(() => {
        if (!textContainer.current) return;
        const words = textContainer.current.querySelectorAll(".word");
        gsap.fromTo(
            words,
            { opacity: 0.05, filter: "blur(3px)" },
            {
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.4,
                stagger: 0.08,
                ease: "power1.out",
            }
        );
    }, [index]);

    const next = () => setIndex((prev) => (prev + 1) % messages.length);
    const prev = () => setIndex((prev) => (prev - 1 + messages.length) % messages.length);

    const renderMessage = (msg: string) =>
        msg.split(" ").map((word, i) => {
            const isHighlight =
                word.includes("Hall") ||
                word.includes("of") ||
                word.includes("Zero") ||
                word.includes("Limits.") ||
                word.includes("creativity") ||
                word.includes("and") ||
                word.includes("growth") ||
                word.includes("new") ||
                word.includes("insights") ||
                word.includes("tools");
            return (
                <span
                    key={i}
                    className={`word ${isHighlight ? "highlight" : ""}`}
                >
                    {word}&nbsp;
                </span>
            );
        });

    return (
        <div className="wisdom-guide" ref={guideRef}>
            <div className="hologram-bg">
                <div className="ai-orb">
                    <div className="orb-ring"></div>
                    <div className="orb-ring"></div>
                </div>
            </div>

            <div className="wisdom-content">
                <p className="wisdom-text" ref={textContainer}>
                    {renderMessage(messages[index])}
                </p>

                <div className="arrow-buttons">
                    <div className="arrow-wrapper left" onClick={prev}>
                        <img src={arrow} alt="left arrow" className="arrow-bg" />
                        <span className="arrow-symbol">↠</span>
                    </div>

                    <div className="arrow-wrapper right" onClick={next}>
                        <img src={arrow} alt="right arrow" className="arrow-bg" />
                        <span className="arrow-symbol">↞</span>
                    </div>
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
