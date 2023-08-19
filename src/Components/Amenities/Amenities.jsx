/* eslint-disable no-unused-vars */
import React from "react";
import "./Amentites.css";
import amenData from "./AmenData";
import AmenFunx from "./AmenFunx";

function createAmen(amenity) {
  return <AmenFunx url={amenity.src} altText={amenity.alt} p={amenity.para} />;
}

const Amenities = () => {
  return (
    <div>
      <section
        className="amenities pt-5 pb-5 position-relative amenitiess"
        id="amenities"
      >
        <div className="container amenities amenities1" id="amenitiesHeight">
          <div className=" row pb-5">
            <div className="col-sm-12">
              <div className="common-heading text-center">
                <h2>
                  <span className="amen-text">AMENITIES</span>
                </h2>
                <img
                  src="/images/HeadlineIcon.svg"
                  alt="Headline Icon"
                  className="iconn"
                  loading="lazy"
                  width={400}
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">{amenData.map(createAmen)}</div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
