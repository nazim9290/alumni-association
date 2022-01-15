import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "./Advisor.css";
import Typography from "@mui/material/Typography";
import { Box, Card, CardContent } from "@mui/material";

const Advisor = () => {
  SwiperCore.use([Autoplay]);
  SwiperCore.use([Pagination]);
  return (
    <div>
      <h1>Advisor</h1>
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          autoplay={{ delay: 1000 }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {Array.from(Array(12)).map((_, index) => (
            <SwiperSlide key={index}>
              <Card>
                <Box>
                  <img
                    src="http://nmphsaabd.org/wp-content/uploads/2020/08/minto.jpg"
                    alt=""
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    hello
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam modi iste illo iusto pariatur perspiciatis
                    architecto, adipisci vero dolore necessitatibus fuga numquam
                    <br />
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Advisor;
