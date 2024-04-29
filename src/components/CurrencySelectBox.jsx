import React from 'react'

function CurrencySelectBox({
  label,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "npr"
}) {
  return (
    <div>
       
       <label className='font-semibold'>{label}</label>

       <div>
        <select
        className='w-full p-2 rounded-md font-semibold'
        name="" id=""
        value={selectCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        >


        {currencyOption.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}

          

        </select>
       </div>

    </div>
  )
}

export default CurrencySelectBox;