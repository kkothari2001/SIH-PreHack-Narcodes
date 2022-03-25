import React from "react";
import { Grid, Link } from "@mui/material";
import "../css/FooterPage.css"

const Footer = () => {
  return (
    <div className="footer">
      <div style={{ maxWidth: "1300px", margin: "auto" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={4}>
            <div className="footer-prati">
              <h3>TUMBLE</h3>
              <br />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="quick-links">
              <h3>Quick Links</h3>
              <br />
              <Link href="" underline="none" color="inherit">
                <p>Link</p>
              </Link>
              <Link href="" underline="none" color="inherit">
                <p>Link</p>
              </Link>
              <Link href="" underline="none" color="inherit">
                <p>Link</p>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="quick-links">
              <h3>Quick Links</h3>
              <br />
              <Link href="" underline="none" color="inherit">
                <p>Link</p>
              </Link>
              <Link href="" underline="none" color="inherit">
                <p>Link</p>
              </Link>
              <Link href="" underline="none" color="inherit">
                <p>Link</p>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
