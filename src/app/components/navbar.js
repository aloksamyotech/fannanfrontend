import { Outlet, Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/professionals">Professionals</Link>
            </li>
            <li class="nav-item">
              <Link to="/howitworks">How it works</Link>
            </li>
            <li class="nav-item">
              <Link to="/partners">Partners</Link>
            </li>
            <li class="nav-item">
              <Link to="/about">About us</Link>
            </li>
            <li class="nav-item">
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li class="nav-item"></li>
          </ul>
        </div>
      </nav>

      {/* <div className="navbar">
        <Link to="/professionals">Professionals</Link>
        <Link to="/howitworks">How it works</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/about">About us</Link>
        <Link to="/contactus">Contact Us</Link>
      </div> */}
    </>
  );
};
export default Navbar;
