import React from "react";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import HomeBlog from "../HomeBlog/HomeBlog";
import Message from "../Message/Message";
import Mission from "../Mission/Mission";
import PopUp from "../PopUp/PopUp";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import "./Home.css";


const Home = () => {
  return (
    <section id="home">
      <PopUp />
      <Carousel />
      <UpcomingEvents />
      <Mission />
      <About></About>
      <Message></Message>
      <HomeBlog></HomeBlog>
      <h4>Sponsor </h4>
      <img
        width="100%"
        src="https://i.ibb.co/2M2d9mw/Screenshot-5.png"
        alt=""
      />
    </section>
  );
};

export default Home;
