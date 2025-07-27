import MovieItem from "../MovieItem/MovieItem";
import {
  MainMoviesBox__Body,
  MainMoviesBox__SliderBox,
} from "./MainMoviesBoxStyles";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const MainMoviesBox = ({ movies }) => {
  return (
    <MainMoviesBox__Body>
      <MainMoviesBox__SliderBox>
        <p>Trending Now</p>
        <Swiper
          slidesPerView={4.2}
          spaceBetween={2}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          style={{
            padding: "2rem 4rem",
            width: "100%",
            overflowX: "none",
          }}
        >
          {movies?.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                <MovieItem key={index} movie={movie} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </MainMoviesBox__SliderBox>
      <MainMoviesBox__SliderBox>
        <p>New Releases </p>
        <Swiper
          slidesPerView={4}
          spaceBetween={2}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          style={{ padding: "2rem 4rem", width: "100%" }}
        >
          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>

          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>

          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>

          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>

          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>
        </Swiper>
      </MainMoviesBox__SliderBox>
      <MainMoviesBox__SliderBox>
        <p>blockbuster</p>
        <Swiper
          slidesPerView={4}
          spaceBetween={2}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          style={{ padding: "2rem 4rem", width: "100%" }}
        >
          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>

          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>

          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>

          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>

          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>
        </Swiper>
      </MainMoviesBox__SliderBox>
      <MainMoviesBox__SliderBox>
        <p>Popular in netflix</p>
        <Swiper
          slidesPerView={4}
          spaceBetween={2}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          style={{ padding: "2rem 4rem", width: "100%" }}
        >
          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>

          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>

          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>

          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>

          <SwiperSlide>
            <MovieItem>Hola</MovieItem>
          </SwiperSlide>
        </Swiper>
      </MainMoviesBox__SliderBox>
    </MainMoviesBox__Body>
  );
};

export default MainMoviesBox;
