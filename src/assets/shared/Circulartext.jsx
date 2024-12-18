import React from "react";

const CircularText = ({ text = "how.it.works.", radius = 50, className="",icon }) => {
  const characters = text.split("");
  const angle = 360 / characters.length; // Angle between each character

  return (
    <div
      className="relative flex justify-center items-center mx-auto"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      {characters.map((char, index) => (
        <span
          key={index}
          className={`absolute text-center ${className}`}
          style={{
            transform: `rotate(${index * angle}deg) translate(${radius}px) rotate(90deg)`,
            transformOrigin: "30% 50%",
          }}
        >
          {char}
        </span>
      ))}
      {icon}
    </div>
  );
};

export default CircularText;