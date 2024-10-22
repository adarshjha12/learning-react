import { useState } from 'react';
 

function Button() {
    const [color, setColor] = useState('olive')

    return(
        <>
        <div className="bg-white mb-4 rounded-full py-2 px-6">
                <button className="bg-green-500  mx-1 px-2 rounded-xl text-black">greeen</button>
                <button className="bg-red-500  mx-1 px-2 rounded-xl text-black">red</button>
                <button className="bg-blue-500  mx-1 px-2 rounded-xl text-black">blue</button>
                <button className="bg-yellow-500  mx-1 px-2 rounded-xl text-black">yellow</button>
                <button className="bg-pink-500  mx-1 px-2 rounded-xl text-black">pink</button>
                <button className="bg-slate-500  mx-1 px-2 rounded-xl text-black">slate</button>
                <button className="bg-lime-600  mx-1 px-2 rounded-xl text-black">lime</button>
        </div>
        </>
    )
}

export default Button