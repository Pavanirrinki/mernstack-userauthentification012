const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const devuser =require ("./models/users")
const path = require("path")

const jwt = require("jsonwebtoken")
const middleware = require("./middleware")
const bodyParser = require('body-parser');


const app = express()

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://pavankumarirrinki:6302929228@cluster0.nibkqsh.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then
(()=>console.log("DB CONNECTED8"))




app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './authentification/build'))) 
app.use(cors({
    origin:"*"
}))


app.get("*",function(req,res){
    res.sendFile((path.join(__dirname, './authentification/build')))
})
app.get("/",(req,res)=>{
    return res.send("hello haiii")
})

app.post("/register",async(req,res)=>{
    try{
const {name,email,password} = req.body;
const exist = await devuser.findOne({email}) 
if(exist){
    return res.status(400).send("users already exists")
}
let newuser = new devuser({name:name,email:email,password:password})
newuser.save()
return res.status(200).json({newuser})
    }
    catch(error){
console.log(error)
return res.status(500).send('server error')
    }
})

 app.post("/login",async(req,res)=>{
    try{
 const {email,password} = req.body;
 console.log(email,password)
 const exist = await devuser.findOne({email})
 if (!exist){
    return res.status(400).send("user not exist")
 }if(exist.password !== password){
    
    return res.status(400).send("password not exist")
 }
let payload={ 
    user:{
        id:exist.id
    }
   
}

jwt.sign(payload,"jwtpassword",(error,token)=>{
 if(error) throw error
 const {_id,name,email} = exist

 return res.json({token,user:{_id,name,email}})

})
    }  catch(error){
        console.log(error)
        return res.status(500).send('server error')
            }
 })
 app.listen(4568,()=>{
    return console.log("server running")
})