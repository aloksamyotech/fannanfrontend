import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../../assests/images/khojiapp-logo-3.png";
const UsHeader = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    console.log("logout-clicked");
    localStorage.removeItem("User");
    localStorage.removeItem("Adminuser");
    navigate("/");
  };
  return (
    <>
      <header id="header" className="site-header ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-7 col-md-3 col-sm-7">
              <div className="site">
                <div className="site__brand text-left">
                  <Link title="Logo" href="/" className="site__brand__logo">
                    <img src={Image} alt="Golo" />
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- .col-md-6 --> */}
            <div className="col-xl-6 col-7 col-md-9 col-sm-5">
              <div className="right-header align-right">
                <button className="logout-btn" onClick={handlelogout}>
                  Logout
                </button>
                {/* <div className="navbar">
                                    <Navbar />
                                </div> */}
                {/* <PopUp/> */}
              </div>
              {/* <div class="site__menu">
                                <a title="Menu Icon" href="#" class="site__menu__icon">
                                    <i class="las la-bars la-24-black"></i>
                                </a>
                                <div class="popup-background" style={{ display: 'none' }}>
                                </div>
                                <div class="popup popup--left">
                                    <a title="Close" href="#" class="popup__close">
                                        <i class="las la-times la-24-black"></i>
                                    </a>
                                    <div class="popup__content">
                                        <div class="popup__user popup__box open-form">
                                            <a title="Login" href="#" class="open-login">Login</a>
                                            <a title="Sign Up" href="#" class="open-signup">Sign Up</a>
                                        </div>
                                        <div class="popup__destinations popup__box">
                                            <ul class="menu-arrow">
                                                <li ></li>
                                            </ul>
                                        </div>
                                        <div class="popup__menu popup__box">
                                            <ul class="menu-arrow">
                                                <li ></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default UsHeader;
