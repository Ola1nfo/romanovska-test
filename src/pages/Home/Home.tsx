import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Home.scss";
import Main from "../Main/Main";

import spriteLogo from "../Home/img/sprite.png";
import wakandaLogo from "../Home/img/wakanda.png";
import doorVideo from "../Home/video/door-open.mp4"; 

export default function Home() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    let x = 0, y = 0, targetX = 0, targetY = 0;
    const sensitivity = 10;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = ((e.clientX - innerWidth / 2) / innerWidth) * sensitivity;
      targetY = ((e.clientY - innerHeight / 2) / innerHeight) * sensitivity;
    };

    const update = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;

      gsap.to(bg, { x, y, duration: 0.8, ease: "power3.out" });
      requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", handleMouseMove);
    update();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleEnter = () => {
    setVideoStarted(true);
    setTimeout(() => setFlash(true), 5000);
    setTimeout(() => setShowMain(true), 5100);
  };

  if (showMain) return <Main />;

  return (
    <div className={`home ${videoStarted ? "fade-out" : ""}`}>
      {!videoStarted && (
        <div className="home-content">
          <a href="https://www.youtube.com/playlist?list=PLDjMP4ry31tvJnmVnYLWRF3w99vWym5Uf">
            <button className="accessibility-btn" aria-label="Accessible version">
              <span className="label">Accessible version</span>
              <span className="arrow">››</span>
            </button>
          </a>

          <div className="logos">
            <img src={spriteLogo} alt="Sprite Zero Sugar" className="logo" />
            <span className="multiply">×</span>
            <img src={wakandaLogo} alt="Wakanda Forever" className="logo" />
          </div>

          <h1 className="title">
            <span className="subtitle">
              <span className="the">THE</span>
              <span className="hall">
                HALL <span className="glyph-top">⟟⋏⋏⋔</span>
              </span>
              <span className="of">OF</span>
            </span>
            <span className="zero">
              ZERO LIMITS <span className="glyph-bottom">⟊⋏⟒⋉</span>
            </span>
          </h1>

          <div className="tagline">
            <p>EXPLORE NEW PATHS.</p>
            <p>FIND YOUR GIFT.</p>
          </div>

          <button className="enter-btn" aria-label="enter" onClick={handleEnter}>
            <span className="label">Enter</span>
            <span className="arrow">››</span>
          </button>
        </div>
      )}

      <table className="footer"> 
        <tbody> 
          <tr> 
            <td><img src={spriteLogo} alt="Sprite" /></td> <td><img src={wakandaLogo} alt="Marvel" /></td> 
            <td><p>Sprite Zero Sugar | © MARVEL</p></td> 
          </tr> 
        </tbody> 
      </table>

      {videoStarted && (
        <>
          <video
            className="door-video"
            src={doorVideo}
            autoPlay
            muted
            onEnded={() => setFlash(true)}
          />
          <table className="footer"> 
            <tbody> 
              <tr> 
                <td><img src={spriteLogo} alt="Sprite" /></td> <td><img src={wakandaLogo} alt="Marvel" /></td> 
                <td><p>Sprite Zero Sugar | © MARVEL</p></td> 
              </tr> 
            </tbody> 
          </table>
        </>

        
      )}

      {flash && <div className="flash-screen"></div>}

      <div ref={bgRef} className="home-bg" />
    </div>
  );
}
