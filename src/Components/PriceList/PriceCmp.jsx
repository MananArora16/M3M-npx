import React from "react";
import "./PriceList.css";
const PriceCmp = (props) => {
  return (
    <tr key={props.id}>
      <td>{props.text1}</td>
      <td>{props.text2}</td>
      <td>
        <i class="fa fa-inr" aria-hidden="true"></i>
        {props.text3}
      </td>
      <td>
        <a
          className="price-common-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@getbootstrap"
        >
          Price Breakup
        </a>
      </td>
    </tr>
  );
};

export default PriceCmp;
