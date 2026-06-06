import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import WorksCategory from "./WorksCategory";

import img1 from "../assets/web1.png";
import img2 from "../assets/web2.png";

const MyWorksSection = () => {
  return (
    
   <Box
   id="works"
  sx={{
    my: 8,
    mx: "auto",
    width: "900px",
    maxWidth: "100%",

    p: 4,

    backgroundColor: "#1E293B",

    borderRadius: 4,

    border: "1px solid rgba(255,255,255,0.08)",

    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",

    display: "flex",
    flexDirection: "column",
    gap: 2,

    transition: "all 0.4s ease",

    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 25px 50px rgba(56,189,248,0.12)",
    },
  }}
>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "Poppins",
          color: "#F8FAFC",
          mb: 1,
        }}
      >
        My Works
      </Typography>

      <Typography
        sx={{
          color: "#CBD5E1",
          fontWeight: 500,
        }}
      >
        Few Of My Past And Present Projects
      </Typography>

      <Divider
  sx={{
    width: 80,
    height: 4,
    mt: 2,
    mb: 4,
    borderRadius: "10px",
    background:
      "linear-gradient(90deg, #38BDF8 0%, #8B5CF6 100%)",
  }}
/>
      <WorksCategory
        sx={{
          color: "#FFFFFF",
          fontSize: "20px",
        }}
        
      projects={[
  {
    image: img2,
    alt: "STRIVORA AI (React, Node.js, MongoDB, OpenAI API)",
    url: "https://strivora-ai-1.onrender.com",
  },
  {
    image: img1,
    alt: "HISTORY CARD (React, Node.js, MongoDB)",
    url: "https://history-card5.onrender.com",
  },
]}
      />

    </Box>
  );
};

export default MyWorksSection;