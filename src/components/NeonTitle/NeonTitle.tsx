import { useEffect, useState } from "react";
import "./NeonTitle.scss";

interface NeonTitleProps {
  active?: boolean;
}

export default function NeonTitle({ active = true }: NeonTitleProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (active) {
        const timer = setTimeout(() => setVisible(true), 300);
        return () => clearTimeout(timer);
        } else {
        setVisible(false);
        }
    }, [active]);

    return (
        <div className={`neon-title ${visible ? "visible" : "hidden"}`}>
        <h2 className="main-title">
            <span className="diamond left"></span>
            <div>
            THE HALL OF
            <br />
            ZERO LIMITS
            </div>
            <span className="diamond right"></span>
        </h2>
        <div className="subtitle">WELCOME</div>
        </div>
    );
}
