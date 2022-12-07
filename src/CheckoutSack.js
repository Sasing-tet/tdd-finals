import React from "react";
import { useState } from "react";
import "./css/shoppingSack.css";
import items from "./ItemsData";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const CheckoutSack = ({ setShowCheckout }) => {
  return (
    <div className="modal">
      <div className="shoppingCart">
        <div className="header">
          <h2>Shopping Sack</h2>
          <button className="btn close-btn">
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cart-products">
          <button className="btn checkout-btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSack;
