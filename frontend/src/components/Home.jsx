import React, { useState, useEffect } from "react";
import axios from "axios";

import { Grid, Paper } from "@material-ui/core";

import Navbar from "./Navbar";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      //.then((res) => setProducts(res.data))
      .then((res) => console.log(res.data));
  }, []);

  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={12} sm={12}>
        <Paper>
          <Navbar />
        </Paper>
      </Grid>
      <Grid item container spacing={1}>
        <Grid item xs={false} sm={1}></Grid>
        <Grid item xs={12} sm={7}>
          <Paper>
            2<ProductDetails />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper>
            3<Cart />
          </Paper>
        </Grid>
        <Grid item xs={false} sm={1}></Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
