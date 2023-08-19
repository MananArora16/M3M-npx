import React from "react";
import "./About.css";

const Comp1 = (props) => {
  return (
    <div className="row align-items-center" key={props.id}>
      <div className="col-sm-7">
        <div className="about-text" id="about">
          <h2>
            {props.h1} <span>{props.h2}</span>
          </h2>
          <p>{props.p1}</p>
          <p>{props.p2}</p>
          <p>{props.p3}</p>
        </div>
        <div className="brochure-btn">
          <a
            className="common-btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@getbootstrap"
          >
            <i className="fas fa-download"></i> Download Brochure
          </a>
        </div>
      </div>
      <div className="col-sm-5 text-center">
        <div className="about-img">
          <img
            src={props.url}
            className="w-100 shadow"
            alt="Luxury Apartments/Flats in Gurgaon"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Comp1;
