import React from "react";
import "./Maklers.css";
import angryManImg from "../../assets/images/asab 1.svg";
import angrySmileImg from "../../assets/images/angrysmile.svg";
import Grid from "@material-ui/core/Grid";

const Maklers = () => {
  return (
    <React.Fragment>
      <div className="maklers">
        <div className="container">
          <Grid container direction="row" spacing={2}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="maklers__man_img">
                    <img className="maklers__angry_man_img" src={angryManImg} alt="angry-man" />
                    <img className="maklers__angry_smile_img" src={angrySmileImg} alt="angry-smile" />
                </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="maklers__angry_texts">
                    <h3 className="maklers__need_makler_text">Makler Kerakmi</h3>
                </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Maklers;
