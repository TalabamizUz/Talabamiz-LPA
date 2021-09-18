import React from "react";
import "./InstructorInfo.css";
import homeIcon from "../../assets/images/Home.svg";
import tickIcon from "../../assets/images/Shield Done.svg";
import paperIcon from "../../assets/images/Paper.svg";
import loginIcon from "../../assets/images/Login.svg";
import blackArrowIcon from "../../assets/images/black-arrow-right.svg";
import greenArrowIcon from "../../assets/images/green-arrow-right.svg";
import Grid from "@material-ui/core/Grid";

const InstructorInfo = () => {
  //   const info = [
  //     {
  //       blogImage: homeIcon,
  //       blogTitle: "Mos uyni izlang",
  //       blogText:
  //         "Turar joyingizni toping. Sizga manzur bo’lishi uchun fotosurat va tavsiflarni tekshiring",
  //     },
  //     {
  //       blogImage: tickIcon,
  //       blogTitle: "Ro’yxatdan o’ting",
  //       blogText:
  //         "Tizimdan ro’yxatdan o’ting va barcha shartlarga rozi ekanligingizni tasdiqlating",
  //     },
  //     {
  //       blogImage: paperIcon,
  //       blogTitle: "Shartnoma tuzing",
  //       blogText:
  //         "Mijoz bilan ikki tomonlama shartnoma imzolang va ijara to’lovni amalga oshiring",
  //     },
  //     {
  //       blogImage: loginIcon,
  //       blogTitle: "Xush kelibsiz",
  //       blogText:
  //         "Va nixoyat siz ortiqcha ovvoragarchiliklarsiz uy topdingiz va vaqtingizni tejab qoldingiz :)",
  //     },
  //   ];

  return (
    <React.Fragment>
      <div className="section_instructor">
        <div className="container">
          <Grid container direction="row" spacing={3}>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <div className="section_instructor__card">
                <div className="section_instructor__img_box">
                  <img
                    className="section_instructor__img_icon"
                    src={homeIcon}
                    alt="home-icon"
                  />
                </div>
                <h2 className="section_instructor__card_title">
                  Mos uyni izlang
                </h2>
                <p className="section_instructor__card_subtitle">
                  Turar joyingizni toping. Sizga manzur bo’lishi uchun fotosurat
                  va tavsiflarni tekshiring
                </p>
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
            </Grid>

            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <div className="section_instructor__card">
                <div className="section_instructor__img_box2">
                  <img
                    className="section_instructor__img_icon"
                    src={tickIcon}
                    alt="tick-icon"
                  />
                </div>
                <h2 className="section_instructor__card_title">
                  Ro’yxatdan o’ting
                </h2>
                <p className="section_instructor__card_subtitle">
                  Tizimdan ro’yxatdan o’ting va barcha shartlarga rozi
                  ekanligingizni tasdiqlating
                </p>

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
            </Grid>

            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <div className="section_instructor__card">
                <div className="section_instructor__img_box3">
                  <img
                    className="section_instructor__img_icon"
                    src={paperIcon}
                    alt="paper-icon"
                  />
                </div>
                <h2 className="section_instructor__card_title">
                  Shartnoma tuzing
                </h2>
                <p className="section_instructor__card_subtitle">
                  Mijoz bilan ikki tomonlama shartnoma imzolang va ijara
                  to’lovni amalga oshiring
                </p>
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
            </Grid>

            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <div className="section_instructor__card">
                <div className="section_instructor__img_box4">
                  <img
                    className="section_instructor__img_icon"
                    src={loginIcon}
                    alt="home-icon"
                  />
                </div>
                <h2 className="section_instructor__card_title">
                  Xush kelibsiz
                </h2>
                <p className="section_instructor__card_subtitle">
                  Va nixoyat siz ortiqcha ovvoragarchiliklarsiz uy topdingiz va
                  vaqtingizni tejab qoldingiz :)
                </p>
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
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InstructorInfo;
