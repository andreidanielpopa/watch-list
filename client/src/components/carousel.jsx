import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarruselSeries = ({ data }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
        spaceBetween={10}
        slidesPerView={8}
        loop={true} 
        autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
        className="my-swiper"
      >
        {data.map((serie) => (
          <SwiperSlide key={serie.id} className="p-2">
            <a href="#">
                <img
                src={serie.poster_path}
                alt={serie.title}
                className="w-full h-72 object-cover rounded-lg"
                />
                <div className="p-2 bg-opacity-75 text-center mt-2">
                <h2 className="text-sm text-white font-semibold">{serie.title}</h2>
                </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarruselSeries;
