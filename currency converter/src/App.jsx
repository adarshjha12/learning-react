import { useState } from 'react'

import './App.css'
import Input from './components/Input'
import FetchCurrencyData from './hooks/currencyConverter'

function App() {

 const [amount, setAmount] = useState(0)
 const [from, setFrom] = useState('usd')
 const [to, setTo] = useState('Inr')
 const [convertedAmount, setConvertedAmount] = useState(0)

 const currencyInfo = FetchCurrencyData(from)
 const options = Object.keys(currencyInfo)

 const swap = () =>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }

 const convert = () =>{
  setConvertedAmount(amount * currencyInfo[to])
 }
  return (
    <>
      <div className=' border-4 rounded-md border-white'>
        <div className='p-6 bg-gray-50/50'>
        <form action="" onSubmit={(e) =>{
              e.preventDefault()
              convert()
            }}>
              <Input 
              label={'from'} 
              amount={amount} 
              onAmountChange={(amount) => setAmount(amount)} 
              currencyOptions={options} 
              onCurrencyChange={(currency) => setFrom(currency)} 
              selectCurrency={from}>

              </Input>
              <button className='absolute -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-md px-2 py-1 border-2 border-white' onClick={swap}>Swap</button>
              <Input 
              label={'to'}
               amount={convertedAmount}
                currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                   selectCurrency={to}>

                   </Input>
              <button className='mt-2 px-8 py-2 bg-blue-600 text-white rounded-md text-xl font-bold'> Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>

        </div>
      </div>

    </>
  )
}

export default App
