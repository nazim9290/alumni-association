import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import "./Member.css";

const Member = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("https://calm-escarpment-64359.herokuapp.com/allMembers")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <Typography variant="h3" gutterBottom component="div">
        Our Awesome Creative Team Member
      </Typography>
      <Grid
        container
        spacing={{ xs: 0.5, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {members.map((member, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Card>
              <Box>
                <img height="300px" src={member.picture} alt="" />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {member.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member?.place} , {member?.position}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dakhil Year - {member.examYear}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <a href={`mailto:${member.examYear}`}>{member.email}</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Blood Group - {member.blood}
                </Typography>
              </CardContent>

              <Box className="team-social-icons">
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <a href={`tel:${member.phone}`}>
                    <i className="fas fa-phone-square-alt"></i>
                  </a>
                  <a href={member.facebookUrl} target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={member.facebookUrl} target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href={member.facebookUrl} target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </Stack>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Member;
