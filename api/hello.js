const express=require("express");
const app=express();
app.get("/api/hello",(req,res)=>{
    res.json("{john:does}");
})
module.exports=app;