import { useState } from "react";
import React from "react";
import "./css/shoppingSack.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

import CheckOut from "./checkoutSack";

function ShoppingCart({
  currID,
  visibilty,
  items,
  onProductRemove,
  onClose,
  setItems,
  onQuantityChange,
  setSackVisible,
  result,
}) {
  const [showCheckout, setshowCheckout] = useState(false);

  const totalPrice = items?.reduce(
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
          {items?.length === 0 && (
            <span className="empty-text">Your sack is currently empty</span>
          )}
          {items?.map((item) => (
            <div className="cart-product" key={item.id}>
              <img className="product-image" src={item.img} alt="prod" />
              <div className="product-info">
                <div className="prod-title">
                  <h3>{item.productName}</h3>
                </div>
                <div className="product-price">
                  {item.price * item.count}$
                </div>
                <div className="size">Size: {item.currSize === "" ? "(default size) M" : item.currSize}</div>
              </div>
              <div className="select-and-delete">
                <select
                  className="count"
                  data-testid="count"
                  value={item.count}
                  onChange={(event) => {
                    onQuantityChange(item.id, event.target.value);
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
                  onClick={() => handleDelete(item)}
                >
                  <RiDeleteBin6Line size={20} />
                </button>
              </div>
            </div>
          ))}
          {items?.length > 0 && (
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
