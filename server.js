const express = require('express');
const bodyParser =require('body-parser');
app = express();
const { readdirSync } = require("fs")


// middlewares
app.use(bodyParser.json());


// DB Connection


// routes
readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`)))


// server
app.listen(5000,function (){
    console.log('Server is running..');
});