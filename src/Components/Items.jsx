import React, { useEffect, useState } from "react";
import ItemsData from "../Helper/Items.json";
import "./Items.css";

const Items = (params) => {
  const [cartitem, setCartItem] = useState([]);
  const [counters, setCounters] = React.useState([0, 0, 0, 0]);
  const setCount = (index, newCounter) => {
    const newCounters = Object.assign([], counters);
    newCounters[index] = newCounter;
    setCounters(newCounters);
  };
  const getItem = (items) => {
    setCartItem([...cartitem, items.item]);
  };
  const setCounter = (index, newCounter) => {
    const newCounters = Object.assign([], counters);
    newCounters[index] = newCounter;
    setCount(newCounters);
  };
  return (
    <>
      <div className="main-container">
        <div className="items-container">
          {ItemsData.map((items, index) => (
            <div key={index} className="items">
              <div className="add-item-btn">
                <button
                  onClick={() => {
                    getItem(items, index);
                    setCounter(index, items);
                  }}
                >
                  +
                </button>
              </div>
              <div className="item-name">{items.item}</div>
            </div>
          ))}
        </div>
        <div className="cart-item-container">
          {cartitem.map((cartitem, index) => (
            <div className="cart-items" key={index}>
              <div className="cart-item-btn">
                <button
                  onClick={() => {
                    setCounter(index, counters + 1);
                  }}
                >
                  -
                </button>
              </div>
              <div className="cart-item-name"> {cartitem}</div>
              <div className="item-count">{counters}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Items;
