/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Gallery.css";

const ImgComp = (props) => {
  return (
    <div className="col-sm-3">
      <div className="gallery-item text-center mb-30">
        <div className="gallery-item--thumb gallery" key={props.id}>
          <img
            src={props.img}
            alt="Independent floors in Gurugram"
            loading="lazy"
          />
          <a
            data-caption="My caption"
            href={props.img}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@getbootstrap"
          >
            <i className="far fa-eye"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImgComp;
