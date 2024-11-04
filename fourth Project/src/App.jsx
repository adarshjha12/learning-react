import { useState, useCallback, useEffect } from 'react'
 
import './App.css'

function App() {
  const [length, setlength] = useState(9)
  const [password, setPassword] = useState('')
  const [charAllowed, setCharAllowed] = useState(false)
  const [numAllowed, setNumAllowed] = useState(false)

  

  const passwordGenerator = useCallback(() =>{
    let pass =''
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numAllowed) string += '0123456789'
    if (charAllowed) string += "!@#$%^&*()[]{};:,.<>/?\|+=-_`~"
    
    for (let i = 0; i <= length; i++) {
      const randomValue = Math.floor(Math.random() * string.length + 1)

      pass += string.charAt(randomValue)
      console.log(pass);

    }

    setPassword(pass)

  }, [length, charAllowed, numAllowed, setPassword])

  let effect = useEffect( () => passwordGenerator(), [length, charAllowed, numAllowed])
  return (
    <>
      <h1 className='text-yellow-500 rounded-md my-4 pb-2 px-5 text-3xl font-bold'> password generator</h1>

      <div className='w-6/12 bg-yellow-600 px-2 py-4 border rounded-md'>
        <input className='ml-16 outline-none border-2 border-gray-700 bg-transparent text-black py-1 px-2 my-6 rounded-l-md ' readOnly type='text' value = {password}/>
        <button className='text-white rounded-r-md py-1 px-3 bg-slate-500'>copy</button>
        <br/>

        <input className='mx-2' value={length} type='range' min={6}  max={20} onChange={(e) =>{
          setlength(e.target.value)
        }}/>
        <label>length:{length} </label>
        <input className='mx-2 w-5 h-5' checked = {numAllowed} type='checkbox' onChange={() => setNumAllowed(prev => !prev)}/><label htmlFor="">number</label>
        <input className='mx-2 h-5 w-5' checked={charAllowed} type='checkbox' onChange={() => setCharAllowed(prev => !prev)} /><label htmlFor="">characters</label>
      </div>
      
    </>
  )
}

export default App
