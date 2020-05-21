import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#37474f" }}>
      <Toolbar>
        <Typography variant="h6">Add-To-Cart-Place-Order</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
