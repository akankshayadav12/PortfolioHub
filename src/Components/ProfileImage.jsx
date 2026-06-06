import React from "react";
import { LinkedIn, GitHub, Twitter } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const SocialLinks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        mt: 2,
      }}
    >
      <IconButton
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/akankshayadav10/",
            "_blank"
          )
        }
        sx={{
          color: "#CBD5E1",
          transition: "all 0.3s ease",

          "&:hover": {
            color: "#38BDF8",
            transform: "translateX(5px) scale(1.1)",
            backgroundColor: "rgba(56,189,248,0.12)",
          },
        }}
      >
        <LinkedIn fontSize="large" />
      </IconButton>

      <IconButton
        onClick={() =>
          window.open(
            "https://github.com/akankshayadav12",
            "_blank"
          )
        }
        sx={{
          color: "#CBD5E1",
          transition: "all 0.3s ease",

          "&:hover": {
            color: "#8B5CF6",
            transform: "translateX(5px) scale(1.1)",
            backgroundColor: "rgba(139,92,246,0.12)",
          },
        }}
      >
        <GitHub fontSize="large" />
      </IconButton>

      <IconButton
        onClick={() =>
          window.open(
            "https://twitter.com/",
            "_blank"
          )
        }
        sx={{
          color: "#CBD5E1",
          transition: "all 0.3s ease",

          "&:hover": {
            color: "#38BDF8",
            transform: "translateX(5px) scale(1.1)",
            backgroundColor: "rgba(56,189,248,0.12)",
          },
        }}
      >
        <Twitter fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default SocialLinks;