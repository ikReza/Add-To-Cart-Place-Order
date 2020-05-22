const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

//DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(`DB connection error: ${err.message}`);
  });

//Middlewares
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use("/api", require("./routes/auth"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port no ${port}`);
});
