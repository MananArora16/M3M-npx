/* eslint-disable no-unused-vars */
import React from "react";
import "./Map.css";

const mystyle = {
  border: "0",
};

const Map = () => {
  return (
    <div id="map">
      <div className="space50" id="map"></div>
      <section className="map-view pt-3 pb-3 common-bg">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-12">
              <div className="common-heading text-center">
                <h2>
                  MAP <span>VIEW</span>
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
          <div className="row mt-4 align-items-center">
            <div className="col-sm-7">
              <div className="map-img">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14022.091333285653!2d77.0279067!3d28.5240007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc6696370de8fe48!2sM3M%20Capital!5e0!3m2!1sen!2sin!4v1665751698341!5m2!1sen!2sin"
                  width="600"
                  height="350"
                  style={mystyle}
                  allowfullscreen=""
                  loading="lazy"
                  // eslint-disable-next-line react/no-unknown-property
                  referrerpolicy="no-referrer-when-downgrade"
                  className="border-2 w-100"
                ></iframe>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="location-advantage">
                <h3>Location Advantages</h3>
                <ul className="advantage-list">
                  <li>
                    <i class="fa fa-map-marker" aria-hidden="true"></i> Delhi 0
                    Km
                  </li>
                  <li>
                    <i class="fa fa-map-marker" aria-hidden="true"></i> 7min to
                    Airport
                  </li>
                  <li>
                    <i class="fa fa-map-marker" aria-hidden="true"></i> 5 mins
                    to Diplomatic enclave
                  </li>
                  <li>
                    <i class="fa fa-map-marker" aria-hidden="true"></i> Dwarka
                    Metro 3KM
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
