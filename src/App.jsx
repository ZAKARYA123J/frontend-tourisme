import React from 'react'
import NavBar from './components/NavBar'
import Destinations from './components/Destinations'
import Home from './pages/Home'
import Travel from './pages/Travel'
import View from './pages/View'
import Footer from './components/Footer'
import Book from './pages/Book'
import { Routes, Route } from 'react-router-dom'
import RouterComponent from './router'

function App() {
  return (
    <>
      <NavBar />
  
       <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='/travel' element={<Travel/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/book' element={<Book/>}/>
        
      </Routes>
     <Footer/>
      
    </>
  )
}

export default App
