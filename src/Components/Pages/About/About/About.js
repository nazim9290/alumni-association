import { Box } from "@mui/material";
import React from "react";
import PunormiloniCommittee from "../CommitteeOfPunorMiloni/PunormiloniCommittee";
import AboutHasania from "./AboutHasania";

const About = () => {
  return (
    <Box id="About">
      <AboutHasania />
      <PunormiloniCommittee />
    </Box>
  );
};

export default About;
