import React from "react";
import { Box, Typography } from "@mui/material";

const ProjectCard = ({ image, alt, description, url }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 3,

        border: "1px solid rgba(255,255,255,0.08)",

        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",

        cursor: "pointer",
        height: 220,
        width: "100%",

        transition: "all 0.4s ease",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(56,189,248,0.2)",
        },

        "&:hover .overlay": {
          transform: "translateY(0)",
        },

        "&:hover img": {
          transform: "scale(1.08)",
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s ease",
        }}
      />

      <Box
        className="overlay"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,

          minHeight: "45%",

          background:
            "linear-gradient(to top, rgba(15,23,42,0.98), rgba(15,23,42,0.85), transparent)",

          color: "#F8FAFC",

          p: 2,

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",

          transform: "translateY(100%)",

          transition: "transform 0.4s ease-in-out",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#38BDF8",
            mb: 0.5,
          }}
        >
          {alt}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#CBD5E1",
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;