/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Legacy.css";

var myPara = `M3M India means 'Superbness in the Trinity Of Men, Materials
                  and Money. The aphorism of the organization is "quality,
                  opportune conveyance and greatness." Recognizable highlights
                  of M3M are its inventive, remarkable and unrivalled ideas,
                  multi-dimensional realty arrangements and unparalleled
                  high-help norms. Demonstrating its responsibility towards
                  creating cutting-edge land works of art, M3M has consistently
                  strived to gather the best abilities in the business. The
                  organization has increased involvement with the land, with
                  diverse complementary gifts from a rich organization of
                  first-className go-betweens, monetary establishments,
                  high-total assets people and probably the most sought-after
                  designers in India.`;

var Company = `M3M Capital`;

const Legacy = () => {
  return (
    <div id="legacy">
      <section className="legacy pt-5 pb-5" id="legacy">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-12">
              <div className="common-heading text-center">
                <h2>
                  {Company} <span>LEGACY</span>
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
          <div className="row text-center">
            <div className="col-sm-12">
              <div className="legacy-text">
                <p> {myPara}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legacy;
