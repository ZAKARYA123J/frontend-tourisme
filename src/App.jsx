import React from 'react'
import NavBar from './components/NavBar'
import Destinations from './components/Destinations'
import Home from './pages/Home'
import View from './pages/View'
import Footer from './components/Footer'
import Book from './pages/Book'
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';
import ResetPassword from './Auth/ResetPassword';
import Festivals from './pages/Festivals';
import Exhibitions from './pages/Exhibitions';
import Heritages from './pages/Heritages';
import Tournaments from './pages/Tournaments';
import Marathons from './pages/Marathons';

import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    
     <> 
      <div className="flex flex-col min-h-screen">
       <NavBar />
       <main className="flex-grow">
       <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path="/festivals" element={<Festivals/>}/>  
        <Route path="/exhibitions" element={<Exhibitions/>}/>    
        <Route path="/heritages" element={<Heritages/>}/> 
        <Route path="/tournaments" element={<Tournaments />}/>
        <Route path="/marathons" element={<Marathons />}/> 
 


            <Route path='/view/:id' element={<View/>}/>
        <Route path='/book' element={<Book/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      </main>
    
      <Footer/>
    </div>
 </>
  )
}

export default App
