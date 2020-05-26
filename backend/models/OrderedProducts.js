const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String },
  productImage: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

const customerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  orders: [orderSchema],
});

module.exports = mongoose.model("Customer", customerSchema);
