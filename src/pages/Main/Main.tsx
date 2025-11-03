import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import WisdomGuide from "../../components/WisdomGuide/WisdomGuide";
import NeonTitle from "../../components/NeonTitle/NeonTitle";
import TutorialPanel from "../../components/TutorialPanel/TutorialPanel";
import MenuButton from "../../components/MenuButton/MenuButton";
import MouseFollower from "../../components/MouseFollower/MouseFollower";
import MenuOverlay from "../../components/MenuButton/MenuOverlay/MenuOverlay";
import "./Main.scss";

// img
import hallBg from "../Main/img/hall-bg.png";
import spriteLogo from "../Main/img/sprite.png";
import wakandaLogo from "../Main/img/wakanda.png";

export default function Main() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [showGuide, setShowGuide] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showNeonTitle, setShowNeonTitle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (!bgRef.current) return;

      const relX = event.clientX / window.innerWidth - 0.5;
      const relY = event.clientY / window.innerHeight - 0.5;
      const multiplier = 60;
      const x = -relX * multiplier;
      const y = -relY * multiplier;

      gsap.to(bgRef.current, {
        x,
        y,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    const wrapper = bg.parentElement;
    const onAnimationEnd = () => {
      window.addEventListener("mousemove", handleMouseMove);
      setShowGuide(true);
      wrapper?.removeEventListener("animationend", onAnimationEnd);
    };

    wrapper?.addEventListener("animationend", onAnimationEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      wrapper?.removeEventListener("animationend", onAnimationEnd);
    };
  }, []);

  const handleGuideFinish = () => {
    setShowGuide(false);
    setTimeout(() => setShowTutorial(true), 800);
  };

  const handleTutorialFinish = () => {
    setShowTutorial(false);
    setTimeout(() => setShowNeonTitle(true), 500);
  };

  return (
    <div className="main-page">
      <div className="hall-bg-wrapper">
        <div
          className="hall-bg"
          ref={bgRef}
          style={{ backgroundImage: `url(${hallBg})` }}
        />
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

      {showGuide && (
        <>
          <div className="screen-dim"></div>
          <WisdomGuide onFinish={handleGuideFinish} />
          <NeonTitle active={showGuide} />
        </>
      )}

      {showTutorial && <TutorialPanel onFinish={handleTutorialFinish} />}

      {showNeonTitle && (
        <>
          <NeonTitle active={showNeonTitle} />
          {!showMenu && <MenuButton onClick={() => setShowMenu(true)} />}
          {!showMenu && <MouseFollower />} 
        </>
      )}

      {showMenu && <MenuOverlay onClose={() => setShowMenu(false)} />}

    </div>
  );
}
