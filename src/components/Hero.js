import React from "react";

export default function Hero() {
  return (
    <div className="MainHero">
      <img
        src={require("../imagex/images.jpg")}
        alt="Hero frame"
        className="MainImage"
      />
      <div className="3">
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
