import React from "react";
import "./Timer.css";

function Timer() {
  return (
    <div
      className="container"
      style={{
        position: "relative",
        width: "50px",
        height: "25px",
        top: "30%",
        left: "30%",
        zIndex: "1",
      }}
    >
      <div
        className="superiorPartSquare"
        style={{
          height: "25px",
          display: "flex",
          position: "relative",
          zIndex: "1",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <div
        className="inferiorSquare"
        style={{
          backgroundColor: "hsl(236, 21%, 26%)",
          position: "absolute",
          width: "50px",
          height: "25px",
          top: "25px",
          zIndex: "1",
        }}
      >
        <div
          className="semiCircle"
          style={{
            width: "3px",
            height: "4px",
            borderColor: "hsl(234, 17%, 12%)",
            color: "black",
            backgroundColor: "hsl(234, 17%, 12%)",
            borderTopRightRadius: "100%",
            borderBottomRightRadius: "100%",
            position: "absolute",
            left: "1px",
            top: "-1px",
            transform: "translateX(-50%)",
            zIndex: "",
          }}
        />
        <div
          className="semiCircle"
          style={{
            width: "3.5px",
            height: "4px",
            borderColor: "hsl(234, 17%, 12%)",
            color: "black",
            backgroundColor: "hsl(234, 17%, 12%)",
            borderTopLeftRadius: "100%",
            borderBottomLeftRadius: "100%",
            position: "absolute",
            left: "98.5%",
            top: "-1px",
            transform: "translateX(-50%)",
            zIndex: "2",
          }}
        />
        <span className="number" style={{ fontFamily: "bold", zIndex:"999"}}>23</span>
        <div
          className="borderTop"
          style={{
            width: "100%",
            height: "2px",
            background:
              "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.3), transparent)",
            position: "absolute",
            top: "0",
            zIndex: "1000",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Timer;
