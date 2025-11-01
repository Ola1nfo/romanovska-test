import { useEffect, useState, useRef } from "react";
import "./Home.scss";


//img
import spriteLogo from "../Home/img/sprite.png";
import wakandaLogo from "../Home/img/wakanda.png";


export default function Home() {
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 4) / innerWidth;
      const y = (e.clientY - innerHeight / 4) / innerHeight;
      setTargetPos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const smoothMove = () => {
      currentPos.current.x += (targetPos.x - currentPos.current.x) * 0.4;
      currentPos.current.y += (targetPos.y - currentPos.current.y) * 0.4;

      setDisplayPos({ ...currentPos.current });
      requestAnimationFrame(smoothMove);
    };
    smoothMove();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [targetPos]);

  return (
    <div className="home">
      <div
        className="home-bg"
        style={{
          transform: `translate(${displayPos.x * 35}px, ${displayPos.y * 35}px) scale(1.07)`,
        }}
      ></div>

      <div className="home-content">
        <div className="logos">
          <img src={spriteLogo} alt="Sprite Zero Sugar" className="logo" />
          <span className="multiply">×</span>
          <img src={wakandaLogo} alt="Wakanda Forever" className="logo" />
        </div>

        <h1 className="main-title">
          <span className="subtitle">
            <span className="the">THE</span>
            <span className="hall">HALL</span>
            <span className="of">OF</span>
          </span>
          <span className="zero">ZERO LIMITS</span>
        </h1>

        <p className="tagline">EXPLORE NEW PATHS. FIND YOUR GIFT.</p>

        <button className="enter-btn">ENTER →</button>

        <div className="footer">
          <img src={spriteLogo} alt="Sprite" />
          <img src={wakandaLogo} alt="Marvel" />
          <p>Sprite Zero Sugar | © MARVEL</p>
        </div>
      </div>
    </div>
  );
}
