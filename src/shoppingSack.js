import { useState } from "react";
import React from "react";
import "./css/shoppingSack.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

import CheckOut from "./checkoutSack";

function ShoppingCart({
  visibilty,
  items,
  onProductRemove,
  onClose,
  setItems,
  onQuantityChange,
  setSackVisible,
  result
}) {
  const [showCheckout, setshowCheckout] = useState(false);

  const totalPrice = items.reduce(
    (price, items) => price + items.count * items.price,
    0
  );

  const handleDelete = ({ id }) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const checkout = () => {
    setshowCheckout(true);
    // alert(`Checkout - Subtotal: $ ${totalPrice.toFixed(2)}`);
    // setItems([]);
  };

  return (
    <div
      className="modal"
      data-testid="modal"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shoppingCart" data-testid="shoppingCart">
        <div className="header">
          <CheckOut
            show={showCheckout}
            setShowCheckout={setshowCheckout}
            totalPrice={totalPrice}
            setItems={setItems}
            setSackVisible={setSackVisible}
          />
          <h2>Shopping Sack</h2>
          <button className="btn close-btn" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cart-products" data-testid="cart-products">
          {items.length === 0 && (
            <span className="empty-text">Your sack is currently empty</span>
          )}
          {items.map((items) => (
            <div className="cart-product" key={items.id}>
              <img className="product-image" src={items.img} alt="prod" />
              <div className="product-info">
                <h3>{items.productName}</h3>
                <span className="product-price">
                  {items.price * items.count}$
                </span>
                <span className="size">{result}</span>
              </div>
              <select
                className="count"
                data-testid="count"
                value={items.count}
                onChange={(event) => {
                  onQuantityChange(items.id, event.target.value);
                }}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
              <button
                className="btn remove-btn"
                data-testid="btn-remove-btn"
                onClick={() => handleDelete(items)}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          ))}
          {items.length > 0 && (
            <div className="cart-summary">
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">${totalPrice.toFixed(2)}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button
                  className="checkout-btn"
                  data-testid="btn-remove-btn"
                  onClick={checkout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
