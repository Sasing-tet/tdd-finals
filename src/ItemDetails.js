import "./css/ItemDetails.scss";
import { useState } from "react";

const ItemDetails = ({
  items,
  show,
  setShowItemDetails,
  currID,
  addItemsToCart,
  setItems,
  setResult,
  result
}) => {
 

  const [imageThumb, setImageThumb] = useState(true);

  const handleClick = (size) =>{
    setResult(`${size}`);
  }
  if (!show) {
    return <></>;
  }


  return (
    <div className="overlay">
      <div data-testid="item-detail" className="item-detail">
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
                  alt="image1"
                  onClick={() => setImageThumb(true)}
                />
                <img
                  src={items[currID].img2}
                  className="thumb"
                  alt="image2"
                  onClick={() => setImageThumb(false)}
                />
              </div>
            </td>
            <td>
              {imageThumb ? (
                <img src={items[currID].img} alt="image1" />
              ) : (
                <img src={items[currID].img2} alt="image2" />
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
                <td className="desc">{items[currID].desc}</td>
              </tr>
              <tr>
                <div className="sizes-title">Available Sizes: </div>
                <button className="size-buttons" onClick={()=> handleClick(items[currID].sizeButton.small)}>
                  {items[currID].sizeButton.small}
                </button>
                <button className="size-buttons" onClick={()=> handleClick(items[currID].sizeButton.medium)}>
                  {items[currID].sizeButton.medium}
                </button>
                <button className="size-buttons" onClick={()=> handleClick(items[currID].sizeButton.Large)}>
                  {items[currID].sizeButton.Large}
                </button>
                <button className="size-buttons" onClick={()=> handleClick(items[currID].sizeButton.xLarge)}>
                  {items[currID].sizeButton.xLarge}
                </button>
              </tr>
              <tr>
                <div className="item-detail-add-button">
                  <button
                    data-testid="item-add-button"
                    className="item-add-button"
                    onClick={() => {addItemsToCart(items)}}
                  >
                    ADD TO SACK
                  </button>
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
