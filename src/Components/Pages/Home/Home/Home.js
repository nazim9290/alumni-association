import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import Mission from "../Mission/Mission";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import About from "../About/About";
import Message from "../Message/Message";
import HomeBlog from "../HomeBlog/HomeBlog";

const Home = () => {
  return (
    <div>
      <Carousel />
      <UpcomingEvents />
      <Mission />
      <About></About>
      <Message></Message>
      <HomeBlog></HomeBlog>
    </div>
  );
};

export default Home;
