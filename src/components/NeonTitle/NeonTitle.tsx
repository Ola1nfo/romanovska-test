import { useEffect, useState } from "react";
import "./NeonTitle.scss";


export default function NeonTitle () {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`neon-title ${visible ? "visible" : ""}`}>
            <h2 className="main-title">
                <span className="diamond left"></span>
                <div>
                    THE HALL OF
                    <br />
                    ZERO LIMITS
                </div>
                <span className="diamond right"></span>
            </h2>
            <div className="subtitle">
                WELCOME
            </div>
        </div>
    );
};
