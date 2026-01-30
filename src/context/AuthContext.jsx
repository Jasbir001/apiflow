import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
    const [allUsers, setAllUsers] = useState([]);
    // get all users

    const fetchAllUsers = async ()=>{
        try{
            const response = await fetch("http://localhost:5001/users",{method:"GET"});
            const users = await response.json();
            setAllUsers(users)
        }
        catch(error)
        {
            console.log(error)
        }
    };

//collection/1
// get user by id

const fetchUserById = async(userid) =>{
    try
    {
       const response = await fetch(`http://localhost:5001/users/${userid}`, {method:"GET"})
       const user = await response.json();
       console.log(user)
    }
    catch(error){
        console.log(error)

    }
}


// update user
const updateUserByID = async (formData) =>{

        const config = {
            method: "PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)

        }
        try{
            await fetch(`http://localhost:5001/users/${formData.id}`, config);
            alert("User Update")
        }
        catch(error)
        {
            console.log(error)
        }
    }


    // delete user 
    const deleteUserById = async(userid) =>{
    try
    {
       const response = await fetch(`http://localhost:5001/users/${userid}`, {method:"DELETE"})
       alert("user deleted")
       fetchAllUsers()
    }
    catch(error){
        console.log(error)

    }
}

    return(
    <AuthContext.Provider value={{
        fetchAllUsers,
        fetchUserById,
        allUsers, 
        updateUserByID,
        deleteUserById
    }}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthContext