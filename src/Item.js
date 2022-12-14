import { useState } from "react";
import "./css/SackO.scss";

const Item = ({ handleItemClick, id, productName, img, price }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      data-testid="products-on-hover"
      className="products"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <main className="image-container">
        <article key={id} className="product-box-one">
          <div className="image-cont">
            <img src={img} className="img" alt="image1" />
            <div className="on-hover-button">
              {isHovering && (
                <button
                  data-testid="add-to-sack"
                  className="add-to-sack"
                  onClick={() => {
                    handleItemClick(id);
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
    </div>
  );
};

export default Item;
