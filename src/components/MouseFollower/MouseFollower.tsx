import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./MouseFollower.scss";

export default function MouseFollower() {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    const moveFollower = (e: MouseEvent) => {
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveFollower);

    return () => {
      window.removeEventListener("mousemove", moveFollower);
    };
  }, []);

  return (
    <div className="mouse-follower" ref={followerRef}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5"/>
      </svg>
    </div>
  );
}
