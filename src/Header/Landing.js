import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesDown} from "@fortawesome/free-solid-svg-icons";
import "./Landing.css";

function Landing() {
  return (
    <div className='landing'>
        <div className='container'>
        
            <div className=' text'>
                <h1>Welcome, To Hearoes Wold</h1>
                <p>Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events</p>
            </div> 
            <div className='image'>
                <img src='imgs/landing-image.png' alt='' />
            </div> 
               
            
    </div>
    <a href='#articles' className='go-down' >
            <FontAwesomeIcon icon={faAnglesDown}  className="icon"></FontAwesomeIcon>
            </a> 
    </div>
  )
}

export default Landing