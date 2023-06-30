import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./app/components/Header/header";
import "./assests/css/style.css";
import "../src/assests/fonts/jost/stylesheet.css";
import "../src/assests/css/responsive.css";
import Banner from "./banner";
import Category from "./app/components/Category";
import Catslider from "./app/components/catergoryslider";
import ArtisSlder from "./app/components/artistsSlider";
import Feature from "./app/components/feature";
import Event from "./app/components/event";
import People from "./app/components/talking";
import Footer from "./app/components/Footer/footer";
import LandingBanner from "./app/components/landingBanner";
import Home from "./app/components/Home";
import About from "./app/components/pages/about";
import Contact from "./app/components/pages/contact";
import UseDash from "./app/components/pages/userDashboard";
import Booking from "./app/components/pages/userBooking";
import Listing from "./app/components/pages/userListing";
import Profile from "./app/components/pages/userProfile";
import Chat from "./app/components/pages/userChat";
import Artist from "./app/components/pages/artist";
import Notification from "./app/components/pages/notification";
import Invoice from "./app/components/pages/invoice";
import InvoiceDtails from "./app/components/pages/invoicedetails";
import Wishlist from "./app/components/pages/userWishlist";
import ArtDash from "./app/components/pages/artistDashboard";
import Faq from "./app/components/pages/faq";
import List from "./app/components/pages/list";
import PopUp from "./app/components/pages/popup";
import Professionals from "./app/components/pages/professionals";
import Navbar from "./app/components/navbar";
import Post from "./app/components/pages/uspost";
import Services from "./app/components/pages/userservice";
import UsHeader from "./app/components/Header/Userheader";
import { Switch } from "@material-ui/core";
import Records from "./records.json";
import Howitwork from "./app/components/pages/hoitworks";
import Partner from "./app/components/pages/partner";
import Contactus from "./app/components/pages/contactus";
import UserPage from "./app/components/pages/userpage";
import PrivateComponent from "./app/components/pages/privateComponent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/user/dashboard" element={<UseDash />}></Route>
            <Route path="/user/bookings" element={<Booking />}></Route>
            <Route path="/user/listing" element={<Listing />}></Route>
            <Route path="/user/profile" element={<Profile />}></Route>
            <Route path="/user/wishlist" element={<Wishlist />}></Route>
            <Route path="/artist/dashboard" element={<ArtDash />}></Route>
            <Route path="/user/chat" element={<Chat />}></Route>
            <Route path="/user/uspost" element={<Post />}></Route>
            <Route path="/user/services" element={<Services />}></Route>
          </Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/artist/:id" element={<Artist />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/invoice" element={<Invoice />}></Route>
          <Route path="/invoice/details" element={<InvoiceDtails />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/list/:id" element={<List />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/professionals" element={<Professionals />}></Route>
          <Route path="/howitworks" element={<Howitwork />}></Route>
          <Route path="/partners" element={<Partner />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/userpage/:userid" element={<UserPage />}></Route>
        </Routes>
        <Footer />
        <LandingBanner />
      </BrowserRouter>
    </div>
  );
}

export default App;
