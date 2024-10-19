import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const value = useState(c)

// let counter = 11

const addValue = function (params) {
  counter = counter + 1

  console.log(counter);
  
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h1>counter {counter}</h1>
      <button onClick={addValue}> add value</button>
    </div>
  </StrictMode>,
)
