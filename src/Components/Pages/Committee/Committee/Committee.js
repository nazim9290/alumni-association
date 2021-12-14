import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from "react";
import "./Committee.css";
const Committee = () => {
  return (
    <Container sx={{my:5}}>
      <Box component="h2" sx={{ flexGrow: 1 }}>Committee</Box>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(8)).map((_, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <div class="our-team">
              <div class="pic">
                <img src="https://i.ibb.co/8x9xK4H/team.jpg" alt=""/>
              </div>
              <div class="team-content">
                <h3 class="title">Team 1</h3>
                <span class="post">Inhaber & Geschäftsführer</span>
              </div>
              <ul class="social">
                <li>
                  <a href="#" target="_blank" class="fab fa-facebook"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-twitter"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-google-plus"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-linkedin"></a>
                </li>
              </ul>
            </div>

          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Committee;
