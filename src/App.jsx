import { useState } from 'react'


import  Register  from './auth/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=" w-lg bg-amber-300 p-24 mx-auto mt-10">
     <Register/>
    </div>
    </>
  )
}

export default App
