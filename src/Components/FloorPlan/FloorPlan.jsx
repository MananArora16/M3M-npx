/* eslint-disable no-unused-vars */
import React from "react";
import "./FloorPlan.css";
import ImgComp from "./ImgComp";
import floorData from "./floorData.js";

function createPlan(plans) {
  return <ImgComp url={plans.ImgURL} altText={plans.alt} p={plans.plan} />;
}

const FloorPlan = () => {
  return (
    <div id="floorPlan">
      <div className="space50" id="floorplan"></div>
      <section className="floor pt-3 pb-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-12">
              <div className="common-heading text-center">
                <h2>
                  Floor <span>Plan</span>
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
            <div id="my-gallery-map">
              <div className="col-sm-12 gallery2">
                <div className="row justify-content-center">
                  {floorData.map(createPlan)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloorPlan;
