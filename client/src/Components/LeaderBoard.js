import { Grid } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import "../css/leaderboard.css";
import { Rating } from "@mui/material";
import prof from "../assets/prof.jpg"

const Card = () => {
  return (
    <div className="tutor-card">
      <img src={prof} alt=""></img>
      <b>
        <p>John Hopkins</p>
      </b>
      <p>Specialies in physics and math!</p>
      <Rating readOnly value={3} />
    </div>
  );
};

const LeaderBoard = () => {
  return (
    <div className="leaderboard-wrapper">
      <h1>
        <CountUp start separator="," end={10063549} />
      </h1>
      <p>Doubts of young inquisitive minds solved!</p>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <h1>65,403</h1>
          <p>Children helped by experts!</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1>Rs.306 L</h1>
          <p>Amount raised for education!</p>
        </Grid>
      </Grid>
      <div className="cards">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LeaderBoard;
