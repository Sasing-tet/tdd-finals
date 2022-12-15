import { useState, useEffect } from "react";
import React from "react";
import "./css/SackO.scss";
import ItemDetails from "./ItemDetails";
import items from "./ItemsData";
import { GiSwapBag } from "react-icons/gi";
import ShoppingCart from "./shoppingSack";
import Item from "./Item";
import cart from "./css/cart.gif";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";

const ProductPage = () => {
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [currID, setCurrID] = useState(1);
  const [sackVisibilty, setSackVisible] = useState(false);
  const [itemsInCart, setItems] = useState([]);
  const [scrollToTop, setscrollToTop] = useState(false);
  const [result, setResult] = useState("");

  const addItemsToCart = () => {
    const temp = currID + 1;
    if (items[currID].currSize === "" ) {
      if (itemsInCart.some((item) => item.id === temp)) {
        return;
      }
      const newItems = {
        ...items[currID],
        count: 1,
      };
      setItems([...itemsInCart, newItems]);
    }
    setItems((prevState) => {
      const newState = prevState.map((temp) => {
        if (temp.id === items[currID].id) {
          return { ...temp, currSize: result };
        }
        return temp;
      });
      return newState;
    });
    console.log("items", itemsInCart);
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setscrollToTop(true);
      } else {
        setscrollToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <ShoppingCart
          data-testid="shopcart"
          currID={currID}
          visibilty={sackVisibilty}
          items={itemsInCart}
          onClose={() => setSackVisible(false)}
          setItems={setItems}
          onQuantityChange={onQuantityChange}
          setSackVisible={setSackVisible}
          result={result}
        />
      </div>
      <div className="upper-display">
        <img src={cart} className="cart-gif" alt="gif" />
        <b>Free Shipping within the Philippines on all orders over P500.00</b>
      </div>
      <div className="body">
        <div className="details">
          <div className="details-container">
            <h5 className="upper-header">Help</h5>
            <h5 className="upper-header">Blog</h5>
            <h5 className="upper-header">Sack-o.com</h5>
          </div>
          <hr className="solid" />
        </div>
        <div className="sticky-header">
          <div data-testid="header" className="header">
            <span className="logo-container">
              <img src="./assets/logo.png" className="logo" alt="logo" />
              <h2 data-testid="title" className="ghost">
                SACK-O
              </h2>
            </span>
            <div className="details-two">
              <h4 className="r">All Products</h4>
              <h4 className="r">Mens</h4>
              <h4 className="r">Womens</h4>
              <h4 className="r">Kids</h4>
              <div className="search-container">
                <span className="search-icon">
                  <BiSearch size={22} />
                </span>
                <input
                  data-testid="srchbar"
                  className="search-field"
                  placeholder="Search"
                ></input>
              </div>

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
            </div>
          </div>
        </div>
        <div data-testid="item-details">
          <ItemDetails
            items={items}
            show={showItemDetails}
            setShowItemDetails={setShowItemDetails}
            currID={currID}
            addItemsToCart={addItemsToCart}
            setItems={setItems}
            setResult={setResult}
            result={result}
          />
        </div>
        <div className="items-title">
          <h4 className="items-title-text">Items Available</h4>
          <div className="items-text-breadcrumbs">
            <button className="breadcrumbs-btn">Home</button>
            {">"}
            <button className="breadcrumbs-btn">All Products</button>
          </div>
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
        {scrollToTop && (
          <button className="scroll-to-top" onClick={scrollUp}>
            <AiOutlineArrowUp size={28} />
          </button>
        )}
        <div className="footer" data-testid="footer">
          <div className="footer-columns">
            <div className="footer-column1">
              <img
                src="./assets/logo-white.png"
                className="footer-logo"
                alt="logo"
              />
              <h3 className="tagline">SACK-O</h3>
              <h4 className="tagline">the SACK for Stylish Champions.</h4>
            </div>
            <div className="footer-column2">
              <h4>PRODUCTS</h4>
              <h5 className="footer-menu">All Products</h5>
              <h5 className="footer-menu">Mens</h5>
              <h5 className="footer-menu">Womens</h5>
              <h5 className="footer-menu">Kids</h5>
            </div>
            <div className="footer-column3">
              <h4 className="contact">Questions? Drop us a line!</h4>
              <p>We'd love to hear from you.</p>
              <br />
              <span className="contact-field">
                <input
                  className="footer-contact"
                  placeholder="Contact Us"
                ></input>
                <button className="footer-contact-btn">
                  <IoIosMail size={35} />
                </button>
              </span>
            </div>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="footer-creds">
          ©2009-2022 SACK-O All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default ProductPage;
