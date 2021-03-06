const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

const Product = require("../models/Products");
const Customer = require("../models/OrderedProducts");

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post("/add", upload.single("productImage"), async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    productImage: req.file.filename,
  });
  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post("/cart", async (req, res) => {
  const customer = new Customer({
    username: req.body.username,
    orders: req.body.orders,
  });
  try {
    const savedCustomer = await customer.save();
    res.send(savedCustomer);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;
