const express=require("express");
const cors=require("cors");

const data=require("./data.json");
const app=express();
const port=process.env.PORT || 3000;
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Done");

});
app.get('/service',(req,res)=>{
    res.send(data);

});


app.listen(port,()=>{
    console.log("I am live")
})
