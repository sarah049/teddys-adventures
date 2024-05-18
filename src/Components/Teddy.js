import React, { useState, useEffect, useCallback } from "react";
import "./Teddy.css";
// import { defaultBot } from "../App.js";
//useCallback updates your function at every rerender when your dependency changes, but you have to call it yourself each time with useEffect (which calls the function after the render when its dependency also changes)
const movements = { Straight: "/public/img/teddy.png" };

const botLowerBound = 20;
const botUpperBound = 240;
const step = 10;
export default function Teddy({ bottomPos, leftPos, moveType }) {
  const [botCoord, setBotCoord] = useState(bottomPos);

  const control = useCallback((e) => {
    console.log("hi", botCoord);
    //up arrow
    if (e.key === "ArrowUp" && botCoord < botUpperBound) {
      setBotCoord(botCoord + step);
      console.log(botCoord);
    }
    //down arrow
    else if (e.key === "ArrowDown" && botCoord > botLowerBound) {
      setBotCoord(botCoord - step);
      console.log(botCoord);
    }
    else if (e.code == "Space") {
        
    }
    console.log(botCoord < botUpperBound)
    //
  }, [botCoord]
  );

  useEffect(() => {
    function handleKeyDown(e) {
      control(e);
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [control]);

  return (
    <div
      className="teddy"
      style={{
        left: leftPos,
        bottom: botCoord ,
        position: "absolute",
      }}

    ></div>
  );
}

//      onKeyDown={control}           background: "url(${movements[moveType]})"


