import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let a = [1, 2, 3, 4]
  
  return (
    <>
      <Card name = "dog"/>
      <br/>
      <Card name = "cat"/>

    </>
  )
}

export default App
