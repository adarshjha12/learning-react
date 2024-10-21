 import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(11)
  const addValue = function () {

    if (counter >= 0 && counter < 20) {
      counter = counter + 1
      setCounter(counter)
      // console.log(counter);
    }
  }
  
  const subValue = function () {
    
    if (counter >= 1 && counter <= 20) {
      counter = counter - 1
      setCounter(counter)
    }
  }
    
  return (
    <div>
      <h1>counter {counter}</h1>
      <button onClick={addValue}> add value{counter}</button>
      <br/>
      <button onClick={subValue}> decrease value{counter}</button>
    </div>
  ) 
}

export default App
