import React from 'react'

const ConfirmationDialog = ({children, onConfirm, onCancel}) => {
  return (
  
    <div className=".w-full max-w-lg fixed left-1/2 top-1/2 -translate-1/2 bg-amber-300 shadow-xl">
     
        <div className="flex items-center justify-end gap-3">
            <button className="bg-green-800 px-4 py-1 text-white">Confirm</button>

            <button className="bg-red-800 px-4 py-1 text-white"></button>

        </div>
    </div>

)
}

export default ConfirmationDialog


// user deleting page take confirmation 