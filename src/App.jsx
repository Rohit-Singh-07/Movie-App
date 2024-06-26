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
import Deatils from './components/Deatils';
import TvDetails from './components/TvDetails';
import PersonDetails from './components/PersonDetails';
import Trailer from './components/Trailer';
import AboutMe from './components/AboutMe';

const App = () => {
  return (
    <div className='bg-zinc-900 overflow-hidden'>
      <NavScrollExample/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/people' element={<People/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movie/details/:id' element={<Deatils/>}>
        <Route path='/movie/details/:id/trailer' element={<Trailer/>}/>
      </Route>
      <Route path='/tv' element={<TvShow/>}/>
      <Route path='/tv/details/:id' element={<TvDetails/>}>
      <Route path='/tv/details/:id/trailer' element={<Trailer/>}/>
      </Route>
      <Route path='/person/details/:id' element={<PersonDetails/>}/>
      <Route path="/aboutme" element={<AboutMe/>} />
    </Routes>
    </div>
  )
}

export default App
