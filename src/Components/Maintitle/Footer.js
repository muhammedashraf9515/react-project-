import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div class="footer">
      <div class="container">
          <div class="boxs row">
            <div class="box col-lg-3">
            <h3>Heroes</h3>
            <ul class="social">
                <li>
                <a href="#" class="facebook">
                    <FontAwesomeIcon className="icon" icon={faFacebook} />
                </a>
                </li>
                <li>
                <a href="#" class="twitter">
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                </a>
                </li>
                <li>
                <a href="#" class="youtube">
                    <FontAwesomeIcon className="icon" icon={faYoutube} />
                </a>
                </li>
            </ul>
            <p class="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
                nulla rem, dignissimos iste aspernatur
            </p>
            </div>
            <div class="box col-lg-3">
            <ul class="links">
                <li>
                <a href="#">Important Link 1</a>
                </li>
                <li>
                <a href="#">Important Link 2</a>
                </li>
                <li>
                <a href="#">Important Link 3</a>
                </li>
                <li>
                <a href="#">Important Link 4</a>
                </li>
                <li>
                <a href="#">Important Link 5</a>
                </li>
            </ul>
            </div>
            <div class="box col-lg-3">
            <div class="line">
                <FontAwesomeIcon className="icon" icon={faMapMarkedAlt} />
                <div class="info">Egypt</div>
            </div>
            <div class="line">
                <FontAwesomeIcon className="icon" icon={faClock} />
                <div class="info">Business Hours: From 10:00 To 18:00</div>
            </div>
            <div class="line">
                <FontAwesomeIcon className="icon" icon={faPhoneVolume} />
                <div class="info">
                <span></span>
                <span>+201</span>
                </div>
            </div>
            </div>
            <div class="box col-lg-3 footer-gallery">
            <img src="imgs/gallery-01.png" alt="" />
            <img src="imgs/gallery-02.png" alt="" />
            <img src="imgs/gallery-03.jpg" alt="" />
            <img src="imgs/gallery-04.png" alt="" />
            <img src="imgs/gallery-05.jpg" alt="" />
            <img src="imgs/gallery-06.png" alt="" />
            </div>
        </div>
        <p class="copyright">Made With &lt;3 By Mohammed Ashraf</p>
      </div>
    </div>
  );
}

export default Footer;
