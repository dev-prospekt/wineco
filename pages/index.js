import HomePage from "../components/homePage";
import AboutUs from "../components/aboutUs";
import WineList from "../components/wineList";
import WineShop from "../components/wineShop";
import OurBrands from "../components/ourBrands";
import Blog from "../components/blog";
import ContactUs from "../components/contactUs";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <Swiper
      modules={[EffectFade, Mousewheel, Pagination, Navigation]} 
      effect="fade"
      speed={800}
      direction="vertical"
      mousewheel={true}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      className="max-w-7xl m-auto"
    >
      <SwiperSlide>
        <HomePage />
      </SwiperSlide>
      <SwiperSlide>
        <AboutUs />
      </SwiperSlide>
      <SwiperSlide>
        <WineList />
      </SwiperSlide>
      <SwiperSlide>
        <WineShop />
      </SwiperSlide>
      <SwiperSlide>
        <OurBrands />
      </SwiperSlide>
      <SwiperSlide>
        <Blog />
      </SwiperSlide>
      <SwiperSlide>
        <ContactUs />
      </SwiperSlide>
    </Swiper>
  )
}
