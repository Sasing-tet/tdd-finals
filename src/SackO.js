import { useState } from "react";
import React from "react";
import "./css/SackO.css";
import ItemDetails from "./ItemDetails";
import items from "./ItemsData";
import { GiSwapBag } from "react-icons/gi";
import ShoppingCart from "./shoppingSack";
import Item from "./Item";

const ProductPage = () => {
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [currID, setCurrID] = useState(1);
  const [sackVisibilty, setSackVisible] = useState(false);
  const [itemsInCart, setItems] = useState([]);
  const addItemsToCart = () => {
    const temp = currID + 1;
    if (itemsInCart.some((item) => item.id === temp)) {
      return;
    }
    const newItems = {
      ...items[currID],
      count: 1,
    };
    setItems([...itemsInCart, newItems]);
  };

  const handleItemClick = (id) => {
    setCurrID(id - 1);
    setShowItemDetails(true);
  };

  const onQuantityChange = (itemId, count) => {
    setItems((oldState) => {
      const itemIndex = oldState.findIndex((items) => items.id === itemId);
      if (itemIndex !== -1) {
        oldState[itemIndex].count = count;
      }
      return [...oldState];
    });
  };


  setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#"+randomColor;
    },1000);
  return (
    <>
      <div>
        <ShoppingCart
          data-testid="shopcart"
          visibilty={sackVisibilty}
          items={itemsInCart}
          onClose={() => setSackVisible(false)}
          currID={currID}
          setItems={setItems}
          onQuantityChange={onQuantityChange}
        />
      </div>
      <div className="upper-display">
        <b>Free Shipping within the Philippines on all orders over P500.00</b>
      </div>
      <div className="body">
      <div className="details">
        <h4 className="help">Help</h4>
        <h4 className="blog">Blog</h4>
        <h4 className="ghost-com">Sack-o.com</h4>
      </div>
      <div className="sticky-header">
        <hr className="solid" />
        <div data-testid="header" className="header">
          <div>
            <h2 data-testid="title" className="ghost">
              SACK-O
            </h2>
          </div>
          <div className="details-two">
            <h4 className="r"> MENS </h4>
            <h4 className="r">WOMENS</h4>
            <h4 className="r">KIDS</h4>
            <h4 className="r">SALE</h4>
            <input
              data-testid="srchbar"
              className="search-field"
              placeholder="Search"
            ></input>

            <button
              data-testid="sack"
              className="sack-button"
              onClick={() => setSackVisible(true)}
            >
              <GiSwapBag size={28} />
              {itemsInCart.length > 0 && (
                <span className="product-count">{itemsInCart.length}</span>
              )}
            </button>

            <h4 className="cart"> ₱</h4>
          </div>
        </div>

        <hr className="solid-two" />
      </div>
      <div data-testid="item-details">
        <ItemDetails
          items={items}
          show={showItemDetails}
          setShowItemDetails={setShowItemDetails}
          currID={currID}
          addItemsToCart={addItemsToCart}
          setItems={setItems}
        />
      </div>
      <div data-testid="items" className="items-map">
        {items.map((menuItem) => {
          const { id, productName, img, price } = menuItem;
          return (
            <Item
              handleItemClick={handleItemClick}
              id={id}
              productName={productName}
              img={img}
              price={price}
            />
          );
        })}
      </div>
      <div className="footer">footer</div>
      </div>
    </>
  );
};

export default ProductPage;
