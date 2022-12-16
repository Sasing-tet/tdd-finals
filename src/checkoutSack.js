import { useState } from "react";
import React from "react";
import "./css/CheckoutSack.scss";
import AlertMessage from "./alertMessage";

const CheckOut = ({
  show,
  setShowCheckout,
  totalPrice,
  setItems,
  setSackVisible,
}) => {
  const [alertMsg, setAlertMsg] = useState(false);
  const [name, setName] = useState("");
  const [userAddress, setuserAddress] = useState("");
  const [radio, setRadio] = useState("");

  const showAlert = (show = false, type = "", message = "") => {
    setAlertMsg({ show, type, message });
  };

  const handleChange = (event) => {
    const result = event.target.value.replace(/[^a-z\s]/gi, "");
    setName(result);
  };

  const handleChange1 = (event) => {
    setuserAddress(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || userAddress.trim().length === 0) {
      showAlert(true, "danger", "Invalid. Input Field is empty.");
    } else if (radio === "") {
      showAlert(true, "danger", "Invalid. Please choose Payment method.");
    } else if (totalPrice === 0) {
      showAlert(
        true,
        "danger",
        "Invalid. Items Already Checked out, Sack is empty."
      );
    } else {
      showAlert(
        true,
        "success",
        `Items Checked out successful. Subtotal $${totalPrice.toFixed(2)}`
      );
      setItems([]);
      setName("");
      setuserAddress("");
      setRadio("");
    }
  };

  if (!show) {
    return;
  }
  return (
    <div className="modal1">
      <div className="alertMessage">
        {alertMsg.show && (
          <div className="alertContents">
            <AlertMessage {...alertMsg} removeAlert={showAlert} />
          </div>
        )}
      </div>
      <div className="checkoutBox">
        <button
          className="close-button"
          data-testid="close-button"
          onClick={() => {
            setShowCheckout(false);
          }}
        >
          X
        </button>
        <span className="checkout-title-logo">
          <img
            src="./assets/logo.png"
            className="checkout-logo"
            alt="logo"
            data-testid="logo"
            label="logo"
          />
          <h1>Sack-O Details</h1>
        </span>
        <form className="form" onSubmit={onFormSubmit}>
          <table>
            <td>
              <tr>
                <div>
                  <div>
                    Full Name:
                    <input
                      data-testid="name-input"
                      className="name-input"
                      placeholder="Full Name:"
                      value={name}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <br />
                  <div>
                    Address:
                    <input
                      data-testid="address-input"
                      className="address-input"
                      placeholder="Address:"
                      value={userAddress}
                      onChange={handleChange1}
                    ></input>
                  </div>
                </div>
                <h2>Payment Method</h2>
                <div className="payment-container">
                  <input
                    type="radio"
                    value="paypal"
                    data-testid="payment"
                    defaultChecked={true}
                    checked={radio === "paypal"}
                    onChange={(e) => {
                      setRadio(e.target.value);
                    }}
                  />
                  <img
                    src="./assets/Paypal-logo.png"
                    className="payment-logo"
                    alt="payment-logo"
                  />
                </div>
                <div className="payment-container">
                  <input
                    type="radio"
                    value="gpay"
                    data-testid="payment"
                    checked={radio === "gpay"}
                    onChange={(e) => {
                      setRadio(e.target.value);
                    }}
                  />
                  <img
                    src="./assets/Google_Logo.png"
                    className="payment-logo"
                    alt="payment-logo"
                  />
                </div>
                <div className="payment-container">
                  <input
                    type="radio"
                    value="bdopay"
                    data-testid="payment"
                    checked={radio === "bdopay"}
                    onChange={(e) => {
                      setRadio(e.target.value);
                    }}
                  />
                  <img
                    src="./assets/bdo_logo.png"
                    className="payment-logo"
                    alt="payment-logo"
                  />
                </div>
              </tr>
            </td>
            <td>
              <tr>
                <div className="order-details" data-testid="order-details">
                  <h3> Shipping Method</h3>
                  <h4>Standard Shipping</h4>
                  <p>
                    (Orders placed now are expected to arrive before Wednesday,
                    Dec 14 - Saturday, Dec 17. The actual delivery time is
                    subject to the official website/ notice of the logistics
                    company.)
                  </p>

                  <h4>Shipping Fee: ${(totalPrice * 0.1).toFixed(2)}</h4>
                  <h4> Total: ${totalPrice.toFixed(2)}</h4>

                  <button
                    className="confirm-checkout-btn"
                    data-testid="checkout-btn"
                    type="submit"
                  >
                    Confirm Checkout
                  </button>
                </div>
              </tr>
            </td>
          </table>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
