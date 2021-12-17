import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

import "./Carousel.css";
import { data } from "./FrontSlide";

const Carousel = () => {
  SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);
  return (
    <div>
      <>
        <Swiper
          cssMode={true}
          navigation={true}
          autoplay={{ delay: 1000 }}
          loop={true}
          mousewheel={true}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          centeredSlides
          className="swiper-container"
        >
          {data.map((i) => (
            <SwiperSlide>
              <img src={i.img} alt="" />
              <h4 className="title">{i.title}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
