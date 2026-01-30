import React from 'react'
import  AuthContext  from '../context/AuthContext';
import { useContext, useState,useEffect } from 'react';
import { useParams } from 'react-router';


const UserDetails = () => {
  const { fetchUserById } = useContext(AuthContext)
  const { userid } = useParams();
  const [user, setUser] = useState("Not find yet ");

  const fetchUser = async()=>{
    const userfetched = await fetchUserById(userid);
    setUser(userfetched)
  };

  useEffect(()=>{
    fetchUser();
  },[userid]) 

  return (
  
    <div className="w-lg bg-amber-40 flex flex-col justify-center items-center p-10">
        <h2 className="text-2xl">Name:{user.username}</h2>
        {/* <p className="">Email: {user?.email}</p> */}
    </div>
    
  )
}

export default UserDetails