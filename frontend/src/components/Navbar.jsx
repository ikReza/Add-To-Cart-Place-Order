import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

import { AppBar, Toolbar, Typography, Badge } from "@material-ui/core";
import { ChildCare, ShoppingCart } from "@material-ui/icons";

const Navbar = ({ productInCart, location }) => {
  const [username, setUsername] = useState("");
  let total = 0;
  if (productInCart.length > 0) {
    productInCart.map((p) => {
      total += p[1];
      return total;
    });
  }

  useEffect(() => {
    const { username } = queryString.parse(location.search);
    setUsername(username);
    //console.log(typeof username, username);
  }, [location.search]);
  //console.log(totalQty);
  return (
    <AppBar position="static" style={{ backgroundColor: "#2C3531" }}>
      <Toolbar>
        <ChildCare style={{ flexGrow: 0.5 }} />
        <Typography
          component={Link}
          to="/"
          variant="h6"
          style={{ flexGrow: 11, textDecoration: "none", color: "white" }}
        >
          Kids Store
        </Typography>
        <div style={{ flexGrow: 0.5 }}>
          <Link
            to={
              productInCart.length > 0 && typeof username !== "undefined"
                ? `/confirm?username=${username}`
                : "#"
            }
            style={{ textDecoration: "none", color: "white" }}
          >
            <Badge badgeContent={total} color="secondary">
              <ShoppingCart />
            </Badge>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
