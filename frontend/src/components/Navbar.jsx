import React from "react";

import { AppBar, Toolbar, Typography, Badge } from "@material-ui/core";
import { ChildCare, ShoppingCart } from "@material-ui/icons";

const Navbar = ({ totalQty }) => {
  console.log(totalQty);
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#37474f" }}>
      <Toolbar>
        <ChildCare style={{ flexGrow: 0.5 }} />
        <Typography variant="h6" style={{ flexGrow: 11 }}>
          Kids Store
        </Typography>
        <div style={{ flexGrow: 0.5 }}>
          <Badge badgeContent={totalQty} color="secondary">
            <ShoppingCart />
          </Badge>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
