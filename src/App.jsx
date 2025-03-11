import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Search from './components/Search'
import Selects from './components/Selects'
import SelectCard from './components/SelectCard'
import Carousel from './components/Carousel'
import Footer from './components/Footer' 
import Home from './pages/Home'
import Travel from './pages/Travel'
import View from './pages/View'
import Book from './pages/Book'
import Categories from './components/Categories'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Hero/>
      
      <Destinations/>
      <Selects/>
      <Categories/>
      
      
      <SelectCard/>
      
      <Search/>
      <Carousel/>
      <Footer/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/Destinations' element={<Destinations/>}/>
        <Route path='/Travel' element={<Travel/>}/>
        <Route path='/View' element={<View/>}/>
        <Route path='/Book' element={<Book/>}/>
      </Routes>
    </>
  )
}

export default App
