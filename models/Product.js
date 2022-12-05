const mongoose = require("mongoose");

//productSchema
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
