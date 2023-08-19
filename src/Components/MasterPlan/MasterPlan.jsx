/* eslint-disable no-unused-vars */
import React from "react";
import "./MasterPlan.css";
import MpComp from "./MpComp";
import mpData from "./mpData";

function createMp(data) {
  return <MpComp img={data.image} alt={data.altText} />;
}

const MasterPlan = () => {
  return (
    <div id="masterPlan">
      <div className="space50" id="masterplan"></div>
      <section className="master-plan pb-5 pt-5 common-bg">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-12">
              <div className="common-heading text-center">
                <h2>
                  Master <span>Plan</span>
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
            <div className="col-sm-12 gallery2">
              <div className="row">{mpData.map(createMp)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterPlan;
