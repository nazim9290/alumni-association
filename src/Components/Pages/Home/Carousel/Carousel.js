import React, { useEffect, useState } from "react";
import { data } from "./fronslider";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "./Carousel.css";
import CarouselImg from "./CarouselImg";

const Carousel = () => {
  // const [frontCovers, setFrontCovers] = useState([]);
  SwiperCore.use([Autoplay]);
  SwiperCore.use([Pagination]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/frontCover", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setFrontCovers(data));
  // }, []);

  // console.log(frontCovers);

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={"auto"}
        autoplay={{ delay: 1000 }}
        pagination={{
          clickable: true,
        }}
        centeredSlides
        loop={true}
        className="swiper-container"
      >
        {data.map((data) => (
          <SwiperSlide key={data.name}>
            <CarouselImg data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
