const Product = require("../models/Product");
const mongoose = require("mongoose");

//Controller to get all the products
exports.get_all_products = (req, res, next) => {
    Product.find()
        .select("_id name quantity")
        .exec()
        .then((docs) => {
            const response = {
                products: docs.map((doc) => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        quantity: doc.quantity,
                    };
                }),
            };
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            });
        });
};

//Controller to create new products
exports.create_products = (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        quantity: req.body.quantity,
    });

    product
        .save()
        .then((result) => {
            console.log(result);
            res.status(200).json({
                data: {
                    product: {
                        name: result.name,
                        quantity: result.quantity,
                    },
                },
            });
        })
        .catch((err) => {
            console.log(err);
            res.send(500).json({ error: err });
        });
};

//Controller to delete a product based on it's ID
exports.delete_product = (req, res, next) => {
    const id = req.params.id;
    Product.remove({ _id: id })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: "Product deleted",
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

//Controller to update the quantity based on it's ID
exports.update_product = async (req, res, next) => {
    const id = req.params.id;
    const newName = await Product.findOne({ _id: id }).select("name");
    Product.updateOne({ _id: id }, { $set: { quantity: req.body.quantity } })
        .exec()
        .then((result) => {
            res.status(200).json({
                data: {
                    product: {
                        id: req.params.id,
                        name: newName.name,
                        quantity: req.body.quantity,
                    },
                },
                message: "Product updated",
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
};
