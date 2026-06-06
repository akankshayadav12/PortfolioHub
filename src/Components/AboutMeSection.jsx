import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import {
  Language,
  Favorite,
  SportsEsports,
} from "@mui/icons-material";

const AboutMeSection = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <Paper
        elevation={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 4,
          borderRadius: 4,
          maxWidth: 900,
          mx: "auto",
          backgroundColor: "#1E293B",
          color: "#F8FAFC",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 15px 35px rgba(56,189,248,0.15)",
          },
        }}
      >
        <Box sx={{ mt: 3, textAlign: "left", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              mb: 3,
            }}
          >
            <Typography sx={{ color: "#CBD5E1" }}>
              <Language
                fontSize="small"
                sx={{
                  mr: 1,
                  color: "#38BDF8",
                  verticalAlign: "middle",
                }}
              />
              Building Porfolio Builder Engine using React.js, Next.js,
              Node.js, Express.js, AI Integration, and MongoDB
            </Typography>

            <Typography sx={{ color: "#CBD5E1" }}>
              <Favorite
                fontSize="small"
                sx={{
                  mr: 1,
                  color: "#8B5CF6",
                  verticalAlign: "middle",
                }}
              />
              Learning Data Analytics and Data Science
            </Typography>

            <Typography sx={{ color: "#CBD5E1" }}>
              <SportsEsports
                fontSize="small"
                sx={{
                  mr: 1,
                  color: "#38BDF8",
                  verticalAlign: "middle",
                }}
              />
              Enjoy playing chess and exploring logical problem-solving
            </Typography>

            <Typography
              fontWeight="bold"
              sx={{
                color: "#F8FAFC",
              }}
            >
              Fun Fact:
              <span
                style={{
                  fontWeight: 400,
                  marginLeft: 5,
                  color: "#CBD5E1",
                }}
              >
                I am a pretty good dancer 🕺
              </span>
            </Typography>
          </Box>

          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              mb: 1,
              color: "#F8FAFC",
            }}
          >
            README
          </Typography>

          <Box
            sx={{
              width: 80,
              height: 4,
              background:
                "linear-gradient(90deg, #38BDF8 0%, #8B5CF6 100%)",
              borderRadius: 2,
              mb: 3,
            }}
          />

          <Typography
            paragraph
            sx={{
              color: "#CBD5E1",
              lineHeight: 1.9,
            }}
          >
            I am a Computer Applications graduate with a strong interest in web
            development and software engineering. I have hands-on experience
            building full-stack applications using React.js, JavaScript,
            Next.js, Node.js, Express.js, and MongoDB through academic and
            personal projects.
            <br />
            <br />
            My technical foundation includes Data Structures and Algorithms
            fundamentals, Object-Oriented Programming, Database Management
            Systems, and Python programming. I enjoy learning new technologies,
            solving logical problems, and developing practical solutions that
            improve user experience.
            <br />
            <br />
            Through my projects, I have gained experience in frontend
            development, backend API development, authentication, database
            integration, responsive UI design, and deployment. I am
            continuously expanding my skills and looking for opportunities to
            contribute to real-world software projects while growing as a
            developer.
          </Typography>

          <Typography
            paragraph
            sx={{
              color: "#CBD5E1",
              lineHeight: 1.9,
            }}
          >
            Beyond coding, I enjoy playing chess, exploring new technologies,
            learning about Data Analytics and Data Science, and staying updated
            with industry trends. I also enjoy dancing and participating in
            activities that encourage creativity and continuous learning.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutMeSection;