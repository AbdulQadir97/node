const express = require("express");
const productsController = require("../controller/product");
const path = require("path");
const router = express.Router();
router.get('/', productsController.fetchProduct)
router.get("/form", productsController.getProduct)
router.post("/form", productsController.postProduct)

module.exports = router


