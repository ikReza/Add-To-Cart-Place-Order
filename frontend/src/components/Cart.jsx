import React from "react";
import { AppBar, Toolbar, Typography, Button, Paper } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import AddedToCart from "./AddedToCart";

const Cart = ({ productInCart }) => {
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "2%",
            paddingRight: "2%",
          }}
        >
          <Typography variant="h6">Your Cart</Typography>
          <Button>
            <DeleteForever size="small" />
            Clear
          </Button>
        </Toolbar>
      </AppBar>
      <Paper style={{ height: "62vh" }}>
        <AddedToCart productInCart={productInCart} />
      </Paper>
      <AppBar position="static" color="transparent">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "2%",
            paddingRight: "2%",
          }}
        >
          <Button size="small" variant="contained" color="primary">
            Place Order
          </Button>
          <Typography>Total: </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Cart;
