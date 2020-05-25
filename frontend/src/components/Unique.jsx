import React from "react";
import axios from "axios";
import ItemTable from "./ItemTable";

const Unique = ({ productInCart }) => {
  let finalArr = [];
  const getUnique = (arr) => {
    let tempArr = arr.map((item) => item[0]);
    return [...new Set(tempArr)];
  };

  if (productInCart.length > 0) {
    let arr = getUnique(productInCart);
    console.log(arr.length);
    getUnique(productInCart);
    arr.map((item) => {
      let qty = 0;
      productInCart.map((p, i) => {
        if (item._id === p[0]._id) {
          console.log(item._id, p[0]._id);
          qty += p[1];
        }
        return qty;
      });
      console.log("qty", qty);
      finalArr.push([item, qty]);
      return qty;
    });

    console.log(finalArr);
  }

  if (finalArr.length > 0) {
    return (
      <div>
        <ItemTable finalArr={finalArr} />
      </div>
    );
  } else {
    return <div>Your Cart is currently empty!</div>;
  }
};

export default Unique;
