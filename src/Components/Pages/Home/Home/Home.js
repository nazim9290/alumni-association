import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import Mission from "../Mission/Mission";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Carousel />
      <UpcomingEvents />
      <Mission />
    </div>
  );
};

export default Home;
