const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoute = require("./routes/product");

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoute);

// message for deployment
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from ecommerce!",
  });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successful"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("ecommerce server is listening at port 5000");
});
