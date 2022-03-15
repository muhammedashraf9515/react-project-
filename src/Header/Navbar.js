import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-regular-svg-icons";
import {faClipboard} from "@fortawesome/free-regular-svg-icons";
import {faCalendarDays} from "@fortawesome/free-regular-svg-icons";
import {faServer} from "@fortawesome/free-solid-svg-icons";
import {faPlayCircle} from "@fortawesome/free-regular-svg-icons";
import {faChartColumn} from "@fortawesome/free-solid-svg-icons";
import {faPercent} from "@fortawesome/free-solid-svg-icons";
import {faBuilding} from "@fortawesome/free-regular-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";


function Navbar() {
  return (
    <>
      {/* Start Header  */}
      <div class="header" id="header">
        <div class="container">
          <a href="#" class="logo">
            Heroes
          </a>
          <ul class="main-nav">
            <li>
              <a href="#articles">Articles</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#">Other Links</a>
              {/* Start Megamenu */}
              <div className="mega-menu">
                <div className="image">
                  <img src="imgs/megamenu.png" alt="" />  
                </div>  
                <ul className="links">
                  <li>
                    <a href="#testimonials"> <FontAwesomeIcon className="icon" icon={faComments} /> Testimonials</a>
                  </li>
                  <li>
                    <a href="#team"><FontAwesomeIcon className="icon" icon={faUser} /> Team Members</a>
                  </li>
                  <li>
                    <a href="#services"><FontAwesomeIcon className="icon" icon={faBuilding} /> Services</a>
                  </li>
                  <li>
                    <a href="#our-skills"><FontAwesomeIcon className="icon" icon={faCheckCircle} /> Our Skills</a>
                  </li>
                  <li>
                    <a href="#work-steps"> <FontAwesomeIcon className="icon" icon={faClipboard} /> How it works</a>
                  </li>
                  </ul>
                  <ul className="links">
                  <li>
                    <a href="#events"> <FontAwesomeIcon className="icon" icon={faCalendarDays} /> Events </a>
                  </li>
                  <li>
                    <a href="#pricing"><FontAwesomeIcon className="icon" icon={faServer} /> Pricing Plans</a>
                  </li>
                  <li>
                    <a href="#videos"><FontAwesomeIcon className="icon" icon={faPlayCircle} /> Top Videos</a>
                  </li>
                  <li>
                    <a href="#stats"><FontAwesomeIcon className="icon" icon={faChartColumn} /> Stats</a>
                  </li>
                  <li>
                    <a href="#discount"> <FontAwesomeIcon className="icon" icon={faPercent} /> Request A Discount</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
