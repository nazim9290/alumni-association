import React from "react";
import "./Events.css";
import Grid from "@mui/material/Grid";

const Events = () => {
  return (
    <div class="section-title">
      <h1>
        <span>Upcoming Events</span>
      </h1>
      <Grid container spacing={2}>
        <div class="projcard-container">
          <div class="projcard projcard-blue">
            <div class="projcard-innerbox">
              <Grid item xs={12}>
                <img
                  class="projcard-img"
                  src="https://picsum.photos/800/600?image=1041"
                />
              </Grid>
              <Grid item xs={12}>
                <div class="projcard-textbox">
                  <div class="projcard-title">Card Title</div>
                  <div class="projcard-subtitle">
                    This explains the card in more detail
                  </div>
                  <div class="projcard-bar"></div>
                  <div class="projcard-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                  <div class="projcard-tagbox">
                    <span class="projcard-tag">HTML</span>
                    <span class="projcard-tag">CSS</span>
                  </div>
                </div>
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Events;
