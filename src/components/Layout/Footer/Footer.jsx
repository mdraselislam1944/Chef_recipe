/** @format */
/* eslint-disable no-unused-vars*/ 
import React from "react";

import { FaFacebook, FaGlassMartiniAlt, FaInstagram, FaTwitch,  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black py-5 text-white">
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center container py-5">
        <div>
            <h1>Food Lover</h1>
            <p>Food Lover is an online food and grocery the recipes of all available chefs. platform owned by Berlin-based the recipes of all available chefs. Hero. Food Lover operates as the lead brand for Delivery Hero in Bangladesh, with its headquarters in Dhaka.</p>
            <div className="d-flex align-items-center">
                <div className="fs-1">
                    <FaFacebook></FaFacebook>
                </div>
                <div className="mx-5 fs-1">
                    <FaTwitch></FaTwitch>
                </div>
                <div className="fs-1">
                    <FaInstagram></FaInstagram>
                </div>
            </div>
        </div>
        <div className="d-flex flex-column flex-md-row">
        <div className="mx-3">
            <h3>Company</h3>
            <ul>
                <li style={{listStyleType:'none'}}>About us</li>
                <li style={{listStyleType:'none'}}>Work</li>
                <li style={{listStyleType:'none'}}>Latest Food</li>
                <li style={{listStyleType:'none'}}>Careers</li>
                <li style={{listStyleType:'none'}}>Best food</li>
            </ul>
        </div>
        <div className="mx-3">
            <h3>Product</h3>
            <ul>
                <li style={{listStyleType:'none'}}>Prototype</li>
                <li style={{listStyleType:'none'}}>Plan and pricing</li>
                <li style={{listStyleType:'none'}}>Customers</li>
                <li style={{listStyleType:'none'}}>Integrations</li>
                <li style={{listStyleType:'none'}}>Best food Review</li>
            </ul>
        </div>
        <div className="mx-3">
            <h3>Support</h3>
            <ul>
                <li style={{listStyleType:'none'}}>Help Desk</li>
                <li style={{listStyleType:'none'}}>Sales</li>
                <li style={{listStyleType:'none'}}>Become a Customers</li>
                <li style={{listStyleType:'none'}}>Developers</li>
            </ul>
        </div>
        <div className="mx-3">
            <h3>contracts</h3>
            <ul>
                <li style={{listStyleType:'none'}}>JU, savar, Dhaka</li>
                <li style={{listStyleType:'none'}}>01725601944</li>
            </ul>
        </div>
        </div>
    </div>
      <hr />
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center container">
        <div>
          <p>@2023 software job solutions All Rights Reserved</p>
        </div>
        <div>
          <p>Powered by software job solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
