import { useState, useCallback, useEffect, useRef } from 'react'
 
import './App.css'

function App() {
  const [length, setlength] = useState(9)
  const [password, setPassword] = useState('')
  const [charAllowed, setCharAllowed] = useState(false)
  const [numAllowed, setNumAllowed] = useState(false)
  const [bgColor, setBgcolor] = useState('red')
  const [buttonText, setButtonText] = useState('copy')
  const refToInput = useRef(null)

    const clickHandler = function() {
      setBgcolor('green')
      setButtonText('copied')

    }
  
    let copyPassword = useCallback( () =>{
      refToInput.current?.select()
      window.navigator.clipboard.writeText(password)
    }, [password])

  const passwordGenerator = useCallback(() =>{
    let pass =''
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numAllowed) string += '0123456789'
    if (charAllowed) string += "!@#$%^&*()[]{};:,.<>/?\|+=-_`~"
    
    for (let i = 0; i < length; i++) {
      const randomValue = Math.floor(Math.random() * string.length + 1)
 
      pass += string.charAt(randomValue)
      console.log(pass);

    }

    setPassword(pass)

  }, [length, charAllowed, numAllowed])

  useEffect( () => passwordGenerator(), [length, charAllowed, numAllowed])
  
  return (
    <>
      <h1 className='text-yellow-500 rounded-md my-4 pb-2 px-5 text-3xl font-bold'> password generator</h1>

      <div className='w-6/12 bg-yellow-600 px-2 py-4 border rounded-md'>
        <input className='mr-1 ml-16 outline-none border-2 border-gray-700 bg-transparent text-black py-1 px-2 my-6 rounded-md ' readOnly type='text' ref={refToInput} value = {password}/>

        <button onClick={() => {clickHandler(); copyPassword()}} style={{backgroundColor: bgColor}} className='text-white rounded-md py-1 px-3 hover:bg-slate-950'>{buttonText}</button>
        <br/>

        <input className='mx-2' value={length} type='range' min={6}  max={20} onChange={(e) =>{
          setlength(e.target.value)
          setBgcolor('red')
          setButtonText('copy')
        }}/>
        <label>length:{length} </label>
        <input className='mx-2 w-5 h-5' checked = {numAllowed} type='checkbox' onChange={() => {

        setNumAllowed(prev => !prev)
        setBgcolor('red')
        setButtonText('copy')

        }}/><label htmlFor="">number</label>
        <input className='mx-2 h-5 w-5' checked={charAllowed} type='checkbox' onChange={() => {
          setCharAllowed(prev => !prev)
          setBgcolor('red')
          setButtonText('copy')
          }} /><label htmlFor="">characters</label>
      </div>
      
    </>
  )
}

export default App
