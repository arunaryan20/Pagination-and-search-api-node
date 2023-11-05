const express=require("express")
const productRouter=express.Router()
const productController=require("../Controllers/productController")
const upload=require("../Middlewares/fileUploadMiddleware")

productRouter.get("/all-product",productController.getProductController)
productRouter.post("/create-product",upload,productController.createProductController)

module.exports=productRouter