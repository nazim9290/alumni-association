import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "./Advisor.css";
import Typography from "@mui/material/Typography";
import { Paper, Box } from "@mui/material";

const Advisor = () => {
  SwiperCore.use([Autoplay]);
  SwiperCore.use([Pagination]);
  return (
    <div>
      <h1>Advisor</h1>
      <>
        <Swiper
          slidesPerView={2}
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
              <Paper elevation={3}>
                <img
                  height="100%"
                  src="http://nmphsaabd.org/wp-content/uploads/2020/08/minto.jpg"
                  alt="green iguana"
                />
                <Box>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ my: 2 }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </Box>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Advisor;
