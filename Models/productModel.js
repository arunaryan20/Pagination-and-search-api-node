const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide product name"]
    },
    descryption:{
        type:String,
        required:[true,"Please provide descryption"]
    },
    image:{
        type:String,
        required:[true,"Please upload an Image"]
    }
},
{
    timestamps:true
})
module.exports=mongoose.model("Product",productSchema)