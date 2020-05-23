import React from "react";
import { AppBar, Toolbar, Typography, Button, Paper } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import AddedToCart from "./AddedToCart";

const Cart = ({ productInCart, setProductInCart, setTotalQty }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setProductInCart([]);
    setTotalQty(0);
    //console.log(`array: ${productInCart.length}`);
  };
  let total = 0;
  if (productInCart.length > 0) {
    productInCart.map((p) => {
      total += p[0].price * p[1];
    });
  }
  //console.log(productInCart);

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#37474f" }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "2%",
            paddingRight: "2%",
          }}
        >
          <Typography variant="h6">Your Cart</Typography>
          <form onSubmit={handleSubmit}>
            <Button
              type="submit"
              style={{ color: "white", textTransform: "none" }}
            >
              <DeleteForever size="small" />
              Clear
            </Button>
          </form>
        </Toolbar>
      </AppBar>
      <Paper style={{ height: "61vh", overflow: "auto" }}>
        <AddedToCart productInCart={productInCart} />
      </Paper>
      <AppBar position="static" style={{ backgroundColor: "#37474f" }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "2%",
            paddingRight: "2%",
          }}
        >
          <Button size="small" variant="contained" color="primary">
            Place Order
          </Button>
          <Typography>{`Total: $${total.toFixed(2)}`}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Cart;
