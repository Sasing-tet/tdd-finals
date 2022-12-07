import React from "react";
import { useState } from "react";
import "./css/shoppingSack.css";
import CheckoutSack from "./CheckoutSack";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
  visibilty,
  items,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  return (
    <div
      className="modal"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="header">
          <h2>Shopping Sack</h2>
          <button className="btn close-btn" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cart-products">
          {items.length === 0 && (
            <span className="empty-text">Your sack is currently empty</span>
          )}
          {items.map((items) => (
            <div className="cart-product" key={items.id}>
              <img src={items.img} />
              <div className="product-info">
                <h3>{items.productName}</h3>
                <span className="product-price">
                  {items.price * items.count}$
                </span>
              </div>
              <select
                className="count"
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
                onClick={() => onProductRemove(items)}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          ))}
          {items.length > 0 && (
            <button className="btn checkout-btn">Proceed to checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;