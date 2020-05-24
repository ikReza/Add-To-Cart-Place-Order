import React, { useState } from "react";
import Modal from "react-modal";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Paper,
  TextField,
} from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import AddedToCart from "./AddedToCart";

Modal.setAppElement("#root");
const Cart = ({ productInCart, setProductInCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setProductInCart([]);
    //console.log(`array: ${productInCart.length}`);
  };
  let total = 0;
  if (productInCart.length > 0) {
    productInCart.map((p) => {
      total += p[0].price * p[1];
      return total;
    });
  }
  //console.log(productInCart);

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#116468" }}>
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
              style={{ color: "#C3073F", textTransform: "none" }}
              variant="contained"
              size="small"
            >
              <DeleteForever size="small" />
              Clear
            </Button>
          </form>
        </Toolbar>
      </AppBar>
      <Paper style={{ height: "56vh", overflow: "auto" }}>
        <AddedToCart
          productInCart={productInCart}
          setProductInCart={setProductInCart}
        />
      </Paper>
      <AppBar position="static" style={{ backgroundColor: "#116468" }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "2%",
            paddingRight: "2%",
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => setIsOpen(true)}
            style={{ textTransform: "none" }}
          >
            Place Order
          </Button>
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                height: "50vh",
                width: "50%",
              },
            }}
          >
            <Button onClick={() => setIsOpen(false)}>x</Button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <Typography style={{ padding: "1%" }}>
                Thank you! Please provide us your name and email. We'll contact
                soon
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                style={{ padding: "1%", width: "60%" }}
              />
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                style={{ padding: "1%", width: "60%" }}
              />
              <Button
                onClick={() => setIsOpen(false)}
                variant="outlined"
                color="primary"
              >
                Submit
              </Button>
            </div>
          </Modal>
          <Typography>{`Total: $${total.toFixed(2)}`}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Cart;
