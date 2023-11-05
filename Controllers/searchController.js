const productModel=require("../Models/productModel")

const searchController=async(req,res)=>{
          try{
                 var search=""
                 if(req.query.search){
                    search=req.query.search
                 }
                 
                 const userData=await productModel.find({
                    $or:[
                        {name:{$regex:".*"+search+".*",$options:"i"}}
                    ]
                 })

                 res.status(200).json({success:true,message:"data searched by you",data:userData,totalItem:userData.length})
          }catch(err){
            res.status(400).json({success:false,message:"Search controller error"})
          }
}
module.exports=searchController