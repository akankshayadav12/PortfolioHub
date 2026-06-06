import { Box, Typography, Paper, Button } from "@mui/material";
import profilePic from "../assets/profile1.png"; // Adjust the path as necessary
const SkillsSection = () => {

  const skillStyle = {
    px: 2,
    py: 1,
    borderRadius: 2,
    background: "rgba(56,189,248,0.12)",
    color: "#F8FAFC",
    border: "1px solid rgba(56,189,248,0.25)",
    fontWeight: 600,
    transition: "all 0.3s ease",

    "&:hover": {
      transform: "translateY(-3px)",
      background: "rgba(56,189,248,0.25)",
    },
  };

  const backendSkillStyle = {
    px: 2,
    py: 1,
    borderRadius: 2,
    background: "rgba(139,92,246,0.12)",
    color: "#F8FAFC",
    border: "1px solid rgba(139,92,246,0.25)",
    fontWeight: 600,
    transition: "all 0.3s ease",

    "&:hover": {
      transform: "translateY(-3px)",
      background: "rgba(139,92,246,0.25)",
    },
  };
  return (
 <Box sx={{ mt: 6 }}>
  {/* Heading */}
  <Typography
    variant="h4"
    fontWeight="bold"
    sx={{
      color: "#F8FAFC",
      fontFamily: "Poppins",
    }}
  >
    My Top Skills
  </Typography>

  <Typography
    variant="subtitle1"
    sx={{
      color: "#CBD5E1",
      mt: 1,
    }}
  >
    What I Do
  </Typography>

  <Box
    sx={{
      width: 80,
      height: 4,
      mt: 1,
      borderRadius: 2,
      background:
        "linear-gradient(90deg, #38BDF8 0%, #8B5CF6 100%)",
    }}
  />

  {/* Main Card */}
  <Paper
    elevation={0}
    sx={{
      backgroundColor: "#1E293B",
      mt: 4,
      p: 4,
      borderRadius: 4,
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.25)",

      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      width: "74%",
      ml: "10%",
    }}
  >
    {/* Left Side */}
    <Box sx={{ maxWidth: "55%" }}>
      {/* FRONTEND */}
      <Typography
        variant="h6"
        fontWeight="bold"
        color="white"
      >
        FRONTEND
      </Typography>

      <Typography
        color="#CBD5E1"
        sx={{ mt: 1 }}
      >
        I build client-side applications with modern
        features like SPA and maintain semantic coding
        style among other best practices for SEO
        optimisation.
      </Typography>

      {/* Frontend Skills */}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 3,
        }}
      >
        {/* HTML */}
        <Box sx={skillStyle}>HTML</Box>

        {/* CSS */}
        <Box sx={skillStyle}>CSS</Box>

        {/* JavaScript */}
        <Box sx={skillStyle}>JAVASCRIPT</Box>

        {/* React */}
        <Box sx={skillStyle}>REACT JS</Box>

        {/* Tailwind */}
        <Box sx={skillStyle}>TAILWIND CSS</Box>

        {/* MUI */}
        <Box sx={skillStyle}>MATERIAL UI</Box>
      </Box>

      {/* BACKEND */}
      <Typography
        variant="h6"
        fontWeight="bold"
        color="white"
        sx={{ mt: 4 }}
      >
        BACKEND
      </Typography>

      <Typography
        sx={{
          mt: 1,
          color: "#CBD5E1",
        }}
      >
        I build scalable and maintainable backend
        applications using cutting-edge technologies.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 3,
        }}
      >
        <Box sx={backendSkillStyle}>NODE JS</Box>
        <Box sx={backendSkillStyle}>MONGODB</Box>
        <Box sx={backendSkillStyle}>EXPRESS JS</Box>
        <Box sx={backendSkillStyle}>SQL</Box>
      </Box>

     <Button
  variant="contained"
  component="a"
  href="https://github.com/akankshayadav12"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    mt: 4,
    width: 120,
    height: 120,
    borderRadius: "50%",
    fontWeight: "bold",
    background:
      "linear-gradient(135deg, #38BDF8 0%, #8B5CF6 100%)",
    boxShadow:
      "0 10px 25px rgba(56,189,248,0.35)",
    transition: "all 0.3s ease",

    "&:hover": {
      background: "#0F172A",
      color: "#38BDF8",
      border: "2px solid #38BDF8",
      transform: "scale(1.08) translateY(-4px)",
    },
  }}
>
  SEE MY
  <br />
  WORKS
</Button>
    </Box>

    {/* Right Side Image */}
    <Box
      component="img"
      src={profilePic}
      alt="skills illustration"
      sx={{
        maxHeight: 320,

        filter:
          "drop-shadow(0px 15px 35px rgba(56,189,248,0.35))",
      }}
    />
  </Paper>
</Box>
  );
};

export default SkillsSection;
