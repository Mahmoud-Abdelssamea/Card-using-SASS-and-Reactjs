import React from "react";

export default function Footer() {
  return (
    <div className="footer container">
      <div className="image">
        <img src={require("./images/Twitter Icon.png")} alt="Twitter" />
      </div>
      <div className="image">
        <img src={require("./images/Facebook Icon.png")} alt="facebook" />
      </div>
      <div className="image">
        <img src={require("./images/Instagram Icon.png")} alt="Instagram" />
      </div>
      <div className="image">
        <img src={require("./images/GitHub Icon.png")} alt="Github" />
      </div>
    </div>
  );
}
