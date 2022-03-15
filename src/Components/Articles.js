import React from "react";
import "./Articles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

function articles() {
  return (
    <>
      <div class="articles" id="articles">
        <div class="container">
          <div className=" boxs">
            <div class="box ">
              <img src="imgs/cat-01.jpg" alt="" />
              <div class="content">
                <h3>Test Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit
                </p>
              </div>
              <div class="info">
                <a href="">Read More</a>
                <FontAwesomeIcon   className="icon" icon={faRightLong} />
              </div>
            </div>
            <div class="box ">
              
              <img src="imgs/cat-02.jpg" alt="" />
              <div class="content">
                <h3>Test Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit
                </p>
              </div>
              <div class="info">
                <a href="">Read More</a>
                <FontAwesomeIcon   className="icon" icon={faRightLong} />
              </div>
            </div>
            <div class="box ">
              <img src="imgs/cat-03.jpg" alt="" />
              <div class="content">
                <h3>Test Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit
                </p>
              </div>
              <div class="info">
                <a href="">Read More</a>
                <FontAwesomeIcon   className="icon" icon={faRightLong} />
              </div>
            </div>
            <div class="box ">
              <img src="imgs/cat-04.jpg" alt="" />
              <div class="content">
                <h3>Test Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit
                </p>
              </div>
              <div class="info">
                <a href="">Read More</a>
                <FontAwesomeIcon   className="icon" icon={faRightLong} />
              </div>
            </div>
            <div class="box ">
              <img src="imgs/cat-05.jpg" alt="" />
              <div class="content">
                <h3>Test Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit
                </p>
              </div>
              <div class="info">
                <a href="">Read More</a>
                <FontAwesomeIcon   className="icon" icon={faRightLong} />
              </div>
            </div>
            <div class="box ">
              <img src="imgs/cat-06.jpg" alt="" />
              <div class="content">
                <h3>Test Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit
                </p>
              </div>
              <div class="info">
                <a href="">Read More</a>
                <FontAwesomeIcon   className="icon" icon={faRightLong} />
              </div>
            </div>
            <div class="box ">
              <img src="imgs/cat-07.jpg" alt="" />
              <div class="content">
                <h3>Test Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit
                </p>
              </div>
              <div class="info">
                <a href="">Read More</a>
                <FontAwesomeIcon   className="icon" icon={faRightLong} />
              </div>
            </div>
            <div class="box ">
              <img src="imgs/cat-08.jpg" alt="" />
              <div class="content">
                <h3>Test Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit
                </p>
              </div>
              <div class="info">
                <a href="">Read More</a>
                <FontAwesomeIcon   className="icon" icon={faRightLong} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spikes"></div>
    </>
  );
}

export default articles;
