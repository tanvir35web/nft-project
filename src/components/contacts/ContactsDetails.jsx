import React from "react";
import "./ContactDetailsStyle.css";
import Contact from "./Contact";
import emailIcon from "../../assets/Contact Icon/email.svg";
import phoneIcon from "../../assets/Contact Icon/call.svg";
import addressIcon from "../../assets/Contact Icon/location.svg";
import arrow from "../../assets/Contact Icon/arrow-right.svg";

export default function ContactsDetails() {
  return (
    <>
      <div className="contactDetails">Contact Details</div>
      <div className="contacts">
        <Contact
          iconImg={emailIcon}
          serviceName={"Email"}
          address={"md.jahidul@media365.com.bd"}
          arrowIcon={arrow}
        />

        <Contact iconImg={phoneIcon}
          serviceName={"Phone"}
          address={"+880 1768 572 658"}
          arrowIcon={arrow}/>

        <Contact iconImg={addressIcon}
          serviceName={"Address"}
          address={"Shekhertek, Road #12, House #20/1, PC Culture Housing, Adabor"}
          arrowIcon={arrow}/>
      </div>
    </>
  );
}

