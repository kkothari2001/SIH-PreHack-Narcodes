import { Grid } from "@mui/material";
import React from "react";
import "../css/Tutor.css";
// import prof1 from "../assets/prof1.jpg";
// import prof2 from "../assets/prof2.jpg";
// import prof3 from "../assets/prof3.jpg";
// import prof4 from "../assets/prof4.jpg";
// import prof5 from "../assets/prof5.jpg";
// import prof6 from "../assets/prof6.jpg";
// import img1 from "../assets/LandingPage1.PNG";

const Tutor = () => {
  return (
    <div className="tutor-wrapper">
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <h1 style={{ marginTop: "2rem", textAlign: "center" }}>
            Join as a Tutor
          </h1>
          <div id="item-6">
            "Students have doubts almost everyday on multiple topics and they
            are never able to get them resolved just in time. They usually need
            to ask the teacher the next day in school and teachers are never
            able to help each child and many students feel shy to ask questions
            in public. Similarly, teachers or even parents may want some
            guidance or expertise in specific concepts/skills/topics Problem
            Statement: Empower students/teachers/parents/community at large to
            discover experts and seek expertise in online/offline modes.
            Description: Ability to identify experts across sectors within a
            particular geographical area/across geographies Verification of
            expert to be a trusted expert Incentivization for experts to get a
            platform Experts can also share content via DIKSHA’s Viduadaan
            platform OoSC children can also gain access to tutors/experts"
            <div className="CTAA">Learn More!</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container>
            <Grid item xs={6} md={4}>
              <div id="item-1"></div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div id="item-2">
                <div className="t2"></div>
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div id="item-3">
                <div className="t3"></div>
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div id="item-4">
                <div className="t4"></div>
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div id="item-5">
                <div className="t5"></div>
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div id="item-6">
                <div className="t6"></div>
              </div>
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
