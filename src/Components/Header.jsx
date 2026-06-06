import React from "react";
import { Email, Settings, Transform } from "@mui/icons-material";
import { Box, Typography, Button, Link } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import img from "../assets/logo.png"; 
import PersonIcon from "@mui/icons-material/Person"; 
import MenuBookIcon from "@mui/icons-material/MenuBook"; 

const Header = () => {
  return (
   <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: 2,

    background: "rgba(15, 23, 42, 0.8)",
    backdropFilter: "blur(12px)",

    border: "1px solid rgba(255,255,255,0.08)",

    borderRadius: "16px",

    position: "sticky",
    top: 15,
    zIndex: 1000,
  }}
><Box
  component="img"
  src={img}
  alt="logo"
  sx={{
    height: 40,
    transition: "transform 0.5s ease",
    "&:hover": {
      transform: "rotate(360deg) scale(1.1)",
    },
  }}
/>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
       <Button
  href="#works"
  sx={{
    color: "#CBD5E1",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 500,
    borderRadius: "12px",
    px: 2,
    py: 1,
    transition: "all 0.3s ease",

    "&:hover": {
      background:
        "linear-gradient(135deg, #38BDF8 0%, #8B5CF6 100%)",
      color: "#FFFFFF",
      transform: "translateY(-3px)",
      boxShadow: "0 8px 20px rgba(56,189,248,0.25)",
    },
  }}
>
  Works
</Button>
        <Button
         href="/AkankshaYadav_Resume.pdf"
          sx={{
  color: "#CBD5E1",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  borderRadius: "12px",
  px: 2,
  py: 1,
  transition: "all 0.3s ease",

  "&:hover": {
    background:
      "linear-gradient(135deg, #38BDF8 0%, #8B5CF6 100%)",
    color: "#FFFFFF",
    transform: "translateY(-3px)",
    boxShadow: "0 8px 20px rgba(56,189,248,0.25)",
  },
}}
          startIcon={<PersonIcon />}
          color="inherit"
        >
          Resume
        </Button>
        <Box
  sx={{
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,

    color: "#CBD5E1",

    borderRadius: "12px",
    padding: "10px 16px",

    transition: "all 0.3s ease",

    
  "&:hover": {
    background:
      "linear-gradient(135deg, #38BDF8 0%, #8B5CF6 100%)",
    color: "#FFFFFF",
    transform: "translateY(-3px)",
    boxShadow: "0 8px 20px rgba(56,189,248,0.25)",
  },
  }}
>
          <Email fontSize="small" />
          <Link href="mailto:gy100224@gmail.com" sx={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="body2" color="white">
              gy100224@gmail.com
            </Typography>
          </Link>
        </Box>
        <Settings fontSize="small" />
      </Box>
    </Box>
  );
};
export default Header;
