import { Box } from "@mui/material";
import React from "react";

import PunormiloniCommittee from "../CommitteeOfPunorMiloni/PunormiloniCommittee";
import AboutHasania from "./AboutHasania";
import NavBar from "./../../../Shared/NavBar/Navbar";

const About = () => {
  return (
    <Box id="About">
      <NavBar />
      <AboutHasania />
      <PunormiloniCommittee />
    </Box>
  );
};

export default About;
