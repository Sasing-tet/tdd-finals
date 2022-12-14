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

  const showAlert = (show = false, type = "", message = "") => {
    setAlertMsg({ show, type, message });
  };

  const handleCheckout = () => {
    showAlert(
      true,
      "success",
      `Items Checkout successful. Subtotal $${totalPrice.toFixed(2)}`
    );
    setItems([]);
  };

  if (!show) {
    return <></>;
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
          onClick={() => {
            setShowCheckout(false);
          }}
        >
          X
        </button>
        <span className="checkout-title-logo">
          <img src="./assets/logo.png" className="checkout-logo" alt="logo" />
          <h1>Sack-O Details</h1>
        </span>
        <table>
          <td>
            <tr>
              <div>
                <form className="form">
                  <div>
                    Full Name:
                    <input
                      data-testid="name"
                      className="name-input"
                      placeholder="Full Name:"
                    ></input>
                  </div>
                  <br />
                  <div>
                    Address:
                    <input
                      data-testid="address"
                      className="address-input"
                      placeholder="Address:"
                    ></input>
                  </div>
                </form>
              </div>
              <h2>Payment Method</h2>
              <div data-testid="payment-methods" className="payment-container">
                <input type="radio" />
                <img
                  src="./assets/Paypal-logo.png"
                  className="payment-logo"
                  alt="payment-logo"
                />
              </div>
              <div className="payment-container">
                <input type="radio" />
                <img
                  src="./assets/Google_Logo.png"
                  className="payment-logo"
                  alt="payment-logo"
                />
              </div>
              <div className="payment-container">
                <input type="radio" />
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
              <div className="order-details">
                <h3> Shipping Method</h3>
                <h4>Standard Shipping</h4>
                <p>
                  (Orders placed now are expected to arrive before Wednesday,
                  Dec 14 - Saturday, Dec 17. The actual delivery time is subject
                  to the official website/ notice of the logistics company.)
                </p>

                <h4 data-testid="shipping-fee">
                  Shipping Fee: ${totalPrice.toFixed(2) * (0.3).toFixed(2)}
                </h4>
                <h4 data-testid="total"> Total: ${totalPrice.toFixed(2)}</h4>

                <button
                  className="confirm-checkout-btn"
                  onClick={handleCheckout}
                >
                  Confirm Checkout
                </button>
              </div>
            </tr>
          </td>
        </table>
      </div>
    </div>
  );
};

export default CheckOut;
