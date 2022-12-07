import "./css/SackO.css";
import items from "./ItemsData";
import { useState } from "react";

const ItemDetails = ({
  items,
  show,
  setShowItemDetails,
  currID,
  addItemsToCart,
  setItems
}) => {
  const [imageThumb, setImageThumb] = useState(true);
  if (!show) {
    return <></>;
  }

  return (  
    <div className="overlay">
      <div className="item-detail">
        <button
          className="close-button"
          onClick={() => {
            setShowItemDetails(false);
          }}
        >
          X
        </button>
        <table className="item-info-table">
          <tr>
            <td>
              <div className="thumbnail">
                <img
                  src={items[currID].img}
                  className="thumb"
                  onClick={() => setImageThumb(true)}
                />
                <img
                  src={items[currID].img2}
                  className="thumb"
                  onClick={() => setImageThumb(false)}
                />
              </div>
            </td>
            <td>
              {imageThumb ? (
                <img src={items[currID].img} />
              ) : (
                <img src={items[currID].img2} />
              )}
            </td>
            <div className="info">
              <tr>
                <td className="item-detail-name">
                  {items[currID].productName}
                </td>
              </tr>
              <tr>
                <td>Category: {items[currID].category}</td>
              </tr>
              <tr>
                <td className="item-detail-price">${items[currID].price}</td>
              </tr>
              <tr>
                <td>{items[currID].desc}</td>
              </tr>
              <tr>
                <button className="size-buttons">
                  {items[currID].sizeButton.small}
                </button>
                <button className="size-buttons">
                  {items[currID].sizeButton.medium}
                </button>
                <button className="size-buttons">
                  {items[currID].sizeButton.Large}
                </button>
                <button className="size-buttons">
                  {items[currID].sizeButton.xLarge}
                </button>
              </tr>
              <tr>
                <div className="item-detail-add-button">
                  <button className="item-add-button"
                  onClick={() => addItemsToCart(items)}>ADD TO SACK</button>
                </div>
              </tr>
            </div>
          </tr>
        </table>

        <div className="products"></div>
      </div>
    </div>
  );
};

export default ItemDetails;
