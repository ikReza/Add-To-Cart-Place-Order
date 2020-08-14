import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Unique from "./components/unique/Unique";

function App() {
  const [productInCart, setProductInCart] = useState([]);

  return (
    <Router>
      <Route
        path="/"
        render={(props) => <Navbar productInCart={productInCart} {...props} />}
      />
      <Route
        path="/"
        exact
        render={(props) => (
          <Home
            {...props}
            productInCart={productInCart}
            setProductInCart={setProductInCart}
          />
        )}
      />
      <Route
        path="/confirm"
        render={(props) => <Unique {...props} productInCart={productInCart} />}
      />
    </Router>
  );
}

export default App;
