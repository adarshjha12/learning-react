import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/button';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div className=' w-full h-screen bg-red-900 flex items-end justify-center'  style={{backgroundColor: color}}>
      <Button/>
      
      </div>
    </>
  );
}

export default App;
