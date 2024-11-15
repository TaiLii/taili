import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Gen from './pages/Gen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/gen' element = {<Gen/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
