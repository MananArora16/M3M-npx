/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from "react";
import "./BookVisit.css";

var countryCode = `+91`;
var myNumber = `93190 96060`;

const BookVisit = () => {
  return (
    <div>
      <section className="request pb-5 pt-5 amenities">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-12">
              <div className="booksite-heading text-center">
                <h2>
                  Book Site <span>Visit Now</span>
                </h2>
                <img
                  src="/images/HeadlineIcon.svg"
                  alt="Headline Icon"
                  className="icon"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center text-white booksite-heading">
                <h2>
                  <span>{countryCode}</span> {myNumber}
                </h2>
                <div className="brochure-btn">
                  <a
                    className="common-btn fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookVisit;
