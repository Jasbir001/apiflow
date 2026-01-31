import { useState } from 'react'
import  Register  from './auth/Register'
import AllUsers from './pages/AllUsers'
import AppRoute from './routes/AppRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
    <div className=" w-lg bg-amber-300 p-24 mx-auto mt-10">
     <AppRoute />
    </div>
    </AuthProvider>
    </>
  )
}

export default App   