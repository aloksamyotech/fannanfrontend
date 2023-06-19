import React, { useEffect, useState } from "react";
import "./../../assests/css/style.css";
import "./../../assests/fonts/jost/stylesheet.css";
import "./../../assests/css/responsive.css";
import Header from "./../../app/components/Header/header";
import Banner from "./../../banner";
import Category from "./../components/Category";
import Catslider from "./../components/catergoryslider";
import ArtisSlder from "./../components/artistsSlider";
import Feature from "./../components/feature";
import Event from "./../components/event";
import People from "./../components/talking";
import Footer from "./../components/Footer/footer";
import LandingBanner from "./../components/landingBanner";
// import Navbar from "./navbar";
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Category mainheading="Browse by Category" />
      <Catslider name="item" />
      <div className="artists-wrp">
        <Category mainheading="Featured Artists" />
      </div>
      <ArtisSlder />
      <Feature />
      <Event />
      <People />
      <LandingBanner />
    </>
  );
};
export default Home;
