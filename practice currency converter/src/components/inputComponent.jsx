
import React from 'react'

function InputComponent({
    label,
    amount,
    onAmountChange,
    selectCurrency = 'inr',
    onCurrencyChange,
    currencyOptions = []

}) {


  return (
    <div className='text-white flex gap-12 px-6 py-4'>
        <div className='flex flex-col'>
            <label htmlFor="input">{label}</label>
            <input type="number" name="input" value={amount} id="input" className='text-white bg-transparent border-2 rounded-md outline-none px-3' onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="currencyBox">currency type</label>
            <select name="currencyBox" id="currencyBox" value={selectCurrency} className='text-black' onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>

                {currencyOptions.map( (currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputComponent

