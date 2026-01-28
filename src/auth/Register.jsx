import React from 'react'
import { useState } from 'react'

const Register = () => {
   const [formData, setFormData] = useState(null)
    
   const inputHandler = (e)=>{
        const {value, name} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // https://localhost:5000/users - collection 
    // https://localhost:5000/users - for new entry with post method
    // https://localhost:5000/users/1 get single item with get request 
    // https://localhost:5000/users/1 - update single item with put.patch method
    // https://localhost:5000/users/1 delete item with delete method 

    const submitHandler = async ()=>{
        const config = {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch("http://localhost:5001/users",config)
        console.log(response);
        if(response.status === 201 )
        {
        alert("Registration Successsfully")
        }
        else{
            alert("Something Went Wrong")
        }
    }


  return (
    <div className="p-6 bg-white">Register
        <div className="mb-3">
            <label>Username</label>
            <input type="text" name="username" onChange={inputHandler} className="h-10 p-3 w-full"/>
        </div>
        <div className="mb-3">
            <label>Email</label>
            <input type="text" name="email" onChange={inputHandler} className="h-10 p-3 w-full"/>
        </div>
        <div className="mb-3">
            <label>Password</label>
            <input type="password" name="password" onChange={inputHandler} className="h-10 p-3 w-full"/>
        </div>
        <button onClick={submitHandler} className="py-3 px-8 bg-amber-500 text-white">Register</button>
    </div>
  )
}

export default Register