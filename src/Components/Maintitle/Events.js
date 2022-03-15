import React from 'react'
import  './Events.css'
function Events() {
  let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
  // console.log(countDownDate);
  
  let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();
  
    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;
  
    // Get Time Units
    // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  
    if (dateDiff < 0) {
      clearInterval(counter);
    }
  }, 1000);
  
  return (
    <div class="events" id="events">
      <div class="dots dots-up"></div>
      <div class="dots dots-down"></div>
      <h2 class="main-title">Latest Events</h2>
      <div class="container">
        <img src="imgs/events.png" alt="" />
        <div class="info">
          <div class="time">
            <div class="unit">
        
          <span className={"days"}></span>
              <span>Days</span>
            </div>
            <div class="unit">
              <span className={"hours"}></span>
              <span>Hours</span>
            </div>
            <div class="unit">
              <span className={"minutes"}></span>
              <span>Minutes</span>
            </div>
            <div class="unit">
              <span className={"seconds"}>55</span>
              <span>Seconds</span>
            </div>
          </div>
          <h2 class="title">Tech Masters Event 2021</h2>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam
            ratione aliquam excepturi nulla in harum, veritatis porro
          </p>
        </div>
        <div class="subscribe">
          <form action="">
            <input type="email" placeholder="Enter Your Email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Events