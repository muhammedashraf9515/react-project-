import React from "react";
import './Gallery.css'
function Gallery() {
  return (
    <>
    <div class="gallery" id="gallery">
      <h2 class="main-title">Gallery</h2>
      <div class="container">
        <div class="boxs row">
            <div class="box col-lg-3 col-md-4 col-sm-6">
            <div class="image"> 
                <img src="imgs/gallery-01.png" alt="" />
            </div>
            </div>
            <div class="box col-lg-3 col-md-4 col-sm-6">
            <div class="image">
                <img src="imgs/gallery-02.png" alt="" />
            </div>
            </div>
            <div class="box col-lg-3 col-md-4 col-sm-6">
            <div class="image">
                <img src="imgs/gallery-03.jpg" alt="" />
            </div>
            </div>
            <div class="box col-lg-3 col-md-4 col-sm-6">
            <div class="image">
                <img src="imgs/gallery-04.png" alt="" />
            </div>
            </div>
            <div class="box col-lg-3 col-md-4 col-sm-6">
            <div class="image">
                <img src="imgs/gallery-05.jpg" alt="" />
            </div>
            </div>
            <div class="box col-lg-3 col-md-4 col-sm-6">
            <div class="image">
                <img src="imgs/gallery-06.png" alt="" />
            </div>
            </div>
        </div>
      </div>
    </div>


    </>
  );
}

export default Gallery;
