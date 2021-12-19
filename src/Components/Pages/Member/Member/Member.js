import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import "./Member.css";

const Member = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allMembers")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <Container sx={{ my: 5 }}>
      <Box>Member of the Executive Committee</Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {members.map((member, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <div class="team-wrap">
              <div class="team-member text-center">
                <div class="team-img">
                  <img src={member.img} alt="" />
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
                          <i class="far fa-envelope"></i>
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
