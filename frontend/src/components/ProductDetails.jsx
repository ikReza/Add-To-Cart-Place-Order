import React, { useState } from "react";
import {
  Card,
  Typography,
  IconButton,
  Paper,
  Tooltip,
  TextField,
} from "@material-ui/core";
import { FavoriteBorder, AddShoppingCartOutlined } from "@material-ui/icons";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

const useStyles = createUseStyles(() => ({
  size: {
    width: "30%",
    height: "40vh",
    flexGrow: 1,
    margin: "0.5%",
    backgroundColor: "#f0f1f2",
  },
  input1: {
    height: 2,
  },
}));

const ProductDetails = ({ product, onClick, totalQty, setTotalQty }) => {
  const [clicked, setClicked] = useState(false);
  const [qty, setQty] = useState(1);

  const classes = useStyles();
  const url = `http://localhost:5000/uploads/${product.productImage}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    totalQty += qty;
    setQty(1);
    console.log(`TQty ${totalQty}`, typeof qty, typeof totalQty);
  };

  return (
    <Card className={classes.size}>
      <form onSubmit={handleSubmit}>
        <Tooltip title="Favorite">
          <IconButton
            size="small"
            style={{ marginLeft: "80%", marginRight: "10%" }}
            onClick={() => setClicked(!clicked)}
          >
            <FavoriteBorder style={clicked ? { color: "red" } : {}} />
          </IconButton>
        </Tooltip>
        <Tooltip title={product.description} placement="top">
          <Paper align="center">
            <img
              style={{ height: "20vh", width: "70%" }}
              src={url}
              alt={product.name}
            />
          </Paper>
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
              onChange={(e) => setQty(e.target.value)}
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
              ${product.price}
            </Typography>
            <Tooltip title="Add to cart">
              <IconButton type="submit" onClick={() => onClick(product)}>
                <AddShoppingCartOutlined size="small" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default ProductDetails;
