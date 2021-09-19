import React, { useEffect} from "react";
import "./WhyWe.css";
import homeIconImg from "../../assets/images/Group 11.svg";
import contractIconImg from "../../assets/images/Group 12.svg";
import Grid from "@material-ui/core/Grid";

import AOS from "aos";
import "aos/dist/aos.css";

const WhyWe = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <div className="why_we">
        <div className="container">
          <p
            className="why_we__choose_text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            Nima uchun bizni tanlashadi?
          </p>
          <Grid container direction="row" spacing={2}>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <h1
                className="why_we__angry_title"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                Maklerlar asabingiz tolalarini tugatganidan xabarimiz bor
                albatta :)
              </h1>
              <p
                className="why_we__trust_text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                Ishonmasangiz sinab ko’ring
              </p>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <div
                className="why_we__second_box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <div className="why_we__without_makler_img">
                  <img
                    className="why_we__icons_img"
                    src={homeIconImg}
                    alt="home-img"
                  />
                </div>
                <div className="why_we__without_maklers_texts">
                  <h3 className="why_we__without_maklers_title">
                    Maklersiz uylar
                  </h3>
                  <p className="why_we__without_maklers_subtitle">
                    Biz sizga uchinchi shaxslar yani maklerlar kabi xizmat
                    taklif qilmaymiz va rejamizda ham yo’q :)
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <div
                className="why_we__second_box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <div className="why_we__without_makler_img2">
                  <img
                    className="why_we__icons_img"
                    src={contractIconImg}
                    alt="home-img"
                  />
                </div>
                <div className="why_we__contract_texts">
                  <h3 className="why_we__contract_title">Shartnoma asosida</h3>
                  <p className="why_we__contract_subtitle">
                    Siz va uy beruvchi o’rtasidagi shartnomalar qonuniy tartibda
                    amalga oshiriladi
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyWe;
