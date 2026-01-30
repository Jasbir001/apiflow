import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';

const EditUser = () => {


    const {fetchUserById, updateUserById} = useContext(AuthContext);
    const{userid} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
    });
   

    

    

    const inputHandler = (e)=>{
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const submitHandler = async ()=>{
        await updateUserById({
        ...formData,
        id: userid
    });
    
    }

    useEffect(() => {
    const fetchUser = async () => {
    const user = await fetchUserById(userid);
    setFormData(user);
  };
  fetchUser();
}, [userid]);


  return (
         <div className="p-6 bg-white">Register
        <div className="mb-3">
            <label>Username</label>
            <input type="text" name="username" onChange={inputHandler} className="h-10 p-3 w-full" value={formData.username}/>
        </div>
        <div className="mb-3">
            <label>Email</label>
            <input type="text" name="email" onChange={inputHandler} className="h-10 p-3 w-full" value={formData.email} />
        </div>
        <div className="mb-3">
            <label>Password</label>
            <input type="password" name="password" onChange={inputHandler} className="h-10 p-3 w-full" value={formData.password} />
        </div>
        <button onClick={submitHandler} className="py-3 px-8 bg-amber-500 text-white">Submit</button>
    </div>
  )
}

export default EditUser