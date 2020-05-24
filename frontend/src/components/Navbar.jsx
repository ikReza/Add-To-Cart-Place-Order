import React from "react";

import { AppBar, Toolbar, Typography, Badge } from "@material-ui/core";
import { ChildCare, ShoppingCart } from "@material-ui/icons";

const Navbar = ({ productInCart }) => {
  let total = 0;
  if (productInCart.length > 0) {
    productInCart.map((p) => {
      total += p[1];
      return total;
    });
  }
  //console.log(totalQty);
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#2C3531" }}>
      <Toolbar>
        <ChildCare style={{ flexGrow: 0.5 }} />
        <Typography variant="h6" style={{ flexGrow: 11 }}>
          Kids Store
        </Typography>
        <div style={{ flexGrow: 0.5 }}>
          <Badge badgeContent={total} color="secondary">
            <ShoppingCart />
          </Badge>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
