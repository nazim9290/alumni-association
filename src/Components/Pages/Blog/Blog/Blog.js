import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Blog = () => {
  return (
    <Container>
      <h1>Blog Post</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://scontent.fkix2-1.fna.fbcdn.net/v/t31.18172-8/16991580_264212604025252_5273015861084033205_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=825194&_nc_eui2=AeFB-oaanLd9V61w6NruGI9ro8rAGTJ50L-jysAZMnnQvxXpOtI5eP1qf53Z74fVJSu91GYwukCZ4Pi9xy9Y-_vb&_nc_ohc=5B-ZDM1iT6cAX-OkLQC&_nc_ht=scontent.fkix2-1.fna&oh=96f2bd03a4665e14ddd94df3a7438972&oe=61D1EB09"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
