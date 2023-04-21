
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
const navigate = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

 

 const uploadfields =() =>{  fetch("http://localhost:4568/register",{
  method:"post",
  headers:{
    "content-Type":"application/json"
  },
  body:JSON.stringify({
    name,
    email,
    password
  })
}).then(res=>{
 
  if(res.ok && setEmail !== '' && setName !== "" && !setPassword !== ''){
    alert("User successfully added!")
        setName("")
        setEmail("")
        setPassword("")
 navigate("/login")
    
  }else{
    res.text().then(function(text) {
      alert(text);
    });
  }
}).catch(error=>(error))
}

const postData =() =>{
uploadfields()
  
}

  return (
    <div >
  
     <br/>
     <input type="text"  placeholder='name' value={name}  onChange={(e)=>setName(e.target.value)} style={{width:"500px",marginBottom:"20px"}}/><br />
        <input type="email"  placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} style={{width:"500px",marginBottom:"20px"}}/><br />
        <input type="password"  placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{width:"500px",marginBottom:"20px"}}/><br />
        
           
        <button className="btn waves-effect waves-light" onClick={()=>postData()}>Signup
  
  </button>
        
        
      </div>
  )
}

export default Signup
