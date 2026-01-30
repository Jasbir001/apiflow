import { useContext,useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';
import ConfirmationDialog from '../components/ConfirmationDialog';

const AllUsers = () => {
    const {fetchAllUsers, allUsers} = useContext(AuthContext);
    const [showConfirmDailog, setShowConfirmDialog] =useState(false);
    const [SelectedUserId, setSelectedUserId] = useState(null)
    const navigate = useNavigate();
  
    useEffect(()=>{
      fetchAllUsers();
    },[])

const showUserDetails =(id) =>{
  navigate(`/users/${id}`)
}
 
const editUserDetails = (id)=>{
  navigate(`/users/edit/${id}`)
}


const showDialogBox=(id)=>{
  setShowConfirmDialog(true);
  setSelectedUserId(id)
}
  
const hideDialogBox=()=>{
  setShowConfirmDialog(false);
}

const deleteUser=()=>{
  deleteUserById(SelectedUserId)
  hideDialogBox();
}

  return (
    <div className="grid  gap-3 px-3">
    {
  allUsers.map((user) => (
    <div key={user.id} className="bg-amber-200 text-slate-950 p-4 cursor-pointer">
      <p>Name: {user.username}</p>
      <p>Email: {user.email}</p>

      <div className="mt-4 flex gap-2">
        <button onClick={() => showUserDetails(user.id)} className="px-5 py-2 bg-amber-900 text-white">View</button>

        <button onClick={() => editUserDetails(user.id)} className="px-5 py-2 bg-amber-900 text-white">Edit</button>

        <button onClick={() => showConfirmDailog(user.id)} className="px-5 py-2 bg-red-700 text-white">Delete</button>
      </div>
    </div>
  ))
}

{
  showConfirmDailog && <ConfirmationDialog onCancel={hideDialogBox}>
    <p>Do you want to delete this user</p>
  </ConfirmationDialog>
}

    </div>
  
  )
}

export default AllUsers