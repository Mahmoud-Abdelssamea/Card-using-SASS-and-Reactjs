import React from "react";

export default function Info() {
  return (
    <div className="info container">
      <div className="image">
        <img src={require("./images/card_image.png")} alt="" />
      </div>
      <div className="info__data">
        <h1>laura smith</h1>
        <h3>frontend developer</h3>
        <h5>laurasmith, website</h5>
      </div>
      <div className="info__contact">
        <a href="#" className="email">
          <img src={require("./images/message_Icon.png")} alt="" />
          Email
        </a>
        <a href="#" className="linkedin">
          <img src={require("./images/Vector.png")} alt="" />
          linkedin
        </a>
      </div>
    </div>
  );
}
