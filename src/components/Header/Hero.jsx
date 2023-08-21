import React from "react";

const Hero = () => {
  return (
    <div className="header-hero">
      <div className="header-hero_text">
        <h1 className="header-hero_text--title">
          New <span className="span">E-commerce App </span> <br /> best for You
        </h1>
        <p className="header-hero_text--subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed
          vulputate vitae velit dictum cursus amet. Turpis donec ut velit quis.
          Cursus commodo, eget urna, sapien amet.
        </p>
        <div className="header-hero-text_button">
          <button className="header-hero-text_button--btn">
            <img src="src/components/Header/img/g-play.png" alt="" />
          </button>
          <button className="header-hero-text_button--btn">
            <img src="src/components/Header/img/a-store.png" alt="" />
          </button>
        </div>
      </div>
      <div className="header-hero_img">
        <img src="src/components/Header/img/phones.png" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
