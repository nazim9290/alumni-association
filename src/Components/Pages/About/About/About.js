import { Box } from "@mui/material";
import React from "react";
import NavBar from "../../../Shared/NavBar/NavBar";
import PunormiloniCommittee from "../CommitteeOfPunorMiloni/PunormiloniCommittee";
import AboutHasania from "./AboutHasania";

const About = () => {
  return (
    <Box id="About">
      <NavBar/>
      <AboutHasania />
      <PunormiloniCommittee />
    </Box>
  );
};

export default About;
