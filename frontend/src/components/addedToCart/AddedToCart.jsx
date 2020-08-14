import React from "react";
import { Paper, Card, Button, Typography } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import { useStyles } from "./styles";

const AddedToCart = ({ productInCart, setProductInCart }) => {
  const classes = useStyles();
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
          <Paper className={classes.container} key={i}>
            <Card className={classes.imgCard}>
              <img
                className={classes.productImg}
                src={`https://addtocart-placeorder.herokuapp.com/uploads/${p[0].productImage}`}
                alt={p[0].name}
              />
            </Card>
            <Card className={classes.nameCard}>{p[0].name}</Card>
            <Card className={classes.qtyCard}>{p[1]}</Card>
            <Card className={classes.totalPriceCard}>${p[1] * p[0].price}</Card>
            <Card className={classes.qtyCard}>
              <Button>
                <Cancel
                  className={classes.btn}
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
      <div className={classes.emptyContainer}>
        <Typography style={{ fontWeight: "bold" }}>
          Your cart is empty!
        </Typography>
      </div>
    );
  }
};

export default AddedToCart;
