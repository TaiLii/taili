import React from 'react'

function Gen() {
  return (
    <div className='bg-neutral-900 flex flex-row font-rozanova'>
        <div className='flex items-center justify-center w-full'>
            <div className='bg-neutral-900 z-30 w-screen fixed h-40 top-0 visible lg:invisible'/>
            <a href="/" className='z-50 flex items-center justify-center text-xl left-0 top-0 fixed ml-5 scale-75 lg:scale-100 lg:ml-20 mt-5 lg:mt-10 transition duration-150 ease-in-out bg-neutral-600 rounded-full p-2 shadow-lg hover:bg-neutral-700 active:bg-neutral-500'> 
                <div className='*:transition *:duration-300 *:hover:invert-0 flex items-center'>
                    <img src='./left.webp' className='w-8 invert'></img>
                    <p className='text-gray-300 text-md py-1 pr-2 pl-2'>Back</p>
                </div>
            </a>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-5xl text-gray-500 bg-neutral-900 z-50 fixed top-14 invisible lg:visible lg:flex lg:items-center lg:justify-center'>My Genesis Coupe</h1>   
                <h1 className='text-3xl text-gray-500 fixed right-4 top-5 visible lg:invisible text-right z-50'>My Genesis <br/> Coupe</h1>   
                <div className='border-2 border-zinc-900 bg-neutral-800 rounded-lg flex flex-col items-center justify-center shadow-xl my-40 z-0'>
                    <p className='text-neutral-100 text-3xl my-5'>How she's sitting</p>
                    <img src="./car/10.png" alt="" className=' object-cover rounded-lg shadow-md h-128 w-96 m-5'/>
                    <p className='text-neutral-700'>wip...</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gen