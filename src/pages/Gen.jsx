import React from 'react'

function Gen() {
  return (
    <div className='bg-neutral-900 flex flex-row font-rozanova'>
        <div className='flex items-center justify-center w-full'>
            <a href="/" className='flex items-center justify-center text-xl left-0 top-0 fixed ml-20 mt-10 transition duration-150 bg-neutral-600 rounded-full p-2 shadow-lg hover:bg-neutral-700 active:bg-neutral-500'> 
                <div className='*:transition *:duration-300 *:hover:invert-0 flex items-center'>
                    <img src='./left.webp' className='w-10 invert'></img>
                    <p className='text-gray-300 py-2 pr-5 pl-2'>Back</p>
                </div>
            </a>
            <div className='flex flex-col items-center justify-center pt-40'>
                <h1 className='text-5xl text-gray-500 fixed top-14'>My Genesis Coupe</h1>   
                <div className='-translate-x-60 border-2 border-zinc-900 bg-neutral-800 rounded-lg w-1/2 flex flex-col items-center justify-center shadow-xl'>
                    <p className='text-neutral-100 text-3xl mt-20'>When I First got it</p>
                    <img src="./car/1.png" alt="" className='scale-75 object-cover rounded-lg shadow-md translate-y-10'/>
                    <div className='h-3/4'>
                        <p className='text-white fixed right-80 translate-y-80'> &lt; Before <br/> &nbsp; After ↓</p>
                        <img src='./car/2.png' className='scale-50 -translate-x-40 -translate-y-20 rounded-lg'/>
                        <img src='./car/3.png' className='scale-75 translate-x-20 -translate-y-96 rounded-lg border-2'/>
                    </div>
                    <div className='-translate-y-96'>
                        <div>
                            <p className='text-white fixed right-80 translate-y-80'> &lt; Before <br/> &nbsp; After ↓</p>
                            <img src='./car/4.png' className='scale-50 -translate-x-40 rounded-lg'/>
                            <img src='./car/5.png' className='scale-75 translate-x-96 -translate-y-40 rounded-lg border-2 h-96 w-1/2 object-cover'/>
                        </div>
                        <img src='./car/6.png'/>
                        <img src='./car/7.png'/>
                        <img src='./car/8.png'/>
                        <img src='./car/9.png'/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Gen