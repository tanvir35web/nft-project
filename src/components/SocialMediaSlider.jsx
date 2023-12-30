import React from "react";
import "./SocialMediaSliderStyle.css";
import facebook from "../assets/Social Logo/Facebook.png";
import twitter from "../assets/Social Logo/Twitter.png";
import instagram from "../assets/Social Logo/Instagram.png";
import linkedIn from "../assets/Social Logo/LinkedIn.png";
import snapchat from "../assets/Social Logo/Snapchat.png";
import youtube from "../assets/Social Logo/YouTube.png";
import apple from "../assets/Social Logo/Apple.png";
import skype from "../assets/Social Logo/Skype.png";
import dribble from "../assets/Social Logo/Dribble.png";
import telegram from "../assets/Social Logo/Telegram.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function SocialMediaSlider() {
  
  return (
    <div className="sliderLogoContainer">
      <div className="socialMedia">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
      slidesPerView={6.3}

          grabCursor={true}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={facebook} alt="social media icon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={twitter} alt="social media icon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={instagram} alt="social media icon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={linkedIn} alt="social media icon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={snapchat} alt="social media icon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={youtube} alt="social media icon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={apple} alt="social media icon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={skype} alt="social media icon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dribble} alt="social media icon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={telegram} alt="social media icon" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
