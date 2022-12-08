const express =require("express");
const router = express.Router();

// controllers
const {downloadImg}=require("../controllers/GET")

// Routes
router.get("/downloadImg",downloadImg);


module.exports= router;