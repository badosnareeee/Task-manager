const express = require("express")
const router = express.Router()
const {
    getAllProductsStatic,
    createProducts,
    getProducts,
    updateProducts,
    deleteProducts
} = require("../controllers/products")

router.get("/static", getAllProductsStatic)
router.get("/", getProducts),
router.post("/",createProducts);
router.patch("/:ID",updateProducts)
router.delete("/:ID",deleteProducts)

module.exports = router

