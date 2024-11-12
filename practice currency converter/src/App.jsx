import { useState } from 'react'

import './App.css'
import FetchCurrency from './hooks/fetchData'
import InputComponent from './components/inputComponent';
function App() {

  console.log(FetchCurrency('inr'));
  
  return (
    <>
     <div>
        <div><img src="https://images.pexels.com/photos/5519470/pexels-photo-5519470.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
        <div>
          <form action="">
              <InputComponent></InputComponent>
              
          </form>

        </div>
     </div>
    </>
  )
}

export default App
