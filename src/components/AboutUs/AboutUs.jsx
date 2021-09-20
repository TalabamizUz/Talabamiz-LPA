import React, { useEffect } from "react";
import "./AboutUs.css";
import '../../buttons.css'
import Grid from "@material-ui/core/Grid";
import searchIcon from "../../assets/images/search.svg";
import illustratorImg from "../../assets/images/illustrator2.svg";
import mainTextImg from "../../assets/images/Main text.svg";
import CountUp from "react-countup";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className="section_about_us">
        <div className="container">
          <Grid container direction="row" spacing={2}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <div
                className="about_us__text_info"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img
                  className="about_us__main_text_img"
                  src={mainTextImg}
                  alt="main-text"
                />
                <p className="about_us__subtitle">
                  Vaqtingizni va pulingizni tejab qolish imkoniyati :)
                </p>
                <div className="about_us__filters_section">
                  <div className="about_us__simple_filter_text">
                    Oddiy qidiruv
                  </div>
                  <div className="about_us__filtered_text">
                    Filtrlangan qidiruv
                  </div>
                </div>
                <div className="about_us__search_form">
                  <input
                    className="about_us__search_input"
                    type="text"
                    placeholder="Kalit so’zni kiriting..."
                  />
                  <span className="about_us__search_icon">
                    <img
                      className="about_us__search_icon_img"
                      src={searchIcon}
                      alt="search-icon"
                    />
                  </span>
                  <button className="about_us__search_btn btn-hover color-9">Qidirish</button>
                </div>
                <div className="about_us__users_amoung_info">
                  <div className="about_us__users_count_title">
                    <h1 className="about_us__users_count_number">
                      <CountUp end={105} duration={4} />
                    </h1>
                    <span className="about_us__users_count_paragraf">
                      mingdan ortiq talabalar
                    </span>
                  </div>
                  <div className="about_us__users_count_title">
                    <h1 className="about_us__users_count_number">
                      <CountUp end={55} duration={4} />
                    </h1>
                    <span className="about_us__users_count_paragraf">
                      mingdan ortiq uy beruvchilar
                    </span>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <div
                className="about_us__imgs_box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img
                  className="about_us__illustrator_image"
                  src={illustratorImg}
                  alt="illustrator-img"
                />
                {/* <div className="about_us__imgs_box_one">
                  <div className="about_us__image">
                    <img
                      className="about_us__box_img1"
                      src={aboutImg1}
                      alt="students-img"
                    />
                  </div>
                  <div className="about_us__our_followers_info">
                    <p className="about_us__our_followers_text">
                      Bizning safimiz
                    </p>
                    <span className="about_us__our_followers_count">
                      110k
                      <img className="about_us__smile_icon" src={smileImg} alt="smile-img" />
                    </span>
                  </div>
                </div>
                <div className="about_us__imgs_box_second">
                  <div className="about_us__image">
                    <img
                      className="about_us__box_img2"
                      src={aboutImg2}
                      alt="students-img"
                    />
                  </div>
                  <div className="about_us__image">
                    <img
                      className="about_us__box_img3"
                      src={aboutImg3}
                      alt="students-img"
                    />
                  </div>
                </div> */}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
