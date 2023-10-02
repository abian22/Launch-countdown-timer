import { useState } from "react";
import hills from "../images/pattern-hills.svg";
import stars from "../images/bg-stars.svg";
import TimerTest from "./components/TimerTest/TimerTest";
import { Box } from "@mui/material";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import "./App.css";

function App() {
  return (
    <>
      <Box
        className="container"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: {xs:"300px", lg:"600px"},
          top: {xs:"40px", sm:"50px",lg:"20px", xl:"70px"},
          position: "relative",
          textAlign:"center",
          marginLeft:{xs:"25%", sm:"35%", xl:"40%"},
        }}
      >
        <Box
          sx={{
            textAlign:"center",
            position: "absolute",
            display: "flex",
            color: "white",
            fontFamily: "bold",
            fontSize: {xs:"20px", lg:"30px"},
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
        <TimerTest/>
        <TimerTest />
        <TimerTest />
        <TimerTest />
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
            bottom: "30px",
            position: "absolute",
          }}
        >
          <img
            src={facebook}
            style={{width:"20px", zIndex: "999", marginRight: "10px" }}
          />
          <img
            src={pinterest}
            style={{width:"20px", zIndex: "999", marginRight: "10px" }}
          />
          <img src={instagram} style={{width:"20px", zIndex: "999" }} />
        </Box>
      </Box>
    </>
  );
}

export default App;
