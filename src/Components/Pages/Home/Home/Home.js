import React from "react";
import "./Home.css";

import Mission from "../Mission/Mission";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import About from "../About/About";
import Message from "../Message/Message";
import HomeBlog from "../HomeBlog/HomeBlog";
import Carousel from "../Carousel/Carousel";
import PopUp from "../PopUp/PopUp";

const Home = () => {
  return (
    <div>
      <PopUp />
      <Carousel />
      <UpcomingEvents />
      <Mission />
      <About></About>
      <Message></Message>
      <HomeBlog></HomeBlog>
      <img
        width="100%"
        src="https://i.ibb.co/2M2d9mw/Screenshot-5.png"
        alt=""
      />
    </div>
  );
};

export default Home;
