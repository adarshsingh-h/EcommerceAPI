const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.get("/", ProductController.get_all_products);

router.post("/create", ProductController.create_products);

router.delete("/:id", ProductController.delete_product);

router.patch("/:id", ProductController.update_product);

module.exports = router;
