import { Grid } from "@mui/material";
import React from "react";
import "../css/Landing.css";
import img1 from "../assets/LandingPage1.PNG";
import study1 from "../assets/study1.jpg";
import study2 from "../assets/study2.jpg";
import study3 from "../assets/study3.jpg";
import LeaderBoard from "./LeaderBoard";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div style={{ maxWidth: "1200px", margin: "auto", padding: "2rem" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={7}>
            <div
              style={{
                height: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h1 className="title">
                  Tumble, <br /> Lorem Ipsum
                </h1>
                <i>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </i>
              </div>
              <div className="CTA">Explore More!</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={img1}
              alt=""
            ></img>
          </Grid>
        </Grid>
      </div>
      <LeaderBoard />
      <div className="why-choose-us">
        <h1 style={{ textAlign: "center" }}>Why Choose Us?</h1>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          p={3}
        >
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <img src={study1} alt=""></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <img src={study2} alt=""></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <img src={study3} alt=""></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum
              </p>
            </div>
          </Grid>
        </Grid>
        <div className="join-us">
            Join Us!
        </div>
      </div>
    </div>
  );
};

export default Landing;
