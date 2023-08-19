/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
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
import "./Footer.css";

const mystyle = {
  color: "#999",
  textDecoration: "none",
  fontWeight: "bold",
};

const Footer = () => {
  const menuItems = [
    {
      id: 1,
      linkk: "home",
      title: "Home",
      offset: "",
    },
    {
      id: 2,
      linkk: "about",
      title: "About",
      offset: -20,
    },
    {
      id: 3,
      linkk: "amenities",
      title: "Amenities",
      offset: -35,
    },
    {
      id: 4,
      linkk: "gallery",
      title: "Gallery",
      offset: "",
    },
    {
      id: 5,
      linkk: "price",
      title: "Price",
      offset: -10,
    },
    {
      id: 6,
      linkk: "floorPlan",
      title: "Floor Plan",
      offset: "",
    },
    {
      id: 7,
      linkk: "masterPlan",
      title: "Master Plan",
      offset: "",
    },
    {
      id: 8,
      linkk: "faqs",
      title: "FAQs",
      offset: -205,
    },
    {
      id: 9,
      linkk: "map",
      title: "Map",
      offset: "",
    },
  ];
  return (
    <section className="disclaimer pb-2 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>DISCLAIMER:</h2>
            <p className="f-text">
              The material & Contents presented herein is solely for
              informational purposes and shall not be construed as an offer, or
              an invitation to offer to avail any services. The prices mentioned
              are subject to alterations without prior notice, and the
              properties referenced are contingent on availability. The images
              used are for representational objectives and for the purpose of
              illustrating a proposed or projected layout only. This is not the
              official website; rather, the site is maintained by Save Max Real
              Estate Brokerage Private Limited, which is registered under the
              RERA IDs detailed at{" "}
              <a
                href="https://in.savemax.com/rera/"
                target="_SEJ"
                rel="noreferrer"
                style={mystyle}
              >
                https://in.savemax.com/rera/
              </a>
              . All brand names and logos featured on this website are the
              exclusive property of their respective proprietors. We serve as an
              authorized marketing associate for the projects enumerated on this
              website. We reserve the right to share information with
              RERA-registered sub-brokers/companies/projects for additional
              processing. We may also transmit updates to the mobile numbers or
              email addresses registered with us. SaveMax.com disclaims all
              warranties and representations concerning the offers delineated on
              this site. Save Max Real Estate Brokerage Pvt. Ltd. shall bear no
              responsibility or liability for mediating or resolving any
              conflicts or disagreements arising between Sellers and prospective
              Customers/Buyers/Users. The company will not be liable for any
              legal course of action by any visitor for relying on the website
              information. It is the exclusive responsibility of both Sellers
              and Customers/Buyers/Users to address and resolve such disputes
              without the involvement of Save Max Real Estate Brokerage Pvt.
              Ltd. in any capacity. All rights reserved.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="footer-link">
              <ul className="footer-menu">
                {menuItems.map((menu) => {
                  return (
                    <li>
                      <Link
                        to={menu.linkk}
                        smooth={true}
                        offset={menu.offset}
                        duration={100}
                      >
                        {menu.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="top-links text-center">
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row align-items-center text-center maharera pb-3">
          <div className="col-md-4">
            <p>
              <span>Project's RERA:</span> GGM/704/436/2023/48{" "}
            </p>
          </div>
          <div className="col-sm-4">
            <p>
              <span>SaveMax RERA:</span> RC/HARERA/GGM/1720/1315/2022/88{" "}
            </p>
          </div>
          <div className="col-sm-4">
            <p>
              <span>RERA Website:</span>{" "}
              <a
                href="https://haryanarera.gov.in/"
                target="_SEJ"
                rel="norefferer"
              >
                https://haryanarera.gov.in/
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
