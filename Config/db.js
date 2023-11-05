const mongoose=require("mongoose")

const dbConnect=()=>{
       try{
            mongoose.connect(process.env.URL)
            console.log("connected to database")    
       }catch(err){
           console.log("database connection error") 
       }
}
module.exports=dbConnect
