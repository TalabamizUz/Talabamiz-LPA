import React from "react";
import "./AboutUs.css";
import Grid from "@material-ui/core/Grid";
// import aboutImg1 from "../../assets/images/Rectangle 7.svg";
// import aboutImg2 from "../../assets/images/Rectangle 8.svg";
// import aboutImg3 from "../../assets/images/Rectangle 9.svg";
// import smileImg from "../../assets/images/Shushing Face.svg";
import searchIcon from "../../assets/images/search.svg";
import illustratorImg from "../../assets/images/illustrator.svg";

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="section_about_us">
        <div className="container">
          <Grid container direction="row" spacing={2}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="about_us__text_info">
                <h1 className="about_us__title">
                  Biz bilan <span>oson uy</span> toping!
                </h1>
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
                  <button className="about_us__search_btn">Qidirish</button>
                </div>
                <div className="about_us__users_amoung_info">
                  <div className="about_us__users_count_title">
                    <h1 className="about_us__users_count_number">105</h1>
                    <span className="about_us__users_count_paragraf">
                      mingdan ortiq talabalar
                    </span>
                  </div>
                  <div className="about_us__users_count_title">
                    <h1 className="about_us__users_count_number">55</h1>
                    <span className="about_us__users_count_paragraf">
                      mingdan ortiq uy beruvchilar
                    </span>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="about_us__imgs_box">
                <img className="about_us__illustrator_image" src={illustratorImg} alt="illustrator-img" />
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
