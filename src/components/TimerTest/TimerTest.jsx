import React from "react";
import "./TimerTest.css";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

function TimerTest({ timeRemaining }) {

  const [pageTransition, setPageTransition] = useState(false);

  useEffect(() => {
    setPageTransition(true);
    const timeout = setTimeout(() => {
      setPageTransition(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [timeRemaining]);
  return (
    <>
      <Box
        className={` ${pageTransition ? "page-transition" : ""}`} 
        sx={{
          width: { xs: "70px", sm: "90px",lg:"120px" },
          height: { xs: "60px", sm: "80px", lg:"110px" },
          marginLeft: "40px",
          background:
            "linear-gradient(to bottom, hsl(235, 23%, 18%) 50%,  hsl(236, 21%, 26%) 50%)",
          zIndex: "9999",
          position: "relative",
          bottom:{lg:"80px"},
          boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.5)",
          marginTop:{lg:"5%", xl:"0px"},
          animation: "flip-bottom 250ms easte-out 250ms"
        }}
      >
        <Box
          className="semiCircle"
          sx={{
            width: "5.4px",
            height: "5px",
            borderColor: "hsl(234, 17%, 12%)",
            backgroundColor: "black",
            borderTopLeftRadius: "100%",
            borderBottomLeftRadius: "100%",
            position: "absolute",
            left: { xs: "68px", sm: "88px", lg:"119px" },
            top: { xs: "27px", sm: "37px", lg:"52px" },
            transform: "translateX(-50%)",
          }}
        />
        <Box
          className="semiCircle"
          sx={{
            width: "5.4px",
            height: "5px",
            borderColor: "hsl(234, 17%, 12%)",
            backgroundColor: "black",
            borderTopRightRadius: "100%",
            borderBottomRightRadius: "100%",
            position: "relative",
            left: "1px",
            top: { xs: "27px", sm: "37px", lg:"52px" },
            transform: "translateX(-50%)",
          }}
        />
        <Box
          className="borderTop"
          sx={{
            width: "100%",
            height: { xs: "2px", sm: "4px" },
            background:
              "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.3), transparent)",
            position: "relative",
            top: { xs: "23px", sm: "34px", lg:"48px" },
            zIndex: "1000",
          }}
        />
        <Box
            className="number"
            sx={{
            fontFamily: "bold",
            zIndex: "999",
            marginTop: "15px",
            fontSize: { xs: "34px", sm:"49px", lg:"74px" },
            backgroundImage:
              "linear-gradient(356deg, rgba(251, 96, 135, 1) 33%, rgb(103, 42, 57) 95%)",
            color: "transparent",
            display: "flex",
            bottom: {xs:"15.5px", sm:"16px",lg:"19px"},
            position: "relative",
            justifyContent:"center",
          }}
        >
              {timeRemaining}
        </Box>
      </Box>
    </>
  );
}

export default TimerTest;
