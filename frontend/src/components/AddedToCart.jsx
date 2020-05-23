import React from "react";
import { Paper, Card } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";

const AddedToCart = ({ productInCart }) => {
  //console.log(productInCart.length);
  if (productInCart.length > 0) {
    //console.log(productInCart[0].name);
    //const url = `http://localhost:5000/uploads/${productInCart[0].productImage}`;
    return (
      <div>
        {productInCart.map((p, i) => (
          <Paper
            style={{ height: "5vh", width: "100%", display: "flex" }}
            key={i}
          >
            <Card style={{ height: "5vh", flex: 1 }}>
              <img
                style={{ height: "5vh", width: "auto" }}
                src={`http://localhost:5000/uploads/${p[0].productImage}`}
                alt={p[0].name}
              />
            </Card>
            <Card
              style={{
                height: "5vh",
                flex: 2,
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
                flex: 1,
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
              <Cancel style={{ color: "#a8180d" }} />
            </Card>
          </Paper>
        ))}
      </div>
    );
  } else {
    return <div>Your cart is empty!</div>;
  }
};

export default AddedToCart;
