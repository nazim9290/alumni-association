import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from "swiper";
import "./Carousel.css";

const Carousel = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Swiper
        spaceBetween={50}
        autoplay={{ delay: 100000 }}
        slidesPerView="auto"
        loop={true}
        className="swiper-container"
      >
        <SwiperSlide>
          <div>
            <img
              className="swiper-slide"
              src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/261331231_4972721599404773_3144057603892424825_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeG2PxMxNQ8EoyhM-YIu9nyLm7uKE3PJaHubu4oTc8loe8Wqij-6-1BfeGdCgAPE3Ni1FiUJVtB2IdFVgsLERsA0&_nc_ohc=aEiD5m2DVLwAX9fMkWJ&_nc_ht=scontent-nrt1-1.xx&oh=ca106815e641b5d0f04602189b5aeaf7&oe=61B2A7C0"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
