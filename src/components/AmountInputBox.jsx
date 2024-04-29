import React from 'react'

function AmountInputBox({
  amount,
  onAmountChange

}) {
  return (
    <div>
      <input 
            className='p-2 rounded-md w-full font-semibold text-black'
            type="number" 
            placeholder='Amount'
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
      />
    </div>
  )
}

export default AmountInputBox