import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import ItemTable from "./ItemTable";
import {
  Paper,
  Typography,
  Button,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Unique = ({ productInCart, location }) => {
  const [username, setUsername] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
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
  }

  useEffect(() => {
    const { username } = queryString.parse(location.search);
    setUsername(username);
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const orders = finalArr.map((e) => ({
      name: e[0].name,
      productImage: e[0].productImage,
      price: e[0].price,
      quantity: e[1],
    }));

    const customerData = {
      username,
      orders,
    };

    axios
      .post("http://localhost:5000/api/cart", customerData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log({ message: err.response.data });
        console.log({ message: err.response.config });
      });
  };

  if (finalArr.length > 0) {
    return (
      <div style={{ backgroundColor: "whitesmoke", marginTop: "2vh" }}>
        <form onSubmit={handleSubmit}>
          <ItemTable finalArr={finalArr} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link
              to={`/?username=${username}`}
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" color="primary">
                Go Back
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => setOpen(true)}
            >
              Confirm
            </Button>
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {`${
                username.charAt(0).toUpperCase() + username.slice(1)
              }, your order has been placed`}
            </Alert>
          </Snackbar>
        </form>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: "whitesmoke", marginTop: "2vh" }}>
        <Paper
          style={{
            backgroundColor: "whitesmoke",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography style={{ fontWeight: "bold" }}>
            {`${username}, Your Cart is currently empty!`}
          </Typography>
          <Link
            to={`/?username=${username}`}
            style={{ textDecoration: "none" }}
          >
            <IconButton>
              <AddShoppingCart style={{ fontSize: "50px" }} />
            </IconButton>
          </Link>
        </Paper>
      </div>
    );
  }
};

export default Unique;
