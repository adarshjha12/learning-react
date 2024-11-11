import React from 'react'

function Input({
    label,
    className = '',
    currency,
    selectCurrency,
    amount,
    onAmountChange,

}) {


  return (
    <>
        <div className=' rounded-md bg-white flex justify-between px-8 py-4 flex-wrap mb-2'>
            <div className='flex flex-col items-start'>
                <label htmlFor="text" className='text-black '>{label}</label>
                <input type="number" value={amount} onChange={() => onAmountChange && onAmountChange()} name='text' className='rounded-sm pl-2 border-none outline-none'/>
            </div>
            <div>
                <label htmlFor="text" className='text-black mt-2'>Currency Type</label>
                <br />
                <select name="currency" id="currency" className='rounded-md bg-slate-200 px-3 py-1'> 
                    <option value="usd">usd</option>
                    <option value="usd">inr</option>
                    <option value="usd">aud</option>
                </select>
            </div>

        </div>
    </>
  )
}

export default Input