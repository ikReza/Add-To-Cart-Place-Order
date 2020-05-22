import React, { useState } from "react";
import {
  Card,
  Typography,
  IconButton,
  Paper,
  Tooltip,
} from "@material-ui/core";
import { FavoriteBorder, AddShoppingCartOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  size: {
    width: "30%",
    height: "40vh",
    flexGrow: 1,
    margin: "0.5%",
  },
}));

const ProductDetails = ({ product }) => {
  const [clicked, setClicked] = useState(false);
  const classes = useStyles();
  const url = `http://localhost:5000/uploads/${product.productImage}`;

  return (
    <Paper className={classes.size}>
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
        <Card align="center">
          <img
            style={{ height: "20vh", width: "70%" }}
            src={url}
            alt={product.name}
          />
        </Card>
      </Tooltip>
      <Typography style={{ padding: "1%" }} variant="caption">
        {product.name}
      </Typography>
      <Typography style={{ padding: "1%" }} variant="body2">
        Quantity
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "2%",
          paddingRight: "2%",
        }}
      >
        <Typography>${product.price}</Typography>
        <Tooltip title="Add to cart">
          <IconButton>
            <AddShoppingCartOutlined size="small" />
          </IconButton>
        </Tooltip>
      </div>
    </Paper>
  );
};

export default ProductDetails;
