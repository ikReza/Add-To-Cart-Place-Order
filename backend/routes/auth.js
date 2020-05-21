const express = require("express");
const router = express.Router();

const data = require("../data-source");
const Products = require("../models/Products");

router.get("/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;
