import "./customer.css";
import man_box from "../../images/man-box.svg";
import girl_comp from "../../images/girl-comp.svg";
import girl_phone from "../../images/girl-phone.svg";
export default function Customer() {
  return (
    <div className="customer">
      <h1 className="customer__text">
        What we do to help
        <br />
        our customers in
        <br />
        digital era.
      </h1>
      <div className="customer__main">
        <div className="row">
          <div className="card">
            <div className="img_block">
              <img src={man_box} alt="" />
            </div>
            <div className="description">
              <p className="card__tite">Receive</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <a href="#">learn more</a>
          </div>
          <div className="card">
            <div className="img_block">
              <img src={girl_phone} alt="" />
            </div>
            <div className="description">
              <p className="card__tite">Receive</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <a href="#">learn more</a>
          </div>
          <div className="card">
            <div className="img_block">
              <img src={girl_comp} alt="" />
            </div>
            <div className="description">
              <p className="card__tite">Receive</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <a href="#">learn more</a>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div className="img_block">
              <img src={man_box} alt="" />
            </div>
            <div className="description">
              <p className="card__tite">Receive</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <a href="#">learn more</a>
          </div>
          <div className="card">
            <div className="img_block">
              <img src={girl_phone} alt="" />
            </div>
            <div className="description">
              <p className="card__tite">Receive</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <a href="#">learn more</a>
          </div>
          <div className="card">
            <div className="img_block">
              <img src={girl_comp} alt="" />
            </div>
            <div className="description">
              <p className="card__tite">Receive</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <a href="#">learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
}
