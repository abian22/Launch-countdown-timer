import { useState } from "react";
import hills from "../images/pattern-hills.svg";
import stars from "../images/bg-stars.svg";
import Timer from "./components/Timer/Timer"
import TestingTimer from"./components/TestingTimer/TestingTimer"
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "hsl(235, 16%, 14%)",
          width: "100vw",
          height: "100vh",
        }}
      >
        <img
          src={stars}
          style={{ position: "absolute", left: "10%", height: "60vh" }}
        />
        <Timer />
        <img
          src={hills}
          style={{
            width: "100vw",
            bottom: "0",
            position: "absolute",
            height:"auto"
          }}
        />
      </div>
    </>
  );
}

export default App;
