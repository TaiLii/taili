import { useState, useEffect } from 'react'
import './App.css'

import { useInView } from 'react-intersection-observer'

function App() {

  const { ref: home, inView: inViewHome, entry: entryHome } = useInView({
    threshold: 0.5,
  });

  const { ref: about, inView: inViewAbout, entry: entryAbout } = useInView({
    threshold: 0.5,
  });

  const { ref: projects, inView: inViewProject, entry: entryProject } = useInView({
    threshold: 0.5,
  });
  const { ref: contact, inView: inViewContact, entry: entryContact } = useInView({
    threshold: 0.5,
  });

  return (
    <div className="bg-neutral-900 flex flex-row">
      <div className="w-full">
        <section id="Home" ref={home}>
            <div className="absolute top-0 left-0 p-2">
              <img src="./pika.png" alt="pika" class="h-16 w-16 rounded-md"></img>
            </div>

            <div className='min-h-screen flex flex-col justify-center items-center'>
              <div className="font-sans text-9xl text-fuchsia-400">
                Tai Li
              </div>    
              
              <a href='mailto:sphorq@gmail.com' className='text-sky-500 text-2xl hover:brightness-95 transition duration-150'>
                sphorq@gmail.com
              </a>
            </div>
        </section>

        <section id="about" className="h-screen flex justify-center items-center" ref={about}>
          <div className="">
            about
          </div>
        </section>

        <section id="projects" className="h-screen flex justify-center items-center" ref={projects}>
          <div className="">
            projects
          </div>
        </section>

        <section id="contact" className="h-screen flex justify-center items-center" ref={contact}>
          <div className="">
            contact
          </div>
        </section>
        <a href="https://www.linkedin.com/in/tai-li/" target="_blank">
          <img src='./616160.webp' className='w-5 invert ml-5 mb-5 hover:scale-105 transition duration-150 fixed left-0 bottom-0'></img>
        </a>
      </div>
      

      <footer className="flex items-center h-screen mr-40 fixed right-0">
          <nav className="flex flex-col text-xl">
            <a href="#Home" className={"hover:brightness-100 active:text-gray-800 transition duration-150 ease-in-out brightness-50 " + (inViewHome ? "text-blue-500" : "text-white")}>Home</a>
            <a href="#about" className={"hover:brightness-100 active:text-gray-800 transition duration-150 ease-in-out brightness-50 " + (inViewAbout ? "text-blue-500" : "text-white")}>About</a>
            <a href="#projects" className={"hover:brightness-100 active:text-gray-800 transition duration-150 ease-in-out brightness-50 " + (inViewProject ? "text-blue-500" : "text-white")}>Projects</a>
            <a href="#contact" className={"hover:brightness-100 active:text-gray-800 transition duration-150 ease-in-out brightness-50 " + (inViewContact ? "text-blue-500" : "text-white")}>Contact</a>
          </nav>
      </footer>

      
    </div>
  )
}

export default App
