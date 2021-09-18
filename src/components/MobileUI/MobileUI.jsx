import React from "react";
import "./MobileUI.css";
import Grid from "@material-ui/core/Grid";
import smileIconImg from "../../assets/images/Winking Face.svg";
import mobileImg from "../../assets/images/iphone.svg";
import googlePlayImg from "../../assets/images/google-play.svg";
import appStoreImg from "../../assets/images/app-store.svg";

const MobileUI = () => {
  return (
    <React.Fragment>
      <div className="mobile_ui">
        <div className="container">
          <Grid container direction="row" spacing={3}>
            <Grid item xl={6} lg={5} md={5} sm={12} xs={12}>
              <div className="mobile_ui__coming_info">
                <p className="mobile_ui__intro_text">
                  Endi kompyuter orqali kirishga majbur emassiz
                </p>
                <div className="mobile_ui__our_mobile_box">
                  <h1 className="mobile_ui__our_mobile_title">Bizda Mobile</h1>
                  <img
                    className="mobile_ui__smile_img"
                    src={smileIconImg}
                    alt="smile-img"
                  />
                </div>
                <h1 className="mobile_ui__our_mobile_title">dasturlar ham bor</h1>
                <p className="mobile_ui__paragraf">Ko’plab talabalar murojaatlarini e’tiborga olgan holda mobile dasturlarni iOS hamda Android OS lar uchun ishlab chiqdik.</p>
                <h2 className="mobile_ui__for_download_title">Yuklab olish uchun</h2>
                <div className="mobile_ui__app_stores_img">
                    <img className="mobile_ui__play_store_img" src={googlePlayImg} alt="play-market" />
                    <img className="mobile_ui__play_store_img" src={appStoreImg} alt="app-store" />
                </div>
              </div>
            </Grid>
            <Grid item xl={6} lg={7} md={7} sm={12} xs={12}>
                <div className="mobile_ui__mobile_img">
                    <img className="mobile_ui__iphone_img" src={mobileImg} alt="iphone-img" />
                </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileUI;
