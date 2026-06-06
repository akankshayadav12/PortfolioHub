// ResumeSection.jsx

import { Box, Typography, Button } from "@mui/material";

const ResumeSection = () => {
  return (
    <Box
      sx={{
        my: 8,
        mx: "auto",
        width: "900px",
        maxWidth: "90%",
        p: 4,
        backgroundColor: "#1E293B",
        borderRadius: 4,
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        flexWrap: "wrap",
        transition: "all 0.4s ease",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 25px 50px rgba(56,189,248,0.12)",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1rem", sm: "1.3rem" },
          color: "#F8FAFC",
          textAlign: "center",
          fontFamily: "Poppins",
        }}
      >
        My Resume 👇
      </Typography>

      <Button
        variant="contained"
        component="a"
        href="/AkankshaYadav_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mt: 2,
          width: 120,
          height: 120,
          borderRadius: "50%",
          fontWeight: "bold",
          fontSize: 14,
          color: "#FFFFFF",
          background:
            "linear-gradient(135deg, #38BDF8 0%, #8B5CF6 100%)",
          boxShadow:
            "0 10px 25px rgba(56,189,248,0.35)",
          transition: "all 0.35s ease",

          "&:hover": {
            background: "#0F172A",
            color: "#38BDF8",
            border: "2px solid #38BDF8",
            transform: "scale(1.08) translateY(-4px)",
            boxShadow:
              "0 15px 35px rgba(139,92,246,0.4)",
          },
        }}
      >
        MY
        <br />
        RESUME
      </Button>
    </Box>
  );
};

export default ResumeSection;