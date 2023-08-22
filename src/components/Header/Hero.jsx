import a_store from "./img/a-store.png";
import g_play from "./img/g-play.png";
import phones from "./img/phones.png";

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
            <img src={g_play} alt="" />
          </button>
          <button className="header-hero-text_button--btn">
            <img src={a_store} alt="" />
          </button>
        </div>
      </div>
      <div className="header-hero_img">
        <img src={phones} alt="" />
      </div>
    </div>
  );
};

export default Hero;
