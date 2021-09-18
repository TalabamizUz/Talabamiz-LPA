import React from "react";
import "./Houses.css";
import filterIcon from "../../assets/images/Filter.svg";
import houseImg1 from "../../assets/images/house1.svg";
import houseImg2 from "../../assets/images/house2.svg";
import houseImg3 from "../../assets/images/house3.svg";
import houseImg4 from "../../assets/images/house4.svg";
import floorIcon from "../../assets/images/floor 1.svg";
import roomIcon from "../../assets/images/house-plan-scale 1.svg";
import bathroomIcon from "../../assets/images/bathtub 1.svg";
import locationIcon from "../../assets/images/map-pin.svg";
import blackArrowIcon from "../../assets/images/black-arrow-right.svg";
import greenArrowIcon from "../../assets/images/green-arrow-right.svg";
import Grid from "@material-ui/core/Grid";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/pagination/pagination.min.css'

// install Swiper modules
SwiperCore.use([Pagination]);

const Houses = () => {

  const housesInfo = [
    {
      houseImage: houseImg1,
      forWhom: "#Qizlar uchun",
      houseTitle: "Ijara uylar",
      housePrice: "600,000 UZS",
      houseFloor: "1 qavat",
      roomAmount: "2 xona",
      showerAmount: "1 dush",
      houseAdress: "Chilonzor tumani, 6-mavze",
      remainingAmount: "2ta",
      customerAmount: "24ta",
    },
    {
      houseImage: houseImg2,
      forWhom: "#Yigitlar uchun",
      houseTitle: "Ijara uylar",
      housePrice: "450,000 UZS",
      houseFloor: "4 qavat",
      roomAmount: "3 xona",
      showerAmount: "1 dush",
      houseAdress: "Mirzo Ulug’bek tumani, Feruza mavzesi",
      remainingAmount: "1ta",
      customerAmount: "77ta",
    },
    {
      houseImage: houseImg3,
      forWhom: "#Oila uchun",
      houseTitle: "Ijara uylar",
      housePrice: "2,000,000 UZS",
      houseFloor: "2 qavat",
      roomAmount: "1 xona",
      showerAmount: "1 dush",
      houseAdress: "Chilonzor tumani, 6-mavze",
      remainingAmount: "2ta",
      customerAmount: "24ta",
    },
    {
      houseImage: houseImg4,
      forWhom: "#Yigitlar uchun",
      houseTitle: "Ijara uylar",
      housePrice: "450,000 UZS",
      houseFloor: "4 qavat",
      roomAmount: "2 xona",
      showerAmount: "1 dush",
      houseAdress: "Sergeli tumani, Sputnik dahasi",
      remainingAmount: "4ta",
      customerAmount: "24ta",
    },
    // {
    //   houseImage: houseImg1,
    //   forWhom: "#Qizlar uchun",
    //   houseTitle: "Ijara uylar",
    //   housePrice: "600,000 UZS",
    //   houseFloor: "1 qavat",
    //   roomAmount: "2 xona",
    //   showerAmount: "1 dush",
    //   houseAdress: "Chilonzor tumani, 6-mavze",
    //   remainingAmount: "2ta",
    //   customerAmount: "24ta",
    // },
    // {
    //   houseImage: houseImg2,
    //   forWhom: "#Qizlar uchun",
    //   houseTitle: "Ijara uylar",
    //   housePrice: "700,000 UZS",
    //   houseFloor: "2 qavat",
    //   roomAmount: "2 xona",
    //   showerAmount: "1 dush",
    //   houseAdress: "Chilonzor tumani, 6-mavze",
    //   remainingAmount: "2ta",
    //   customerAmount: "24ta",
    // },
  ];

  return (
    <React.Fragment>
      <div className="houses_block">
        <div className="container">
          <p className="houses_block__our_offers_text">Bizning takliflar</p>
          <Grid container direction="row" spacing={4}>
            <Grid item xl={9} lg={9} md={9} sm={8} xs={12}>
              <h1 className="houses_block__header_title">
                So’ngi qo’shilgan uylar
              </h1>
              <p className="houses_block__header_subtitle">
                Sizga quyidagi turar joylarni taklif qilamiz
              </p>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
              <div className="houses_block__search_by_filter">
                <div className="houses_block__filter_box">
                  <img
                    className="houses_block__filter_icon_img"
                    src={filterIcon}
                    alt="filter-icon"
                  />
                </div>
                <h4 className="houses_block__filter_text">
                  Filtr bo’yicha qidirish
                </h4>
              </div>
            </Grid>
          </Grid>

          <Swiper
          slidesPerView={3}
          spaceBetween={25}
        //   slidesPerView={"auto"}
          loop={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            470: {
              slidesPerView: 1,
            },
            530: {
              slidesPerView: 2,
            },
            766: {
              slidesPerView: 2,
            },
            840: {
              slidesPerView: 3
            },
          }}
        >
            {housesInfo ? housesInfo.map((item, i) => (
                <SwiperSlide key={i} className="houses_block__card_box">
                    <div className="houses_block__card_image_box">
                        <img className="houses_block__card_img" src={item.houseImage} alt="house-img" />
                    </div>
                    <div className="houses_block__card_box_info">
                        <p className="houses_block__for_whom_text">{item.forWhom}</p>
                        <div className="houses_block__house_prices_info">
                            <h4 className="houses_block__house_type">{item.houseTitle}</h4>
                            <h4 className="houses_block__house_price_text">{item.housePrice}</h4>
                        </div>
                        <div className="houses_block__rooms_info">
                            <div className="houses_block__rooms_boxes">
                                <img className="houses_block__rooms_icon_img" src={floorIcon} alt="floor-img" />
                                <p className="houses_block__rooms_floor_text">{item.houseFloor}</p>
                            </div>
                            <div className="houses_block__rooms_boxes">
                                <img className="houses_block__rooms_icon_img" src={roomIcon} alt="room-img" />
                                <p className="houses_block__rooms_floor_text">{item.roomAmount}</p>
                            </div>
                            <div className="houses_block__rooms_boxes">
                                <img className="houses_block__rooms_icon_img" src={bathroomIcon} alt="bathroom-img" />
                                <p className="houses_block__rooms_floor_text">{item.showerAmount}</p>
                            </div>
                        </div>
                        <div className="houses_block__location_map">
                            <img className="houses_block__location_img" src={locationIcon} alt="location-img" />
                            <span className="houses_block__location_text">{item.houseAdress}</span>
                        </div>
                        <p className="houses_block__remaining_amount_text">Qolgan joylar soni: {item.remainingAmount}</p>
                        <p className="houses_block__remaining_amount_text">Buyurtmachilar soni: {item.customerAmount}</p>
                        <div className="section_instructor__more_details_box">
                            <span className="section_instructor__more_details_text">
                                Batafsil
                            </span>
                            <img
                                className="section_instructor__black_arrow_icon"
                                src={blackArrowIcon}
                                alt="arrow-icon"
                            />
                            <img
                                className="section_instructor__green_arrow_icon"
                                src={greenArrowIcon}
                                alt="arrow-icon"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            )) : ""}
        </Swiper>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Houses;
