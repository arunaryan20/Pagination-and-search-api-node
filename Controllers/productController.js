const productModel=require("../Models/productModel")


const createProductController=async(req,res)=>{
         try{
               const {name,descryption}=req.body
               if(!name || !descryption){
                res.status(400).json({success:false,message:"All the fields are required"})
               }
               const image=req.file.originalname
               const result=await productModel.create({name:name,descryption:descryption,image:image})
               res.status(200).json({success:true,message:"product created successfully",data:result}) 
         }catch(err){
            res.status(400).json({status:false,message:'create product controller error',error:err})
         }
}
const getProductController=async(req,res)=>{
        try{
                var page=1;
                if(req.query.page){
                    page=req.query.page
                }
                var limit=2
               const result=await productModel.find().limit(limit*1).skip((page-1)*limit).exec()
               res.status(200).json({success:true,message:"These are all data",data:result,totalItem:result.length})
        }catch(err){
            res.status(400).json({status:false,message:'get product controller error'})
        }
}

module.exports={createProductController,getProductController}