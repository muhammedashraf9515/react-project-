import React from 'react'
import './Stats.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function Stats() {
  let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

  return (
       <div class="stats" id="stats">
      <h2>Our Awesome Stats</h2>
      <div class="container">
        <div class="box">
        <FontAwesomeIcon   className="icon" icon={faUser} />
          <span className={ nums.forEach((num) => startCount(num))}  class="number" data-goal="150">0</span>
          <span class="text">Clients</span>
        </div>
        <div class="box">
          <i class="fas fa-code fa-2x fa-fw"></i>
          <span class="number" data-goal="135">0</span>
          <span class="text">Projects</span>
        </div>
        <div class="box">
          <i class="fas fa-globe-asia fa-2x fa-fw"></i>
          <span class="number" data-goal="50">0</span>
          <span class="text">Countries</span>
        </div>
        <div class="box">
          <i class="far fa-money-bill-alt fa-2x fa-fw"></i>
          <span class="number" data-goal="500">0</span>
          <span class="text">Money</span>
        </div>
      </div>
    </div>
  )
}

export default Stats