import React from "react";
import PunormiloniCommittee from "../CommitteeOfPunorMiloni/PunormiloniCommittee";
import AboutHasania from "./AboutHasania";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box>
      <AboutHasania />
      <PunormiloniCommittee />
    </Box>
  );
};

export default About;
