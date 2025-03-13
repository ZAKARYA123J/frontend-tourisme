import React from 'react'
import NavBar from './components/NavBar'
import Destinations from './components/Destinations'
import Home from './pages/Home'
import Travel from './pages/Travel'
import View from './pages/View'
import Footer from './components/Footer'
import Book from './pages/Book'
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';
import ResetPassword from './Auth/ResetPassword';

import { Routes, Route } from 'react-router-dom'


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
        <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     
       <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
     <Footer/>
      
    </>
  )
}

export default App
