const express = require("express");
const app = express();
const productRoutes = require("./routes/products");
const mongoose = require("mongoose");

//MongoDB connection
mongoose
    .connect(
        "mongodb+srv://AdarshSingh:" +
            process.env.MONGO_ATLAS_PW +
            "@cluster0.fvwhuy7.mongodb.net/?retryWrites=true&w=majority"
    )
    .catch((err) => console.log(err));

app.use(express.json());

//Product Route
app.use("/products", productRoutes);

app.listen(8080);
