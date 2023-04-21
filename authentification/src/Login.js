import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
function Login() {

const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const postData = () => {
        fetch("http://localhost:4568/login", {
            method: "post",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
             

                if (data) {
                    alert("User login successfully!");
                    localStorage.setItem("token", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
               
navigate("/home")


                } else {
                    alert(`${data.error}`);
                }
            })

    }



    return (
        <div>
<input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} style={{width:"500px",marginBottom:"20px"}}/><br />
<input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"500px",marginBottom:"20px"}}/><br />
                    <button className="btn waves-effect waves-light" onClick={() => postData()}>Login

                    </button>

               
        </div>
    )
}

export default Login
