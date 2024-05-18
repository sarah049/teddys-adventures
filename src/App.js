import "./App.css";
import { useState, useEffect } from "react";
import Teddy from "./Components/Teddy.js";
import Obstacle from "./Components/Obstacle.js";

import { motion } from "framer-motion";
import BouncingTitle from "./Components/Title";

const obstacles = [{"src": "/public/img/rock_transparent.png"}]

export const defaultBot = 200;
const defaultLeft = 100;
function App() {
  const [score, setScore] = useState(0);
  let botCoord = defaultBot;
  
  return (
    <>
      <div className="App"></div>
      {/* {document.removeEventListener("keydown", control)} */}
      <div
      >
      <Teddy
        bottomPos={botCoord}
        leftPos={defaultLeft}
        moveType="Straight"
        // onkeydown={control}
      />
      <Obstacle></Obstacle>
      <BouncingTitle></BouncingTitle>
      </div>
      
    </>
  );
}

export default App;
{
  /* <>
        <div className="scrolling-image-container">
          <div className="scrolling-image">

          </div>
          <div style={{position: "sticky"}} >

            </div>

        </div>
      </> */
}
