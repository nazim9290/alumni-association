import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import "./Mission.css";

const Mission = () => {
  const [mission, setMission] = useState([]);

  useEffect(() => {
    fetch("./mission.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMission(data));
  }, []);
  return (
    <Container sx={{ my: 10 }}>
      <h1 data-aos="zoom-out-down" data-aos-duration="1000">
        Our Mission & Vision
      </h1>
      <Grid container spacing={2}>
        {mission.map((ms, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={4}
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Card sx={{ height: "100%" }}>
              <CardActionArea className="image-box">
                <CardMedia
                  component="img"
                  height="140"
                  image={ms.img}
                  alt={ms.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {ms.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ms.description}
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

export default Mission;
