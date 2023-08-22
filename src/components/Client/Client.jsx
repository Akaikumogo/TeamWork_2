import clien from "./clientimg/client_img.png";
import quote from "./clientimg/quote.png";
import "./client.css";

function Client() {
  return (
    <div>
      <div className="container">
        <div className="client">
          <h4 className="client_title">What our client say</h4>

          <div className="client_min_div">
            <img className="client_img" src={clien} alt="client_img" />

            <div className="client_massega_div">
              <img className="quote-img" src={quote} alt="message_img" />

              <p className="client_text">
                Amet in elementum nulla scelerisque dui, egestas at. Elit
                consectetur turpis elementum amet vitae et etiam nec. Varius
                volutpat hac adipiscing tincidunt pretium.
              </p>

              <h6 className="client_name">Angel Paulina</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
