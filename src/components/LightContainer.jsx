import React, { useState } from 'react';
import Light from "./Light.jsx";

export default function LightContainer() {
    const [activeLight, setActiveLight] = useState("red");
    const colors = ["red", "yellow", "green"];

    const handleClick = color => {
        setActiveLight(color);
    };

    return (
        <div className="light-container">
            {colors.map(color => (
                <Light 
                    color={color}
                    key={color}
                    activeColor={activeLight}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
}