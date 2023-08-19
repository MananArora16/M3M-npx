import React from "react";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Carousel from "react-bootstrap/Carousel";
import "./HomeCarousel.css";

const data = [
  {
    imag: require("./banner1.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    imag: require("./banner2.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    imag: require("./banner3.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState();
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id="home">
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide.imag}
              alt="slider image"
            />
            <div class="banner-caption">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="banner-content">
                      <h1>
                        <span>M3M Capital</span>
                      </h1>
                      <h4>Sector 113, Dwarka Expressway, Gurugram</h4>
                      <h3>
                        <span>Price:</span>
                        <i
                          class="fa fa-inr hero-icon"
                          aria-hidden="true"
                        ></i>{" "}
                        1.33 Cr* Onwards
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="banner-caption">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-sm-4 offset-sm-9 text-end">
                    <div class="know-more text-center">
                      <h3>ENQUIRY FORM</h3>
                      <form action="" className="form">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                          name="name"
                          id="name"
                        />
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                          name="email"
                          id="email"
                        />
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Phone"
                          name="Phone"
                          id="Phone"
                        />
                        ;
                        <button
                          className="button"
                          style={{ background: "whitesmoke" }}
                        >
                          Request a Call Back
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
