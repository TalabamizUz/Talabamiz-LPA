import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/images/footer-logo.svg";
import InstagramLogo from "../../assets/images/Instagram_white.svg";
import TelegramLogo from "../../assets/images/Telegram_white.svg";
import OkLogo from "../../assets/images/OK_white.svg";
import TwitterLogo from "../../assets/images/Twitter_white.svg";
import FacebookLogo from "../../assets/images/Facebook_white.svg";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="container">
          <div className="footer_info">
            <div className="footer_logo">
              <img className="footer_img" src={FooterLogo} alt="footer-logo" />
            </div>
            <div className="footer_paragraf_text">
              <p className="footer_paragraf">
                O’zbekiston Respublikasidagi OTM talabalarining ijara turar joy
                masalasi <br /> uchun yaratilgan ijtimoiy portal
              </p>
            </div>
            <div className="footer_social_icons">
              <div className="social_networks">
                <img
                  className="networks_icon"
                  src={FacebookLogo}
                  alt="instagram-img"
                />
              </div>
              <div className="social_networks">
                <img
                  className="networks_icon"
                  src={InstagramLogo}
                  alt="telegram-img"
                />
              </div>
              <div className="social_networks">
                <img
                  className="networks_icon"
                  src={TwitterLogo}
                  alt="whatsApp-img"
                />
              </div>
              <div className="social_networks">
                <img
                  className="networks_icon"
                  src={TelegramLogo}
                  alt="whatsApp-img"
                />
              </div>
              <div className="social_networks">
                <img
                  className="networks_icon"
                  src={OkLogo}
                  alt="whatsApp-img"
                />
              </div>
            </div>
          </div>
          <div className="footer_line"></div>
          <p className="footer_policy_txt">
            Copyright 2021. Talabamiz.uz | Barcha huquqlar himoyalangan
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
