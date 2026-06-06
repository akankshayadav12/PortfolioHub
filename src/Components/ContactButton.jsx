import React from "react";
import { Button } from "@mui/material";

const ContactButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "50%",
        width: 100,
        height: 100,

        background:
          "linear-gradient(135deg, #38BDF8 0%, #8B5CF6 100%)",

        color: "#F8FAFC",

        fontWeight: 700,
        textTransform: "none",
        fontSize: "1rem",

        boxShadow: "0 8px 25px rgba(56, 189, 248, 0.35)",

        transition: "all 0.35s ease",

        "&:hover": {
          background: "#1E293B",
          color: "#38BDF8",

          border: "2px solid #38BDF8",

          transform: "scale(1.08) translateY(-4px)",

          boxShadow: "0 12px 30px rgba(139, 92, 246, 0.4)",
        },
      }}
    >
      let's
      <br />
      talk
    </Button>
  );
};

export default ContactButton;