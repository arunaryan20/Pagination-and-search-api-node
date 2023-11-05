const express=require("express")
const app=express()
require("dotenv").config()
const PORT=process.env.PORT
const db=require("./Config/db")
db()
const productRouter=require("./Routes/productRoutes")
const searchRouter=require("./Routes/searchRoutes")

app.use(express.json())
app.use("/api",productRouter)
app.use("/search-api",searchRouter)

app.listen(PORT)



