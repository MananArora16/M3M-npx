import React from "react";
import "./Amentites.css";
const AmenFunx = (props) => {
  return (
    <div className="col-sm-3 col-md-6 col-lg-3">
      <div className="amenities-item mb-30" key={props.id}>
        {/* <!-- <i className="fas fa-basketball-ball"></i> --> */}
        <img
          src={props.url}
          alt={props.altText}
          className="amenities-icon"
          loading="lazy"
        />
        <div className="amenities-text">
          <p>{props.p}</p>
        </div>
      </div>
    </div>
  );
};

export default AmenFunx;
