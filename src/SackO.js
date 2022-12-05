import { useEffect, useState } from "react";
import React from "react";
import "./SackO.css";
import ItemDetails from "./ItemDetails";
import items from "./ItemsData";
import { GiSwapBag } from "react-icons/gi"; 

const ProductPage = () => {
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [currID, setCurrID] = useState(1);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  // const [buy, setBuy] = useEffect ({});

  return (
    <>
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
          <button className="sack-button"><GiSwapBag size={28}/></button>
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
        isHovering={isHovering}
        currID={currID}
      />

      <div
        className="products"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {items.map((menuItem) => {
          const { id, productName, img, price } = menuItem;
          return (
            <main className="image-container">
              <article key={id} className="product-box-one">
                <div>
                  <img src={img} className="img" />
                  <div className="on-hover-button">
                    {isHovering && (
                      <button
                        className="add-to-sack"
                        onClick={() => {
                          setCurrID(menuItem.id - 1);
                          setShowItemDetails(true);
                        }}
                      >
                        Add to Sack
                      </button>
                    )}
                  </div>
                </div>
              </article>
              <div className="item-info">
                <h4 className="prodTitle">{productName}</h4>
                <div>
                  <h4 className="price">${price}</h4>
                </div>
              </div>
            </main>
          );
        })}
      </div>
    </>
  );
};

export default ProductPage;
