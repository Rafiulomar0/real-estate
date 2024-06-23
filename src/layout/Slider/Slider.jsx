import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-gradient-to-l hover:bg-gradient-to-r">
          <img
            src="https://i.ibb.co/fQgz66v/ilse-s75v-LE7bo-Ko-unsplash.jpg"
            loading="lazy"
            className="w-full sm:h-[450px] h-[250px] brightness-50"
          />
          <div className="absolute inset-0 text-center">
            <h2 className="text-6xl text-green-600 pt-12 font-bold">
              "Find Your Place"
            </h2>
            <p className="text-xl font-semibold text-amber-200 w-1/2 mx-auto pt-12">
              Golden fields of wheat swaying in the summer breeze, capturing the
              essence of rural tranquility.
            </p>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/qrRgcNP/werner-sevenster-Ju-P0-ZG0-UNi0-unsplash.jpg"
            loading="lazy"
            className="w-full sm:h-[450px] h-[250px] brightness-50"
          />
          <div className="absolute inset-0 text-center">
            <h2 className="text-6xl text-green-600 pt-12 font-bold">
              "Find Your Place"
            </h2>
            <p className="text-xl font-semibold text-amber-200 w-1/2 mx-auto pt-12">
              The sprawling sand dunes of the Sahara Desert, stretching
              endlessly under the scorching sun.
            </p>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/7KgGgLn/federico-respini-s-Yffw0-LNr7s-unsplash.jpg"
            loading="lazy"
            className="w-full sm:h-[450px] h-[250px] brightness-50"
          />
          <div className="absolute inset-0 text-center">
            <h2 className="text-6xl text-green-600 pt-12 font-bold">
              "Find Your Place"
            </h2>
            <p className="text-xl font-semibold text-amber-200 w-1/2 mx-auto pt-12">
              Morning mist over the serene lakes of Banff National Park, a true
              paradise for nature lovers.
            </p>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
