const express = require("express");
const router = express.Router();

const data = require("../data-source");

router.get("/products", (req, res) => {
  res.json(data.products);
});

module.exports = router;
