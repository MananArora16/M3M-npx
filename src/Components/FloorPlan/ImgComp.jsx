import React from "react";
import "./FloorPlan.css";
import floorData from "./floorData.js";
const ImgComp = (props) => {
  return (
    <div className="col-sm-4">
      <div className="gallery-item text-center mb-30">
        <div className="gallery-item--thumb map-img" id="aaa">
          <img
            src={props.url}
            alt={props.altText}
            className="blur-img"
            loading="lazy"
          />
          <a
            data-caption="3 BHK Type B"
            href={props.url}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@getbootstrap"
          >
            <i className="far fa-eye"></i>
          </a>
          <div className="map-text text-center">
            <p>{props.p}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgComp;
