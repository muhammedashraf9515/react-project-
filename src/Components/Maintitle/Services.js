import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import { faPalette} from "@fortawesome/free-solid-svg-icons";
import { faBullhorn} from "@fortawesome/free-solid-svg-icons";

import './Services.css'

function Services() {
  return (
    <div class="services" id="services">
    <h2 class="main-title">Services</h2>
    <div class="container">
      <div class="box">
      <FontAwesomeIcon   className="icon" icon={faUserShield} />
        <h3>Security</h3>
        <div class="info">
          <a href="#">Details</a>
        </div>
      </div>
      <div class="box">
      <FontAwesomeIcon   className="icon" icon={faTools} />
        <h3>Fixing Issues</h3>
        <div class="info">
          <a href="#">Details</a>
        </div>
      </div>
      <div class="box">
      <FontAwesomeIcon   className="icon" icon={faMapMarkedAlt} />
        <h3>Location</h3>
        <div class="info">
          <a href="#">Details</a>
        </div>
      </div>
      <div class="box">
      <FontAwesomeIcon   className="icon" icon={faLaptopCode} />
        <h3>Coding</h3>
        <div class="info">
          <a href="#">Details</a>
        </div>
      </div>
      <div class="box">
      <FontAwesomeIcon   className="icon" icon={faPalette} />
        <h3>Security</h3>
        <div class="info">
          <a href="#">Design</a>
        </div>
      </div>
      <div class="box">
      <FontAwesomeIcon   className="icon" icon={faBullhorn} />
        <h3>Marketing</h3>
        <div class="info">
          <a href="#">Details</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services