import React from "react";
import Grid from "@mui/material/Grid";
import logo from "../../../img/logo.png";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <Box sx={{ mx: "auto" }}>
        <img className="logo" src={logo} alt="" width="100" />
      </Box>
      <Box sx={{ mx: 2 }}>
        <Grid container sx={{ mt: 2 }} spacing={1} className="footer-item">
          <Grid item xs={6} md={4}>
            <h4>Where We Are</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7428341775644!2d90.42995981445664!3d23.792170293097485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c839a716f%3A0x7ac2fafa0907cbac!2sHazi%20Madbor%20Ali%20Hasania%20Dakhil%20Madrasha!5e0!3m2!1sen!2sjp!4v1639007005021!5m2!1sen!2sjp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </Grid>
          <Grid item xs={6} md={3}>
            <h4>Quick Links</h4>
            <Link to="home">Home</Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <h4>Committee</h4>
            <Link to="home">Home</Link>
          </Grid>
          <Grid item xs={6} md={2}>
            <h4>Contact</h4>
            <Link to="home">Home</Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
