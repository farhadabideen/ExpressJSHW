

exports.urlQuery=async(req,res)=>{
    let fName = req.query.fName;
    let lName = req.query.lName;
    res.send(fName + " " + lName)
};


exports.headerProperties=async(req,res)=>{
    let fName = req.header("fName");
    let lName = req.header("lName");
    res.send(fName + " " + lName)
};

exports.bodyProperties=async(req,res)=>{
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.send(jsonString)
};