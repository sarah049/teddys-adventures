import React from "react";
import { motion, transform } from "framer-motion";
import '../index.css';


const bounceTransition = {
  y: {
    duration: 0.8, //400ms
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeOut",
  },
};

export default function BouncingTitle() {
  return (
    <div
      style={{
        display: "flex",
        left: "25%",
        top: "5%",
        textAlign: "center",
        position: "absolute",
        fontSize: "100px",
        fontWeight: "bold",
        justifyContent: "space-around",
        fontFamily: "Raleway",
        zIndex: 3,
        color: "rgb(235, 177, 52)",
      }}
    > 
      <motion.span
        transition={bounceTransition}
        animate={{
          y: ["10%", "-5%"],
        }}>
            TEDDY'S ADVENTURES
        </motion.span>
    </div>
  );
}
