import React from "react";
import { Paper, Card, Button, Typography } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";

const AddedToCart = ({ productInCart, setProductInCart }) => {
  const removeItem = (item) => {
    const newItem = productInCart.filter((p) => {
      return p !== item;
    });
    setProductInCart([...newItem]);
  };
  //console.log(productInCart.length);
  if (productInCart.length > 0) {
    return (
      <div>
        {productInCart.map((p, i) => (
          <Paper
            style={{ height: "5vh", width: "100%", display: "flex" }}
            key={i}
          >
            <Card
              style={{
                height: "5vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 3,
              }}
            >
              <img
                style={{ height: "5vh", width: "auto" }}
                src={`https://addtocart-placeorder.herokuapp.com/uploads/${p[0].productImage}`}
                alt={p[0].name}
              />
            </Card>
            <Card
              style={{
                height: "5vh",
                flex: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
              }}
            >
              {p[0].name}
            </Card>
            <Card
              style={{
                height: "5vh",
                flex: 1,
                fontSize: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {p[1]}
            </Card>
            <Card
              style={{
                height: "5vh",
                flex: 3,
                fontSize: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ${p[1] * p[0].price}
            </Card>
            <Card
              style={{
                height: "5vh",
                flex: 1,
                fontSize: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button>
                <Cancel
                  style={{
                    color: "#a8180d",
                    height: "15px",
                    paddingLeft: "5%",
                  }}
                  size="small"
                  onClick={() => removeItem(p)}
                />
              </Button>
            </Card>
          </Paper>
        ))}
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "56vh",
        }}
      >
        <Typography style={{ fontWeight: "bold" }}>
          Your cart is empty!
        </Typography>
      </div>
    );
  }
};

export default AddedToCart;
