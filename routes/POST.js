const express =require("express");
const router = express.Router();



// controllers
const {urlQuery,headerProperties,bodyProperties}=require("../controllers/POST")



// Routes
router.post("/urlQuery",urlQuery);
router.post("/headerProperties",headerProperties);
router.post("/bodyProperties",bodyProperties);




module.exports= router;