import React from "react";
import "./TestingTimer.css";

function TestingTimer() {
  return (
    <>
      <div className="center-container">
        <div className="center-content">
          <div
            style={{
              width: "100px",
              height: "100px",
              color: "red",
              fontFamily: "bold",
              border: "solid",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              background: `linear-gradient(to bottom, hsl(236, 21%, 26%), hsl(236, 21%, 21%))`,
            }}
          >
            23
          </div>
        </div>
      </div>
    </>
  );
}

export default TestingTimer;
