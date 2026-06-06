import { Box, Typography, Paper } from "@mui/material";
import Header from "./Header";
import ProfileImage from "./ProfileImage";
import SocialLinks from "./SocialLinks";
import ContactButton from "./ContactButton";

import profilePic from "../assets/profile.png"; // Adjust the path as necessary
import SkillsSection from "./SkillsSection";
import AboutMeSection from "./AboutMeSection";
import MyWorksSection from "./MyWorksSection";
import ResumeSection from "./ResumeSection";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "linear-gradient(135deg, #0F172A 0%, #111827 100%)", minHeight: "100vh", py: 4 }}>
      <Paper
        elevation={0}
        sx={{
          maxWidth: 1200,
          mx: "auto",
          p: 4,
          backgroundColor: "#1E293B",
          borderRadius: 3,
        }}
      >
        <Header />
        <Box sx={{ display: "flex", flexDirection: "row", gap: 4, mt: 2 }}>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "top",
              }}
            >
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "poppins",
                    mt: 2,
                    color: "#F8FAFC",

background:
  "linear-gradient(90deg, #38BDF8, #8B5CF6)",

WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",

textShadow: "0px 0px 25px rgba(56,189,248,0.25)",
                  }}
                >
                  Akanksha Yadav
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="black"
                  sx={{
                    mt: 1,
                    fontSize: "1.9rem",
color: "#38BDF8",
                    letterSpacing: "1px",
                    fontFamily: "Italianno, cursive",
                  }}
                >
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Full Stack Developer",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "Frontend Developer",
                      1000,
                      "Backend Developer",
                      1000,
                      "UI/UX Designer",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "1em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    maxWidth: 400,
                    color: "#CBD5E1",
                    wordSpacing: "1.5px",
                    fontWeight: 500,
                  }}
                >
                  I'm a passionate full-stack developer with a knack for
                  creating seamless user experiences. I specialize in building
                  robust applications using modern technologies and frameworks.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <ContactButton />
                </Box>
              </Box>

              <img
                src={profilePic}
                style={{
                  maxHeight: "400px",
filter:
  "drop-shadow(0px 15px 35px rgba(139,92,246,0.35))",                }}
                alt="Profile Picture"
              />
            </Box>
            <ProfileImage />
          </Box>
        </Box>
        <SkillsSection />
        <AboutMeSection />
        <MyWorksSection />
        <ResumeSection />
      </Paper>
    </Box>
  );
};

export default Home;
