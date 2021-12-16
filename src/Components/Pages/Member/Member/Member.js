import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import "./Member.css";

const Member = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <div class="team-wrap">
              <div class="team-member text-center">
                <div class="team-img">
                  <img
                    src="http://deothemes.com/envato/enigma/html/img/team_2.jpg"
                    alt=""
                  />
                  <div class="overlay">
                    <div class="team-details text-center">
                      <p>
                        Our web design team will spend time with our digital
                        marketing team.
                      </p>
                      <div class="socials mt-20">
                        <a href="#">
                          <i class="fab fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-google-plus"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="team-title">Steve Roberts</h6>
                <span>Photographer</span>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Member;
