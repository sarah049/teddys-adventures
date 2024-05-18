import React from "react";
import "./Obstacle.css";

export default function Obstacle({ obsType }) {
  return (
    <div className="obstacle-scroll-container">
        <div className="tree" style={{ position: "absolute" }}></div>
        <div className="oneRock" style={{  position: "absolute" }}></div>
        <div className="river" style={{ position: "absolute" }}></div>

    </div>
  );
}
