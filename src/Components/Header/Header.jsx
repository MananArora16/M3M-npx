/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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

import "./Header.css";
import { IoCall } from "react-icons/io5";

const Header = () => {
  const [click, setClick] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

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
      offset: -110,
    },
    {
      id: 3,
      linkk: "amenities",
      title: "Amenities",
      offset: -90,
    },
    {
      id: 4,
      linkk: "gallery",
      title: "Gallery",
      offset: -65,
    },
    {
      id: 5,
      linkk: "price",
      title: "Price",
      offset: "",
    },
    {
      id: 6,
      linkk: "floorPlan",
      title: "Floor Plan",
      offset: -55,
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
      offset: -228,
    },
    {
      id: 9,
      linkk: "map",
      title: "Map",
      offset: -40,
    },
    {
      id: 10,
      linkk: "legacy",
      title: "Legacy",
      offset: "",
    },
  ];
  const navItems = [
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
      offset: -60,
    },
    {
      id: 3,
      linkk: "amenities",
      title: "Amenities",
      offset: -60,
    },
    {
      id: 4,
      linkk: "gallery",
      title: "Gallery",
      offset: -45,
    },
    {
      id: 5,
      linkk: "price",
      title: "Price",
      offset: "",
    },
    {
      id: 6,
      linkk: "floorPlan",
      title: "Floor Plan",
      offset: -55,
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
      offset: -200,
    },
    {
      id: 9,
      linkk: "map",
      title: "Map",
      offset: -10,
    },
    {
      id: 10,
      linkk: "legacy",
      title: "Legacy",
      offset: -25,
    },
  ];

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar header fixed-top ">
        <div className="h-img ">
          <img src="/images/m3m-logo-dark.png" alt="" width={120} />
        </div>
        <div className="h-menu" onClick={handleClick}>
          {menuItems.map((menu) => {
            return (
              <Link
                to={menu.linkk}
                smooth={true}
                offset={menu.offset}
                duration={100}
              >
                {menu.title}
              </Link>
            );
          })}

          <button className="h-button">
            <i className="fa fa-phone contact_icon " aria-hidden="true"></i>
            <a href="" className="anchor ">
              Contact Us
            </a>
          </button>
          <button className="toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
            <span class="material-symbols-outlined">
              {isNavOpen ? "toggle_on" : "toggle_off"}
            </span>
          </button>
        </div>
      </nav>
      <div
        className={`dropDown_menu ${
          isNavOpen ? "dropDownOpen" : "dropDownClosed"
        }`}
      >
        {navItems.map((nav) => {
          return (
            <li>
              <Link
                to={nav.linkk}
                smooth={true}
                offset={nav.offset}
                duration={100}
              >
                {nav.title}
              </Link>
            </li>
          );
        })}
        <li>
          <button className="button "> Enquire Now</button>
        </li>
      </div>
    </>
  );
};

export default Header;
