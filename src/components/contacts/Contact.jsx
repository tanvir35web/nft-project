import React from "react";
import "./ContactStyle.css";

export default function Contact({ iconImg, serviceName, address, arrowIcon }) {
  return (
    <div className="contactContainer">
      <div className="icon">
        <img src={iconImg} alt="" />
      </div>
      <div className="servicesInfo">
        <p className="serviceName">{serviceName}</p>
        <p className="address">{address}</p>
      </div>
      <div className="arrowIcon">
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  );
}
