import { useState } from 'react'

import './App.css'
import FetchCurrency from './hooks/fetchData'
import InputComponent from './components/inputComponent';

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = FetchCurrency(from)

  let options = Object.keys(currencyInfo)

  const swap = () =>{
    const temp = from
    setFrom(to)
    setTo(temp)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount( amount * currencyInfo[to])
  }

  

  return (
    <>
     <div className='text-black grid grid-cols-[1fr,2fr] gap-4 '>
        <div className=''> <img src="https://images.pexels.com/photos/5519470/pexels-photo-5519470.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
        <div style={{backgroundImage: "url('https://images.pexels.com/photos/3734845/pexels-photo-3734845.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundSize: 'cover'}} className='border-2 bg-gradient-to-t from-black via-transparent to-transparent relative rounded-md flex justify-center items-center'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()

          }} action="" className='py-6 bg-black/50'>
              <InputComponent
              label='from'
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
              currencyOptions={options}
              selectCurrency={from}
              >

              </InputComponent>
              <button type='button' className='bg-blue-600 border-2 border-white text-white rounded-md px-4 py-1 font-extrabold text-xl' onClick={swap}>swap</button>
              <InputComponent
              label='to'
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              currencyOptions={options}
              selectCurrency={to}
              ></InputComponent>
              <button type='submit' className='bg-blue-600 border-2 border-white text-white rounded-md px-4 py-1 font-extrabold text-xl'>convert {from.toUpperCase()} to {to.toUpperCase()}</button>

          </form>
        </div>
     </div>
    </>
  )
}

export default App
