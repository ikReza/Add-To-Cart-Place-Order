import React, { useState, useEffect } from "react";
import axios from "axios";

import { Grid, Paper } from "@material-ui/core";

import Navbar from "./Navbar";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Pagination from "./Pagination";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [productInCart, setProductInCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(6);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => console.log({ message: err }));
  }, []);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={12}>
          <Paper>
            <Navbar productInCart={productInCart} />
          </Paper>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs={false} sm={1}></Grid>
          <Grid item xs={12} sm={7}>
            <div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  marginTop: "10vh",
                  height: "75.5vh",
                  //backgroundColor: "#37474f",
                }}
              >
                {currentProducts.map((product) => (
                  <ProductDetails
                    key={product._id}
                    product={product}
                    productInCart={productInCart}
                    setProductInCart={setProductInCart}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Pagination
                  productPerPage={productPerPage}
                  totalProducts={products.length}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper style={{ marginTop: "10.3vh" }}>
              <Cart
                productInCart={productInCart}
                setProductInCart={setProductInCart}
              />
            </Paper>
          </Grid>
          <Grid item xs={false} sm={1}></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
