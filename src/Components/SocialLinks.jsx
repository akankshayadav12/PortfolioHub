import React from "react";
import { LinkedIn, GitHub, Twitter } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const SocialLinks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        mt: 2,
        position: "absolute",
        left: 24,
        top: "40%",
      }}
    >
      <IconButton>
  <LinkedIn />
</IconButton>

      <IconButton>
        <GitHub />
      </IconButton>
      
    </Box>
  );
};

export default SocialLinks;
