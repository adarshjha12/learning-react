import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div className=' w-full h-screen  flex items-end justify-center'  style={{backgroundColor: color}}>
     
      <div className="bg-white mb-4 rounded-full py-2 px-6">
                <button className="bg-green-500  mx-1 px-2 rounded-xl text-black" onClick={() => setColor('green')}>greeen</button>
                <button className="bg-red-500  mx-1 px-2 rounded-xl text-black" onClick={() => setColor('red')}>red</button>
                <button className="bg-blue-500  mx-1 px-2 rounded-xl text-black" onClick={() => setColor('blue')}>blue</button>
                <button className="bg-yellow-500  mx-1 px-2 rounded-xl text-black" onClick={() => setColor('yellow')}>yellow</button>
                <button className="bg-pink-500  mx-1 px-2 rounded-xl text-black" onClick={() => setColor('pink')}>pink</button>
                <button className="bg-slate-500  mx-1 px-2 rounded-xl text-black" onClick={() => setColor('#64748b')}>slate</button>
                <button className="bg-lime-600  mx-1 px-2 rounded-xl text-black" onClick={() => setColor('#65a30d')}>lime</button>
        </div>
      </div>
    </>
  );
}

export default App;
