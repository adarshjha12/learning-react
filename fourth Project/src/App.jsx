import { useState, useCallback } from 'react'
 
import './App.css'

function App() {
  const [length, setlength] = useState(9)
  const [password, setPassword] = useState("")
  const [charAllowed, setCharAllowed] = useState(false)
  const [numAllowed, setNumAllowed] = useState(false)

  

  const passwordGenerator = useCallback(() =>{
    let pass
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numAllowed) string += '0123456789'
    if (charAllowed) string += "!@#$%^&*()[]{};:,.<>/?\|+=-_`~"
    
    for (let i = 0; i <= length; i++) {
      const randomValue = Math.floor(Math.random() * length) + 1
      console.log(randomValue);

       pass = string.charAt(randomValue)
    }

  }, [length, charAllowed, numAllowed])

  return (
    <>
      <h1 className='text-white rounded-2xl px-5 py-2 bg-purple-600 text-3xl font-bold'> password generator</h1>

      <div className='text-white h-48  px-2 py-10 border rounded-2xl'>
        <input className='outline-none border-none py-1 my-6 rounded-l-md' type='text' readOnly></input>
        <button className='text-white rounded-r-md py-1 px-3 bg-slate-500'>copy</button>
        <br/>

        <input className='mx-2 ' type='range' min={0}  max={100}/>
        <span>length ( {length} )</span>
        <input className='mx-2 w-5 h-5' type='checkbox'/><label htmlFor="">number</label>
        <input className='mx-2 h-5 w-5' type='checkbox'/><label htmlFor="">characters</label>
      </div>
      
    </>
  )
}

export default App
