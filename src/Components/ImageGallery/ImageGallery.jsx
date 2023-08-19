/* eslint-disable no-unused-vars */
import React from "react";
import "./Gallery.css";
import ImgComp from "./ImgComp";
import data from "./data.js";

function creatImg(photo) {
  return <ImgComp img={photo.url} />;
}

const Gallery = () => {
  return (
    <div id="gallery">
      <div className="space50" id="gallery"></div>
      <section className="image-gallery pt-3">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-12">
              <div className="common-heading text-center">
                <h2>
                  IMAGE <span>GALLERY</span>
                </h2>
                <img
                  src="images/HeadlineIcon.svg"
                  alt="Headline Icon"
                  className="icon"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="gallery2">
                <div className="row justify-content-center">
                  {data.map(creatImg)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
