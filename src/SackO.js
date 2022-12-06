import { useState } from "react";
import React from "react";
import "./SackO.css";
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

  return (
    <>
      <div>
        <ShoppingCart
          visibilty={sackVisibilty}
          items={itemsInCart}
          onClose={() => setSackVisible(false)}
          currID={currID}
        />
      </div>
      <div className="upper-display">
        <b>Free Shipping within the Philippines on all orders over P500.00</b>
      </div>
      <div className="details">
        <td>
          <h2 className="ghost"> SACK-O </h2>
        </td>
        <td>
          <h4 className="help">Help</h4>
        </td>
        <td>
          <h4 className="blog">Blog</h4>
        </td>

        <td>
          <h4 className="ghost-com">Sack-o.com</h4>
        </td>
      </div>

      <hr className="solid" />

      <div className="details-two">
        <td>
          <h4 className="r"> MENS </h4>
        </td>
        <td>
          <h4 className="r">WOMENS</h4>
        </td>
        <td>
          <h4 className="r">KIDS</h4>
        </td>
        <td>
          <h4 className="r">SALE</h4>
        </td>

        <input className="search-field" placeholder="Search"></input>

        <td>
          <button className="sack-button" onClick={() => setSackVisible(true)}>
            <GiSwapBag size={28} />
            {itemsInCart.length > 0 && (
              <span className="product-count">{itemsInCart.length}</span>
            )}
          </button>
        </td>
        <td>
          <h4 className="cart"> ₱</h4>
        </td>
      </div>

      <hr className="solid-two" />
      <ItemDetails
        items={items}
        show={showItemDetails}
        setShowItemDetails={setShowItemDetails}
        currID={currID}
        addItemsToCart={addItemsToCart}
        setItems={setItems}
      />
      <div className="items-map">
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
    </>
  );
};

export default ProductPage;
