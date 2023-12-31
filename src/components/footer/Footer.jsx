import React from "react";
import "./FooterStyle.css";
import send from "../../assets/Footer Icon/send.svg";
import share from "../../assets/Footer Icon/share.svg";
import add from "../../assets/Footer Icon/add-circle.svg";
export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="left">
        <div className="sendContainer">
          <div className="send">
            <img src={send} alt="send image" />
          </div>
        </div>
        <div className="sendContainer">
          <div className="send">
            <img src={share} alt="send image" />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="add">
          <p className="addBtnText">Add to Contact</p>
          <img src={add} alt="" />
        </div>
      </div>
    </div>
  );
}
