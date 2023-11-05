const multer=require("multer")
const upload=multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
        const fileName=file.originalname+".jpg"
        req.file=fileName
        cb(null,fileName)
    }
  })  
}).single("user_file")

module.exports=upload