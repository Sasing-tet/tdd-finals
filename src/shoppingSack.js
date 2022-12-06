import React from "react";
import "./shoppingSack.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";


function ShoppingCart({ visibilty, items, onClose,onItemRemove,onQuantityChange }) {
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
          {items.map((item) => (
            <div className="cart-product" key={item.id}>
              <img src={item.img} />
              <div className="product-info">
                <h3>{item.productName}</h3>
                <span className="product-price">
                  {item.price * item.count}$
                </span>
              </div>
              <select
                className="count"
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
								// onClick={() =>
								// 	onItemRemove(
								// 		item
								// 	)
								// }
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
