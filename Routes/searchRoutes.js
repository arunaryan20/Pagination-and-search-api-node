const express=require("express")
const searchRouter=express.Router()
const searchController=require("../Controllers/searchController")

searchRouter.get("/my-data",searchController)

module.exports=searchRouter