import React, { useState } from "react";
import {
  Card,
  Typography,
  IconButton,
  Tooltip,
  TextField,
} from "@material-ui/core";
import { FavoriteBorder, AddShoppingCartOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  size: {
    width: "30%",
    height: "32.4vh",
    flexGrow: 1,
    margin: "0.5%",
    backgroundColor: "#DEF2F1",
  },
  input1: {
    height: 2,
  },
  customHoverFocus: {
    "&:hover, &.Mui-focusVisible": { backgroundColor: "#e8c051" },
  },
}));

const ProductDetails = ({ product, productInCart, setProductInCart }) => {
  const [clicked, setClicked] = useState(false);
  const [qty, setQty] = useState(1);

  const classes = useStyles();
  const url = `http://localhost:5000/uploads/${product.productImage}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [product, qty * 1];
    setProductInCart([...productInCart, data]);
    setQty(1);
  };

  return (
    <Card className={classes.size}>
      <form onSubmit={handleSubmit}>
        <Tooltip title="Favorite">
          <IconButton
            size="small"
            style={{ marginLeft: "80%", marginRight: "10%", height: "3vh" }}
            onClick={() => setClicked(!clicked)}
          >
            <FavoriteBorder
              style={
                clicked
                  ? { color: "red", height: "2.8vh" }
                  : { height: "2.8vh" }
              }
            />
          </IconButton>
        </Tooltip>
        <Tooltip title={product.description} placement="top">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                height: "15.5vh",
                width: "85%",
              }}
              src={url}
              alt={product.name}
            />
          </div>
        </Tooltip>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography style={{ padding: "1%" }} variant="caption">
            {product.name}
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography
              style={{ marginRight: "2%", paddingLeft: "1%", fontSize: 12 }}
            >
              Qty.
            </Typography>
            <TextField
              type="number"
              size="small"
              value={qty}
              onInput={(e) => setQty(e.target.value)}
              InputProps={{
                inputProps: { min: 1 },
                disableUnderline: true,
                style: { fontSize: 15, width: "25%" },
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "2%",
              paddingRight: "2%",
            }}
          >
            <Typography style={{ fontWeight: "bold" }}>
              ${product.price.toFixed(2)}
            </Typography>
            <Tooltip title="Add to Cart" placement="top" arrow>
              <IconButton type="submit" className={classes.customHoverFocus}>
                <AddShoppingCartOutlined
                  size="small"
                  style={{ height: "3vh" }}
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default ProductDetails;
