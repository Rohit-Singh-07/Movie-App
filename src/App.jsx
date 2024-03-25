import React from 'react'
import NavScrollExample from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'
import Trending from './components/Trending';
import Popular from './components/Popular';
import People from './components/People';
import Movies from './components/Movies';
import TvShow from './components/TvShow';

const App = () => {
  return (
    <div className='bg-zinc-900'>
      <NavScrollExample/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/people' element={<People/>}/>
      <Route path='/movies' element={<Movies/>}>
      <Route path='/movies/details/:id' element={<Movies/>}/>
      </Route>
      <Route path='/tv' element={<TvShow/>}/>
    </Routes>
    </div>
  )
}

export default App
