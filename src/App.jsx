import React from "react";
import hills from "../images/pattern-hills.svg";
import stars from "../images/bg-stars.svg";
import TimerTest from "./components/TimerTest/TimerTest";
import { Box, Typography } from "@mui/material";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialLaunchDate = new Date();
  initialLaunchDate.setDate(initialLaunchDate.getDate() + 9);

  const [launchDate, setLaunchDate] = useState(initialLaunchDate);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = launchDate.getTime() - now;

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
          marginLeft: { xs: "40%", sm: "35%", xl: "40%" },
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
            marginTop: {xs:"40%",sm:"10%"},
          }}
        >
          WE´RE LAUNCHING SOON
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "hsl(235, 16%, 8%)",
          width: {xs:"150vw", sm:"100vw"},
          height: {xs:"150vh", sm:"100vh"},
          display: "flex",
          alignItems: "center",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <TimerTest timeRemaining={timeRemaining.days} />
            <Typography
              sx={{
                color: " hsl(237, 18%, 59%)",
                display: "flex",
                flexDirection: "column",
                marginLeft: { xs: "60px", lg: "78px" },
                marginTop: { xs: "14px", lg: "-50px" },
                fontFamily: "bold",
                letterSpacing: "3px",
                fontSize:"12px",
              }}
            >
              DAYS
            </Typography>
          </div>
          <div>
            <TimerTest timeRemaining={timeRemaining.hours} />
            <Typography
              sx={{
                color: " hsl(237, 18%, 59%)",
                display: "flex",
                flexDirection: "column",
                marginLeft: {xs:"55px", lg:"72px"},
                marginTop: { xs: "14px", lg: "-50px"  },
                fontFamily: "bold",
                letterSpacing: "3px",
                fontSize:"12px"
              }}
            >
              HOURS
            </Typography>
          </div>
          <div>
            <TimerTest timeRemaining={timeRemaining.minutes} />
            <Typography
              sx={{
                color: " hsl(237, 18%, 59%)",
                display: "flex",
                flexDirection: "column",
                marginLeft: {xs:"50px", lg:"62px"},
                marginTop: { xs: "10px", lg: "-50px"  },
                fontFamily: "bold",
                letterSpacing: "3px",
                fontSize:"12px"

              }}
            >
              MINUTES
            </Typography>
          </div>
          <div>
            <TimerTest timeRemaining={timeRemaining.seconds} />
            <Typography
              sx={{
                color: " hsl(237, 18%, 59%)",
                display: "flex",
                flexDirection: "column",
                marginLeft: {xs:"47px", lg:"62px"},
                marginTop: { xs: "10px" , lg: "-50px" },
                fontFamily: "bold",
                letterSpacing: "3px",
                fontSize:"12px"
              }}
            >
              SECONDS
            </Typography>
          </div>
        </div>
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
