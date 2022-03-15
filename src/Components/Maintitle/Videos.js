import React from 'react'
import './Videos.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

function Videos() {
  return (
    <div class="videos" id="videos">
    <h2 class="main-title">Top Videos</h2>
    <div class="container">
      <div class="holder">
        <div class="list">
          <div class="name">
            Top Videos
            <FontAwesomeIcon   className="icon" icon={ faRandom } />
          </div>
          <div className='vid'>
            <video src="imgs\Bike - 72566.mp4" controls autoPlay />        
            <h3 class="info">01. Video Title Goes Here</h3>
          </div>
          <div className='vid'>
            <video src="imgs\Sea - 4006.mp4" controls autoPlay />         
            <h3 class="info">02. How To Create Sub Domain</h3>
          </div>
          <div className='vid'>
            <video src="imgs\Sea - 4006.mp4" controls autoPlay />         
            <h3 class="info">03. Playing With The DNS </h3>
          </div>
          <div className='vid'>
            <video src="imgs\Sea - 4006.mp4" controls autoPlay />         
            <h3 class="info">04. Everything About The Virtual Hosts</h3>
          </div>
          <div className='vid'>
            <video src="imgs\Sea - 4006.mp4" controls autoPlay />         
            <h3 class="info">05. How To Monitor Your Website</h3>
          </div>
          {/* <ul>
            <li>02. How To Create Sub Domain<span>05:18</span></li>
            <li>03. Playing With The DNS <span>03:18</span></li>
            <li>04. Everything About The Virtual Hosts <span>05:25</span></li>
            <li>05. How To Monitor Your Website <span>04:16</span></li>
            <li>06. Uncharted Beating The Last Boss <span>07:48</span></li>
            <li>07. Ys Oath In Felghana Overview <span>03:12</span></li>
            <li>08. Ys Series All Games Ending <span>08:10</span></li>
          </ul> */}
        </div>
        <div class="preview">
          <video src="imgs\Sea - 4006.mp4" controls autoPlay />         
          <h3 class="info">01. Video Title Goes Here</h3>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Videos