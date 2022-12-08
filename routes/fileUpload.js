const express =require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination:function (req, file, callBack){
        callBack(null,'./uploadImages') //physical path
    },
    filename:function (req, file, callBack){
        callBack(null,file.originalname)
    }
})

const upload = multer({
    storage:storage,
    fileFilter: function (req, file, callback) {
        if(!file.originalname.match(/\.(png|jpg)$/)) {
            return callback(new Error('Only png|jpg are allowed'))
        }
        callback(null, true)
    }
}).single('imgFile'); //form-data key Name:imgFile



// Routes
router.post('/imgUpload',function (req,res){
    upload(req,res,function (error){
        if (error){
            res.end("File upload Failed");
        }else {
            res.end("File upload Successful");
        }
    })
})


module.exports= router;

//http://localhost:5000/api/v1/imgUpload --This is file upload Api url
