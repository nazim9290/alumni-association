import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Box sx={{ mx: "auto" }}>
        <img className="logo" src={logo} alt="" width="100" />
      </Box>
      <Box sx={{ mx: 2 }}>
        <Grid container className="footer-item">
          <Grid item xs={12} md={4}>
            <h4>Where We Are</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7428341775644!2d90.42995981445664!3d23.792170293097485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c839a716f%3A0x7ac2fafa0907cbac!2sHazi%20Madbor%20Ali%20Hasania%20Dakhil%20Madrasha!5e0!3m2!1sen!2sjp!4v1639007005021!5m2!1sen!2sjp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </Grid>
          <Grid item xs={4} md={3}>
            <h4>Quick Links</h4>
            <Link to="Home">
              <i class="fas fa-angle-right"></i>Home
            </Link>
            <Link to="AboutUs">
              <i class="fas fa-angle-right"></i>About Us
            </Link>
            <Link to="News">
              <i class="fas fa-angle-right"></i>News
            </Link>
            <Link to="FAQ">
              <i class="fas fa-angle-right"></i>FAQ
            </Link>
            <Link to="ContactUs">
              <i class="fas fa-angle-right"></i>Contact Us
            </Link>
            <Link to="Testimonials">
              <i class="fas fa-angle-right"></i>Testimonials
            </Link>
            <Link to="Sitemap">
              <i class="fas fa-angle-right"></i>Sitemap
            </Link>
          </Grid>
          <Grid item xs={4} md={3}>
            <h4>Committee</h4>
            <Link to="AdvisoryBoard">
              <i class="fas fa-angle-right"></i>Advisory Board
            </Link>
            <Link to="ExecutiveBoard">
              <i class="fas fa-angle-right"></i>Executive Board
            </Link>
            <Link to="ExecutiveMember">
              <i class="fas fa-angle-right"></i>Executive Member
            </Link>
            <Link to="TechTeam">
              <i class="fas fa-angle-right"></i>Tech Team
            </Link>
            <Link to="Constitution">
              <i class="fas fa-angle-right"></i>Constitution
            </Link>
            <Link to="DonorList">
              <i class="fas fa-angle-right"></i>Donor list
            </Link>
          </Grid>
          <Grid item xs={4} md={2}>
            <h4>Contact</h4>
            <Box color="white" sx={{ textAlign: "start" }}>
              Hazi Madbor Ali Hasania Dakhil Madrasha 2626,
              Khilbarirtake,Vatara, Dhaka- 1212 Established in 1991.
            </Box>
          </Grid>
        </Grid>
        <Divider variant="middle" color="white" sx={{ mt: 5, mb: 2 }} />
        <Box className="rights">
          &copy; {new Date().getFullYear()} Hasania Alumni Association.All
          Rights Reserved. Designed & Developed by NDP Tech Team
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
