import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,A11y,Pagination  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

const Carrusel = ({ data,title,info }) => {
  return (
    <div className="relative w-full overflow-hidden px-24 py-4">
      <div className="flex items-center space-x-4 p-2">
        <p className="text-3xl text-white font-semibold pb-2">{title}</p>
          <div className="flex space-x-2">
            <div className={`custom-prev${info} w-fit border-yellow-400 cursor-pointer border-2 text-white rounded`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className={`custom-next${info} w-fit border-yellow-400 cursor-pointer border-2 text-white rounded`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
      </div>  
      <Swiper
        modules={[Navigation, Pagination, A11y ]}
        spaceBetween={10}
        slidesPerView={8}
        navigation={{
          nextEl: `.custom-next${info}`,
          prevEl: `.custom-prev${info}`,
        }}
        pagination={{
          clickable: true,
        }}
        className="my-swiper"
      >
        {data.map((object) => (
          <SwiperSlide key={object.id} className="p-2">
            <div className='transition-transform duration-300 transform hover:scale-105'>
              <a href={object.id}>
                  <img
                  src={object.poster_path}
                  alt={object.title}
                  className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="p-2 text-center mt-2">
                  <p className="text-base text-white font-medium pb-6">{object.title}</p>
                  </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrusel;
