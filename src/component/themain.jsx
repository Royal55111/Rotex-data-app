import axios from "axios";
import { useState } from "react";
import PaystackPayment from "./paystack";

function Main(prop) {
  let [icon, setIcon] = useState(true);
  function changeIcon() {
    setIcon((prev) => {
      return !prev;
    });
  }

  return (
    <div>
      <nav className="naver">
        <div className="nav1">
          <div className="nav1-image"></div>
          <div className="it">
            <h1>OTEX</h1>
          </div>
          <div className="nav-icon" onClick={prop.settings}>
          <i className="bi-gear-fill"></i>
          </div>
        </div>
      </nav>
      <div>
        <p>Hello {prop.getData.userName}</p>
      </div>
      <div className="buy">
        <div>
          <p>
            Available balance{" "}
            <i
              className={icon == true ? "bi-eye-fill" : "bi-eye-slash-fill"}
              onClick={changeIcon}
            ></i>
          </p>
          <p>{"\u20A6"}0.00</p>
        </div>
        <div className="inp">
          <PaystackPayment email="customer@email.com" />
        </div>
      </div>
      <div className="sim">
        <div>
          <h1>Select your network provider</h1>
        </div>
        <div className="sim1">
        <div className="sim-card1">
          </div>
          <div className="sim-card2">
          </div>
          <div className="sim-card3">
          </div>
          <div className="sim-card4">
          </div>
        </div>
          
      </div>
    </div>
  );
}

export default Main;
