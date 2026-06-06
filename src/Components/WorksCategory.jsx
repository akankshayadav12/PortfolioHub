import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import ProjectCard from "./ProjectCard";

const WorksCategory = ({ title, projects = [] }) => {
  return (
    <Box sx={{ mt: 4 }}>
      {title && (
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: "#fff",
          }}
        >
          {title}
        </Typography>
      )}

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
           <ProjectCard
  image={project.image}
  alt={project.alt}
  description={project.description}
  url={project.url}
/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorksCategory;