import { useState } from "react";
import React from "react";
import "./css/shoppingSack.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
  visibilty,
  items,
  onProductRemove,
  onClose,
  setItems,
  onQuantityChange,
}) {
  const [alertMsg, setAlertMsg] = useState(false);

  const showAlert = (show = false, type = "", message = "") => {
    setAlertMsg({ show, type, message });
  };
  const totalPrice= items.reduce((price, items)=> price + items.count * items.price, 0)

  const handleDelete = ({ id }) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const checkout = () => {
    alert(`Checkout - Subtotal: ₱ ${totalPrice.toFixed(2)}`);
    setItems([]);
}

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
              <img className="product-image" src={items.img} alt="prod"/>
              <div className="product-info">
                <h3>{items.productName}</h3>
                <span className="product-price">
                  {items.price * items.count}$ 
                </span>
              </div>
              {/* <div>
                        <button onClick={()=>onQuantityChange(items, +1)}> - </button>
                        <button>{items.count}</button>
                        <button onClick={()=>handleDelete(items, -1)}> + </button>
                    </div> */}
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
             <button className="checkout-btn" onClick={checkout}>CHECKOUT</button>
           </div>
         </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
