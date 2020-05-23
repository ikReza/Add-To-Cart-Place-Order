import React from "react";
import { Paper, Card, Typography } from "@material-ui/core";

const AddedToCart = ({ productInCart }) => {
  //console.log(productInCart.length);
  if (productInCart.length > 0) {
    console.log(productInCart[0].name);
    const url = `http://localhost:5000/uploads/${productInCart[0].productImage}`;
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* {productInCart.map((p, i) => ( */}
        <Paper style={{ height: "5vh", width: "100%" }}>
          <img
            style={{ height: "5vh", width: "20%" }}
            src={url}
            alt={productInCart[0].name}
          />
          <Typography>{productInCart.name}</Typography>
        </Paper>
        {/* ))} */}
      </div>
    );
  } else {
    return <div>Your cart is empty!</div>;
  }
};

export default AddedToCart;
