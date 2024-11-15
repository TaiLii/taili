import React from 'react'
import { useInView } from 'react-intersection-observer'

function Home() {
    const { ref: home, inView: inViewHome, entry: entryHome } = useInView({
        threshold: 0.6,
      });
    
      const { ref: about, inView: inViewAbout, entry: entryAbout } = useInView({
        threshold: 0.6,
      });
    
      const { ref: projects, inView: inViewProject, entry: entryProject } = useInView({
        threshold: 0.6,
      });
    
    
      return (
        <div className="bg-neutral-900 flex flex-row font-rozanova">
          
          <div className="w-full z-50">
            <header className='fixed w-screen pb-2 z-50'>
                <nav className="flex flex-row text-xl pl-40 space-x-2 lg:invisible pt-2">
                  <a href="#projects" className={"hover:brightness-100 active:text-gray-800 transition duration-150 ease-in-out brightness-75 " + (inViewProject ? "text-blue-500" : "text-white")}>Projects</a>
                  <a href="#about" className={"hover:brightness-100 active:text-gray-800 transition duration-150 ease-in-out brightness-75 " + (inViewAbout ? "text-blue-500" : "text-white")}>About</a>
                </nav>
            </header>
            
            <div className="top-0 left-0 p-2 fixed flex flex-row z-10 bg-neutral-900 w-full">
                  <img src="./pika.png" alt="pika" class="h-16 w-16 rounded-md"></img>
                
                  <div className='flex flex-col'>
                    <p className='text-white text-lg pl-3 font-medium'>Tai Li</p>
                      <div className='flex flex-row'>
                          <p className='text-gray-400 pl-3 text-sm font-sans font-bold'>
                            3
                          </p>
                          <p className='text-gray-400 text-sm'>
                            rd year Computer Engineer Student @ McMaster
                          </p>
                      </div>
                  </div>
            </div>
    
            <section id="Home" ref={home} className={"transition duration-150 z-0"+(inViewHome ? "scale-100 " : 'scale-90')}>
                <div className='min-h-screen flex flex-col justify-center items-center select-none'>
                  <div className="text-9xl text-fuchsia-400">
                    Tai Li
                  </div>    
                  
                  <a href='mailto:business@taili.ca' className='text-sky-500 text-2xl hover:brightness-95 transition duration-150'>
                    business@taili.ca
                  </a>
                </div>
            </section>
    
            <section id="projects" className={"h-screen flex justify-center items-center transition duration-150 z-10"+(inViewProject ? "scale-100 " : 'scale-90')} ref={projects} >
              <div className='flex flex-col items-center'>
                <a href='/gen' className='scale-150 border-2 border-zinc-900 bg-neutral-800 shadow-lg rounded-lg px-16 hover:scale-[1.55] transition duration-150 ease-in-out'>
                <div className='flex flex-row justify-center items-center text-white'>
                    <p className='font-normal'>My</p> 
                    <p className='font-sans font-bold px-1 pb-1'>'10</p>
                    <p className='font-normal'>Gen Coupe</p>
                </div>
                <img src="/car.jpg" className="flex w-52 h-52 object-cover rounded-lg m-2"/>
                </a>
              </div>
            </section>
    
            <section id="about" ref={about} className={"h-screen flex justify-center items-center transition duration-150 z-0 "+(inViewAbout ? "scale-100 " : 'scale-90')}>
              <div className="text-white border-2 p-10 rounded-md text-center">
                <p>About</p>
              </div>
            </section>
    
            <a href="https://www.linkedin.com/in/tai-li/" target="_blank">
              <img src='./616160.webp' className='w-5 invert ml-5 mb-5 hover:scale-105 transition duration-150 fixed left-0 bottom-0'></img>
            </a>
    
            <a href="#Home" className={'flex w-14 items-center justify-center left-10 bottom-0 lg:right-0 lg:bottom-0 fixed mr-60 mb-20 transition duration-150 bg-neutral-600 rounded-full p-2 shadow-md hover:bg-neutral-700 active:bg-neutral-500 visible md:visible lg:invisible xl:invisible' + (inViewHome ? "invisible" : "visible")}> 
              <img src='./up.webp' className='w-10 invert'></img>
            </a>

            <a href="#Home" className={'flex w-14 items-center justify-center right-0 bottom-0 fixed mr-60 mb-20 transition duration-150 bg-neutral-600 rounded-full p-2 shadow-md hover:bg-neutral-700 active:bg-neutral-500 invisible lg:visible ' + (inViewHome ? "invisible" : "visible")}> 
              <img src='./up.webp' className='w-10 invert'></img>
            </a>
          </div>
          
    
          <footer className="flex items-center h-screen mr-40 fixed right-0 md:invisible invisible lg:visible">
              <nav className="flex lg:flex-col flex-row text-xl">
                <a href="#projects" className={"hover:brightness-100 active:text-gray-800 transition duration-150 ease-in-out brightness-75 " + (inViewProject ? "text-blue-500" : "text-white")}>Projects</a>
                <a href="#about" className={"hover:brightness-100 active:text-gray-800 transition duration-150 ease-in-out brightness-75 " + (inViewAbout ? "text-blue-500" : "text-white")}>About</a>
              </nav>
          </footer>
    
          
        </div>
  )
}

export default Home