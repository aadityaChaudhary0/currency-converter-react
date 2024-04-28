import React from 'react'

function CountrySelectBox({label}) {
  return (
    <div>
       
       <label className='font-semibold' htmlFor="">{label}</label>

       <div>
        <select
        className='w-full p-2 rounded-md font-semibold'
        name="" id="">


          <option value="">NPR</option>

        </select>
       </div>

    </div>
  )
}

export default CountrySelectBox;