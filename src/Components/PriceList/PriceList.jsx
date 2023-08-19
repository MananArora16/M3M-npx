/* eslint-disable no-unused-vars */
import React from "react";
import "./PriceList.css";
import PriceCmp from "./PriceCmp";
import priceData from "./priceData";

function createPrice(price) {
  return <PriceCmp text1={price.td1} text2={price.td2} text3={price.td3} />;
}

const PriceList = () => {
  return (
    <div>
      <div className="space50" id="price"></div>
      <section className="price pb-5 pt-5 common-bg">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-12">
              <div className="common-heading text-center">
                <h2>
                  Price <span>List</span>
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
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col" className="price-tag">
                      TYPOLOGY
                    </th>
                    <th scope="col" className="price-tag">
                      USABLE AREA
                    </th>
                    <th scope="col" className="price-tag">
                      STARTING PRICE*
                    </th>
                    <th scope="col" className="price-tag">
                      PRICE BREAKUP
                    </th>
                  </tr>
                </thead>
                <tbody>{priceData.map(createPrice)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceList;
