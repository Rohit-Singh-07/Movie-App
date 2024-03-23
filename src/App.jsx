import React from 'react'
import NavScrollExample from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-zinc-900'>
      <NavScrollExample/>
      <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  )
}

export default App
