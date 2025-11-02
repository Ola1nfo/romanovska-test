import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Main.scss";

// img
import hallBg from "../Main/img/hall-bg.png";
import spriteLogo from "../Main/img/sprite.png";
import wakandaLogo from "../Main/img/wakanda.png";

export default function Main() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scale = 1.3; // має збігатися з CSS cameraZoom

    const handleMouseMove = (event: MouseEvent) => {
      if (!bgRef.current) return;

      // обчислюємо максимально можливий зсув, щоб бачити краї
      const xRange = (bgRef.current.offsetWidth * (scale - 1)) / 2;
      const yRange = (bgRef.current.offsetHeight * (scale - 1)) / 2;

      // рух протилежний до мишки для ефекту камери
      const x = -(event.clientX / window.innerWidth - 0.5) * 2 * xRange;
      const y = -(event.clientY / window.innerHeight - 0.5) * 2 * yRange;

      gsap.to(bgRef.current, {
        x: x,
        y: y,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="main-page">
      <div className="hall-bg-wrapper">
        <div
          className="hall-bg"
          ref={bgRef}
          style={{ backgroundImage: `url(${hallBg})` }}
        />
      </div>

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
