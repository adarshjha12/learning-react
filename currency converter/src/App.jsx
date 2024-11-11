import { useState } from 'react'

import './App.css'
import Input from './components/Input'

function App() {
  const [count, setCount] = useState(0)

  const link = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'

 

  return (
    <>
      <div className=' border-4 rounded-md border-white'>
        <div className='p-6 bg-gray-50/50'>
        <Input></Input>
        <Input></Input>
        <button className='mt-2 px-8 py-2 bg-blue-600 text-white rounded-md text-xl font-bold'> Convert Usd to Inr</button>

        </div>
      </div>

    </>
  )
}

export default App
