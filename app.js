const express = require("express");
const app = express();
const productRoutes = require("./routes/products");
const mongoose = require("mongoose");
require("dotenv").config();

//MongoDB connection
mongoose
    .connect(process.env.MONGO_ATLAS_PW, {})
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => console.log(err));

app.use(express.json());

//Product Route
app.use("/products", productRoutes);

app.listen(8080);
