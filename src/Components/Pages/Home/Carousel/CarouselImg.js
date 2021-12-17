import React from "react";
import Box from "@mui/material/Box";
import "./Carousel.css";

const styles = {
  color: "#fff",
  position: "absolute",
  top: "75%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const CarouselImg = ({ data }) => {
  return (
    <div>
      <img src={data.img} alt="" />
      <Box
        component="h3"
        sx={{ p: 2, typography: "body1", fontWeight: 900 }}
        className="carousel-img"
      >
        {data.title}
      </Box>
    </div>
  );
};

export default CarouselImg;
