
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
import bannerCover from '../../assets/banner-cover.jpg'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Facebook, Linkedin, Twitter } from 'lucide-react';


const Banner = () => {
  return (
    < >
      <div className='max-w-screen-xl mx-auto'>
        <div>
          <div
            className="hero h-[500px] mb-10"
            style={{
              backgroundImage:
                `url(${bannerCover})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl text-white font-bold">Welcome to UtiPay BD</h1>
                <p className="mb-5 text-white">
                  A trusted platform for managing and paying your essential utility bills with ease. Experience secure, streamlined, and efficient bill payments all in one place.
                </p>
                <div className='flex justify-center gap-4'>
                  <a href="https://www.facebook.com/mahmudul.islam.sohan.2025/"><Facebook size={32} color="white" fill='white' /></a>
                  <a href=""><Linkedin size={32} color="white" fill='white' /></a>
                  <a href=""><Twitter size={32} color="white" fill='white' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
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