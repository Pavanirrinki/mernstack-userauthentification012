import React from 'react'

function Home() {
    const data = localStorage.getItem("token")
    const user = localStorage.getItem(("user"))
    const parsedObject = JSON.parse(user);
  return (
    <div>
 <h1>Token:</h1><span>{data && data}</span>
 <h1>Name:</h1><span><h3>{parsedObject?.name}</h3></span>
 <h1>email:</h1><span><h3>{parsedObject?.email}</h3></span>
    </div>
  )
}

export default Home
