import React from "react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
// import Swiper core and required modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid } from "@mui/material";

const ExecutiveMember = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <h1>Executive Committee</h1>
      <Grid
        container
        spacing={{ xs: 0.5, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <Card>
              <CardActionArea>
                <img
                  src="http://nmphsaabd.org/wp-content/uploads/2020/08/mehedi.png"
                  width="100%"
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
