import { Grid } from "@mui/material";
import React from "react";
import "../css/Tutor.css";
// import img1 from "../assets/LandingPage1.PNG";

const Tutor = () => {
  return (
    <div className="landing-wrapper">
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <div className="hh1">Join as a Tutor</div>
          <div id="item-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <div className="CTAA">Button</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container>
            <Grid item xs={6} md={4}>
              <div id="item-1">&nbsp;</div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div id="item-2">&nbsp;</div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div id="item-3">&nbsp;</div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div id="item-4">&nbsp;</div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div id="item-5">&nbsp;</div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div id="item-7">&nbsp;</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tutor;

/**
 * 
 * <div class="angry-grid">
        <div id="item-0"></div>
        <div id="item-1">&nbsp;</div>
        <div id="item-2">&nbsp;</div>
        <div id="item-3">&nbsp;</div>
        <div id="item-4">&nbsp;</div>
        <div id="item-5">&nbsp;</div>
        <div id="item-6">
          <div className="hh1">Join as a Tutor</div>
          <div className="hh1text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="CTAA">Button</div>
        </div>
      </div>
 */
