import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slider_1 from '../../assets/slider-1.jpg'
import slider_2 from '../../assets/slider-2.jpg'
import slider_3 from '../../assets/slider-3.jpg'
import slider_4 from '../../assets/slider-4.jpg'
import slider_5 from '../../assets/slider-5.jpg'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
  return (
    < >
      <div className='max-w-screen-xl mx-auto'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[350px]"
        >
          <SwiperSlide><img className="h-full w-full object-contain" src={slider_1} alt="" /></SwiperSlide>
          <SwiperSlide><img className="h-full w-full object-contain" src={slider_2} alt="" /></SwiperSlide>
          <SwiperSlide><img className="h-full w-full object-contain" src={slider_3} alt="" /></SwiperSlide>
          <SwiperSlide><img className="h-full w-full object-contain" src={slider_4} alt="" /></SwiperSlide>
          <SwiperSlide><img className="h-full w-full object-contain" src={slider_5} alt="" /></SwiperSlide>

        </Swiper>
      </div>
    </>
  );
};

export default Banner;