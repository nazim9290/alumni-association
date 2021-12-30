import React, { useEffect, useState } from "react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
// import Swiper core and required modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid, Paper, Box } from "@mui/material";

const ExecutiveMember = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <h1>Executive Committee</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Card>
              <CardActionArea>
                <Box
                  style={{
                    backgroundImage: `url("http://nmphsaabd.org/wp-content/uploads/2020/08/mehedi.png")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "300px",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExecutiveMember;
