import React, { useEffect, useState } from "react";
import Image from "../../../assests/images/khojiapp-logo-3.png";
import Popup from "reactjs-popup";
import PopUp from "../pages/popup";
import Navbar from "../navbar";
import { Overlay } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  });
  return (
    <>
      <header id="header" className={`${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-7 col-md-3 col-sm-7">
              <div className="site">
                <div className="site__brand text-left">
                  <Link title="Logo" to="/" className="site__brand__logo">
                    <img src={Image} alt="Golo" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-7 col-md-9 col-sm-5">
              <div className="right-header align-right">
                <div className="navbar">
                  <Navbar />
                </div>
                <PopUp />
              </div>
              <div className="site__menu">
                <NavLink
                  title="Menu Icon"
                  href="#"
                  className="site__menu__icon"
                >
                  <i className="las la-bars la-24-black"></i>
                </NavLink>
                <div
                  className="popup-background"
                  style={{ display: "none" }}
                ></div>
                <div className="popup popup--left">
                  <NavLink title="Close" href="#" className="popup__close">
                    <i className="las la-times la-24-black"></i>
                  </NavLink>
                  <div className="popup__content">
                    <div className="popup__user popup__box open-form">
                      <NavLink title="Login" href="#" className="open-login">
                        Login
                      </NavLink>
                      <NavLink title="Sign Up" href="#" className="open-signup">
                        Sign Up
                      </NavLink>
                    </div>
                    <div className="popup__destinations popup__box">
                      <ul className="menu-arrow">
                        <li></li>
                      </ul>
                    </div>
                    <div className="popup__menu popup__box">
                      <ul className="menu-arrow">
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
