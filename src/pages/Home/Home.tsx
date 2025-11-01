import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Home.scss";

// images
import spriteLogo from "../Home/img/sprite.png";
import wakandaLogo from "../Home/img/wakanda.png";

export default function Home() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    const sensitivity = 10;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = ((e.clientX - innerWidth / 2) / innerWidth) * sensitivity;
      targetY = ((e.clientY - innerHeight / 2) / innerHeight) * sensitivity;
    };

    const update = () => {
      // інерційний рух із плавним переходом
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;

      gsap.to(bg, {
        x,
        y,
        duration: 0.8,
        ease: "power3.out",
      });

      requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", handleMouseMove);
    update();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="home">
      <div ref={bgRef} className="home-bg" />

      <div className="home-content">
        <a href="https://www.youtube.com/playlist?list=PLDjMP4ry31tvJnmVnYLWRF3w99vWym5Uf"><button className="accessibility-btn" aria-label="Accessible version">
          <span className="label">Accessible version</span>
          <span className="arrow">››</span>
        </button></a>
        <div className="logos">
          <img src={spriteLogo} alt="Sprite Zero Sugar" className="logo" />
          <span className="multiply">×</span>
          <img src={wakandaLogo} alt="Wakanda Forever" className="logo" />
        </div>

        <h1 className="title">
          <span className="subtitle">
            <span className="the">THE</span>
            <span className="hall">
              HALL
              <span className="glyph-top">⟟⋏⋏⋔</span>
            </span>
            <span className="of">OF</span>
          </span>
          <span className="zero">
            ZERO LIMITS
            <span className="glyph-bottom">⟊⋏⟒⋉</span>
          </span>
        </h1>

        <div className="tagline">
          <p>EXPLORE NEW PATHS.</p>
          <p>FIND YOUR GIFT.</p>
        </div>

        <button className="enter-btn" aria-label="enter">
          <span className="label">Enter</span>
          <span className="arrow">››</span>
        </button>

        <table className="footer">
          <tr>
            <td><img src={spriteLogo} alt="Sprite" /></td>
            <td><img src={wakandaLogo} alt="Marvel" /></td>
            <td><p>Sprite Zero Sugar | © MARVEL</p></td>
          </tr>
        </table>
      </div>
    </div>
  );
}
