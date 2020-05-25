import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Unique from "./components/Unique";

function App() {
  const [productInCart, setProductInCart] = useState([]);
  return (
    <div>
      <Navbar productInCart={productInCart} />
      <Router>
        <Route
          path="/"
          exact
          component={() => (
            <Home
              productInCart={productInCart}
              setProductInCart={setProductInCart}
            />
          )}
        />
        <Route
          path="/confirm"
          component={() => <Unique productInCart={productInCart} />}
        />
      </Router>
    </div>
  );
}

export default App;
