import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facititates buying
          and selling of Products or sewrvices over the internet. It serves as
          an virtual marketplace where businesses and individual showcase their
          products, interact with customers, and conduct transactions without
          the need for a physical presence. E-commerce websites have gained
          immense popularity due to their convenience, accessibility and the
          global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services and
          detailed descriptions, images, prices, and any available variety (e.g:
          size,colors). Each product usually has its own details with relevant
          information
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
