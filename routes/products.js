const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

//Get Products Route
router.get("/", ProductController.get_all_products);

//Create Products Route
router.post("/create", ProductController.create_products);

//Delete Product
router.delete("/:id", ProductController.delete_product);

//Update Quantity of a Product
router.patch("/:id", ProductController.update_product);

module.exports = router;
