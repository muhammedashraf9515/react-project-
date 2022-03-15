import React from 'react'
import './Ourskils.css'
 function Ourskils(props) {
   
  return (
    
    <div class="our-skills" id="our-skills">
      <h2 class="main-title">Our Skills</h2>
      <div class="container">
        <img src="imgs/skills.png" alt="" />
        <div class="skills">
          <div class="skill">
            <h3>HTML <span>80%</span></h3>
            <div class="the-progress">
              <span style={{width: "80%"  }}></span>

            </div>
          </div>
          <div class="skill">
            <h3>CSS <span>85%</span></h3>
            <div class="the-progress">
            <span datatype='50%'></span>
              
            </div>
          </div>
          <div class="skill">
            <h3>JavaScript <span>70%</span></h3>
            <div class="the-progress">
            <span style={{width: "70%" }}></span>
              
            </div>
          </div>
          <div class="skill">
            <h3>React JS <span>80%</span></h3>
            <div class="the-progress">
            <span style={{width: "80%" }}></span>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Ourskils