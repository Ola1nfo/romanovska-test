import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./MenuOverlay.scss";

//img
import spriteLogo from './img/sprite.png'
import wakandaLogo from './img/wakanda.png'

interface MenuOverlayProps {
  onClose: () => void;
}

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const overlay = overlayRef.current;
        if (!overlay) return;

        gsap.fromTo(
        overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" }
        );

        return () => {
        gsap.to(overlay, { opacity: 0, duration: 0.4, ease: "power2.in" });
        };
    }, []);

    return (
        <div className="menu-overlay" ref={overlayRef}>
            <div className="menu-header">
                <button className="close-btn" onClick={onClose}>
                <span>✕</span> CLOSE MENU
                </button>
            </div>

            <div className="hex-main">
                <div className="floating-hex hex1">
                    <div className="hex-line-container">
                        <div className="hexagon"><div className="hex-dot"></div></div>
                        <div className="line"></div>
                        <span className="hex-label">inspiratin garden</span>
                    </div>
                </div>
                <div className="floating-hex hex2">
                    <div className="hex-line-container">
                        <div className="hexagon"><div className="hex-dot"></div></div>
                        <div className="line"></div>
                        <span className="hex-label">origin stories</span>
                    </div>
                </div>
                <div className="floating-hex hex3">
                    <div className="hex-line-container">
                        <div className="hexagon"><div className="hex-dot"></div></div>
                        <div className="line"></div>
                        <span className="hex-label">sprite xero sugar®</span>
                    </div>
                </div>
                <div className="floating-hex hex4">
                    <div className="hex-line-container">
                        <div className="hexagon"><div className="hex-dot"></div></div>
                        <div className="line"></div>
                        <span className="hex-label">WELCOME</span>
                    </div>
                </div>
                <div className="floating-hex hex5">
                    <div className="hex-line-container">
                        <div className="hexagon"><div className="hex-dot"></div></div>
                        <div className="line"></div>
                        <span className="hex-label">find your gift</span>
                    </div>
                </div>
                <div className="floating-hex hex6">
                    <div className="hex-line-container">
                        <div className="hexagon"><div className="hex-dot"></div></div>
                        <div className="line"></div>
                        <span className="hex-label">the library</span>
                    </div>
                </div>
            </div>

            <h1 className="title">
                <span className="subtitle">
                <span className="the-text">THE</span>
                <span className="hall-text">HALL </span>
                <span className="of-text">OF</span>
                </span>
                <span className="main-text">ZERO LIMITS</span>
            </h1>

            <table className="footer">
                <tbody>
                    <tr>
                        <td><img src={spriteLogo} alt="Sprite" /></td>
                        <td><img src={wakandaLogo} alt="Marvel" /></td>
                        <td><p>Sprite Zero Sugar | © MARVEL</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
