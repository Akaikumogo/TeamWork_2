import React from "react";
import create from "../../images/work-1.svg";
import shield from "../../images/shield.svg";
import emoji from "../../images/emoji.svg";
function works() {
  return (
    <div className="body">
      <div className="container1">
        <h2 className="work_title1">How it works</h2>
        <div className="card_wrapper1">
          <div className="card1">
            <img className="img1" src={create} alt="peopleAdd" />
            <h3 className="card_title1">Create an account</h3>
            <p className="card_desc1">Lorem ipsum dolor sit amet,<br />consecteteu.</p>
          </div>
          <div className="card1">
            <img className="img1" src={shield} alt="peopleAdd" />
            <h3 className="card_title1">Get authorization</h3>
            <p className="card_desc1">Lorem ipsum dolor sit  amet,<br />consecteteu.</p>
          </div>
          <div className="card1">
            <img className="img1" src={emoji} alt="peopleAdd" />
            <h3 className="card_title1">Enjoy the app</h3>
            <p className="card_desc1">Lorem ipsum dolor sit amet,<br />consecteteu.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default works;
