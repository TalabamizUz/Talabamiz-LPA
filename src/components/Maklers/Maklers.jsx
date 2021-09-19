import React from "react";
import "./Maklers.css";
import angryManImg from "../../assets/images/asab 1.svg";
import angrySmileImg from "../../assets/images/angrysmile.svg";
import angryTextImg1 from "../../assets/images/maklersiz-kuchada.svg";
import angryTextImg2 from "../../assets/images/makler-price.svg";
import angryTextImg3 from "../../assets/images/O’ziz bilasiz yoqmasa.svg";
import angryTextImg4 from "../../assets/images/Makler kerakmi.svg";
import Grid from "@material-ui/core/Grid";

const Maklers = () => {
  return (
    <React.Fragment>
      <div className="maklers">
        <div className="container">
          <Grid container direction="row" spacing={2}>
            <Grid item xl={6} lg={5} md={5} sm={12} xs={12}>
                <div className="maklers__man_img">
                    <img className="maklers__angry_man_img" src={angryManImg} alt="angry-man" />
                    <img className="maklers__angry_smile_img" src={angrySmileImg} alt="angry-smile" />
                </div>
            </Grid>
            <Grid item xl={6} lg={7} md={7} sm={12} xs={12}>
                <div className="maklers__angry_img_texts">
                  <div className="maklers__angry_text_box">
                    <img className="maklers__need_makler_text_img1" src={angryTextImg4} alt="makler-text-img"/>
                    <img className="maklers__need_makler_text_img2" src={angryTextImg1} alt="makler-text-img"/>
                  </div>
                  <div className="maklers__angry_text_box2">
                    <img className="maklers__need_makler_text_img3" src={angryTextImg2} alt="makler-text-img"/>
                    <img className="maklers__need_makler_text_img4" src={angryTextImg3} alt="makler-text-img"/>
                  </div>
                </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Maklers;
