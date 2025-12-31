import React from 'react'
import axios from 'axios'




const getStudents=()=>{
    axios.get("http://localhost:2000/get-students").then(res=>console.log(res.datanpp))
                 .catch(err=>console.log(err)) 
}

const Api = () => {
  return (
    <>
        <h1>Hi from the frontend</h1>
        <button onClick={getStudents}>Get</button>
    </>
  )
}

export default Api