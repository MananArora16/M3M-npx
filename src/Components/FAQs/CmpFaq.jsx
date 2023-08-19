import React from "react";
import "./Faqs.css";
import Faqs from "./Faqs";
const queAns = [
  {
    id: 1,
    heading: "What is M3M Captial?",
    content: " Luxury Golf Residences 0 km from Delhi",
  },
  {
    id: 1,
    heading: "What are the configuration of the units in M3M Capital?",
    content: " 2.5 BHK, 3.5 BHK, 4.5 BHK, 4.5 BHK + Servant",
  },
  {
    id: 1,
    heading: " What is the possesion date for M3M Capital?",
    content: "2026 December",
  },
  {
    id: 1,
    heading: " Where is the location of M3M Capital?",
    content: " Sector 113, Dwarka Expressway, South Gurugram",
  },
  {
    id: 1,
    heading: "What is the size of M3M Capital?",
    content: "15Acres",
  },
  {
    id: 1,
    heading: "What are the total number of floors in each plot of M3M Capital?",
    content: "G + 36",
  },
  {
    id: 1,
    heading: "Description",
    content: (
      <ul>
        <li>
          Total land - Approx. 65 Acres (Including SCO/Commercial/Residential)
        </li>
        <li>Part of 236 acre Self Sustaining Smart City</li>
        <li>The Next Big destination for MNCS & IT/ITES companies.</li>
        <li> Strategically located at the Border of Delhi & Gurugram</li>
        <li> 12 Lac+ families already living in vicinity.</li>
        <li>Fully Modular Kitchen with Hob & Chimney</li>
        <li>Ample Covered Car Parking Space in the Basement</li>
        <li>
          3-Side Open Apartments with views of Delhi Reserve Greens & Central
          Greens
        </li>
        <li>
          Exclusive international-standard Club of 70,000-80,000 sq. ft for
          Residents
        </li>
      </ul>
    ),
  },
];

const CmpFaq = () => {
  return (
    <div>
      <div className="row mb-5">
        <div className="col-sm-12">
          <div className="common-heading text-center ">
            <h2>
              <span className="f-span">FAQs</span>
            </h2>
            <img
              src="/images/HeadlineIcon.svg"
              alt="Headline Icon"
              className="icon"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <Faqs />
    </div>
  );
};

export default CmpFaq;
