const Product = require("../model/product");
exports.getProduct = (req, res) => {
    res.render("form", {title: "Add Product Form"});
};

exports.postProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.send("Saved");
};

exports.fetchProduct = (req, res) => {
    const products = Product.fetchAll();
    res.render("products", {products});
}