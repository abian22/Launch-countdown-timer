import React from "react";
import hills from "../images/pattern-hills.svg";
import stars from "../images/bg-stars.svg";
import TimerTest from "./components/TimerTest/TimerTest";
import { Box } from "@mui/material";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const launchDate = new Date("2023-12-31T00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = launchDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <>
      <Box
        className="container"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "300px", lg: "600px" },
          top: { xs: "40px", sm: "50px", lg: "20px", xl: "70px" },
          position: "relative",
          textAlign: "center",
          marginLeft: { xs: "25%", sm: "35%", xl: "40%" },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            position: "absolute",
            display: "flex",
            color: "white",
            fontFamily: "bold",
            fontSize: { xs: "20px", lg: "30px" },
            letterSpacing: "3px",
            zIndex: "999",
            marginTop: "10%",
          }}
        >
          WE´RE LAUNCHING SOON
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "hsl(235, 16%, 8%)",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <TimerTest timeRemaining={timeRemaining.days} />
        <TimerTest timeRemaining={timeRemaining.hours} />
        <TimerTest timeRemaining={timeRemaining.minutes} />
        <TimerTest timeRemaining={timeRemaining.seconds} />
        <img
          src={stars}
          style={{
            height: "60vh",
            width: "100%",
            position: "absolute",
            marginRight: "80px",
          }}
        />

        <img
          src={hills}
          style={{
            width: "100%",
            bottom: "0",
            position: "absolute",
            height: "25%",
          }}
        />
        <Box
          className="container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            bottom: "50px",
            position: "absolute",
          }}
        >
          <img
            src={facebook}
            style={{ width: "20px", zIndex: "999", marginRight: "10px" }}
          />
          <img
            src={pinterest}
            style={{ width: "20px", zIndex: "999", marginRight: "10px" }}
          />
          <img src={instagram} style={{ width: "20px", zIndex: "999" }} />
        </Box>
      </Box>
    </>
  );
}

export default App;
