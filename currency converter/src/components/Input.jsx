import React, {useId} from 'react'


function Input({
    label,
    className = '',
    selectCurrency = 'usd',
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = []

}) {

   
    

  return (
    <>
        <div  className=' rounded-md bg-white flex justify-between px-8 py-4 flex-wrap mb-2'>
            <div className='flex flex-col items-start'>
                <label htmlFor="text" className='text-black '>{label}</label>
                <input type="number" value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} name='text' className='rounded-sm pl-2 border-none outline-none'/>
            </div>
            <div>
                <label htmlFor="text" className='text-black mt-2'>Currency Type</label>
                <br />
                <select value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} name="currency" id="currency" className='rounded-md bg-slate-200 px-3 py-1'> 
                    
                    {currencyOptions.map( (currency) => (
                        <option key={currency} value={currency}>{currency}</option>

                    ))}
                </select>
            </div>

        </div>
    </>
  )
}

export default Input