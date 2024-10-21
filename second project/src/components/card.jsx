

function Card({name}) {

    return ( 
        <div className="flex gap-12">         
        <div className="max-w-30 h-fit w-full flex justify-center items-center flex-col p-2 border-red-500 border-x-2 border-y-2 rounded-md">

            <img className="rounded-t-full w-16 my-1" src="https://www.shutterstock.com/image-vector/minimal-thin-line-cat-logo-600nw-2480428303.jpg"></img>

            <h3 className="my-1">{name}</h3>

            <p className='bg-red-600 px-2 rounded-md py-1 text-sm'>{}We are making updates to our User Agreement effective November 20, 2024 and providing you more information in our Privacy Policy. Learn more about these changes which apply to your continued use of LinkedIn.</p>
            </div>

        <br/>
        <div className=" max-w-30 h-fit w-full bg-orange-400 shadow-md rounded-lg overflow-hidden flex justify-center flex-col items-center">
        <img className="object-cover h-16 w-16 rounded-full" src="https://www.shutterstock.com/image-vector/minimal-thin-line-cat-logo-600nw-2480428303.jpg" alt="Card Image"/>
        <div className="p-2">
            <h2 className="text-xl text-black font-semibold mb-1">{name}</h2>
            <p className="text-gray-700 mb-2">This is a simple card component created using Tailwind CSS. It is responsive and looks great on all screen sizes.</p>
            <a href="#" className="inline-block bg-blue-500 text-white font-semibold px-2 py-1 rounded hover:bg-blue-600 transition">Learn More</a>
        </div>
        </div>

    </div>
    )
}

export default Card