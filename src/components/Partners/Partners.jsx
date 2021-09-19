import React from "react";
import "./Partners.css";
import yoshlarAgentligiImg from "../../assets/images/yoshlar-logo.svg";
import gerbLogo from "../../assets/images/samarqand-gerb.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/pagination/pagination.min.css";

// install Swiper modules
SwiperCore.use([Pagination]);

const Partners = () => {
  const partnersInfo = [
    {
      partnersLogo: yoshlarAgentligiImg,
    },
    {
      partnersLogo: gerbLogo,
    },
    {
      partnersLogo: yoshlarAgentligiImg,
    },
    {
      partnersLogo: gerbLogo,
    },
  ];

  return (
    <React.Fragment>
      <div className="partners">
        <div className="container">
          <p className="partners__subtitle">Hamkorlar</p>
          <h1 className="partners__title">Bizning hamkorlarimiz</h1>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 2,
              },
              650: {
                slidesPerView: 3,
              },
              960: {
                slidesPerView: 4,
              },
            }}
          >
              {partnersInfo ? partnersInfo.map((item, i) => (
                  <SwiperSlide key={i} className="partners__card">
                      <img className="partners__logo" src={item.partnersLogo} alt="partners-logo" />
                  </SwiperSlide>
              )) : ""}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Partners;
