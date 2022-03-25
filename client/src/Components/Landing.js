import { Grid } from "@mui/material";
import React from "react";
import "../css/Landing.css";
import img1 from "../assets/LandingPage1.PNG";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div style={{ maxWidth: "1200px", margin: "auto", padding: "2rem" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <div style={{height: "80%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
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
          <Grid item xs={12} sm={12} md={6}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={img1}
              alt=""
            ></img>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Landing;
