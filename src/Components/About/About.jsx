/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import { FaDownload } from "react-icons/fa";
import Comp1 from "./comp1";
import aboutData from "./aboutData";

function createAbt(data) {
  return (
    <Comp1
      h1={data.head1}
      h2={data.head2}
      p1={data.para1}
      p2={data.para2}
      p3={data.para3}
      url={data.imgURL}
    />
  );
}
const About = () => {
  return (
    <div className="mb-5">
      <section class="about pt-5" id="about">
        <div class="container">{aboutData.map(createAbt)}</div>
      </section>
    </div>
  );
};

export default About;
