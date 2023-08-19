import React from "react";
import "./TopUpButton.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
function TopUpButton() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <button
      class="scroltop fa fa-chevron-up"
      onClick={scrollTop}
      id="back-to-up"
    ></button>
  );
}

export default TopUpButton;
