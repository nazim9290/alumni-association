import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
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
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {members.map((member, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Card>
              <Box sx={{ height: "300px" }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image="https://i.ibb.co/Bg7h9Qz/nazim.jpg"
                  alt="green iguana"
                />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>

              <Box className="team-social-icons">
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <i class="fas fa-phone-square-alt"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook"></i>

                  <i className="fab fa-linkedin"></i>
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
