import React from "react";

const Light = props => {
    const { color, activeColor, handleClick } = props;
    return (
        <div
            className={`light ${activeColor === color ? color : "light-off"}`} 
            onClick={() => handleClick(color)}
        />
    );
};

export default Light;