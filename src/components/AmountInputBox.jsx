import React from 'react'

function AmountInputBox() {
  return (
    <div>
      <input 
            className='p-2 rounded-md w-full font-semibold text-black'
            type="number" 
            placeholder='Amount'
      />
    </div>
  )
}

export default AmountInputBox