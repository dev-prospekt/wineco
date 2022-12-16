import HomePage from "../components/homePage";
import AboutUs from "../components/aboutUs";
import WineList from "../components/wineList";
import WineShop from "../components/wineShop";
import OurBrands from "../components/ourBrands";
import Blog from "../components/blog";
import ContactUs from "../components/contactUs";

import Head from 'next/head'
import React, { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const swiperRef = useRef(null);

  const toSlide = (num) => {
    swiperRef.current?.swiper.slideTo(num);
  };

  useEffect(() => {
    $('a#navLink').on('click', function() {
      toSlide($(this).attr('data-key'))

      $(".fullscreenmenu").removeClass('-translate-y-0')
      $(".fullscreenmenu").addClass('-translate-y-full')
    })
  })

  return (
    <>
      <Head>
        <title>Wineco</title>
      </Head>
      
      <Swiper modules={[EffectFade, Mousewheel, Pagination]} ref={swiperRef} 
        effect="fade" speed={700}
        direction="vertical" mousewheel={true} allowTouchMove={false}
        pagination
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
    </>
  )
}
