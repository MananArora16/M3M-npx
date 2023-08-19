import React from "react";
import "./MasterPlan.css";

const MpComp = (props) => {
  return (
    <div className="col-sm-6" key={props.id}>
      <div className="master-plan-img mb-30">
        <img src={props.img} alt={props.alt} className="w-100" loading="lazy" />
      </div>
    </div>
  );
};

export default MpComp;
