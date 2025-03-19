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
import Adventures from './pages/Adventures'
import Feedback from './pages/Feedback'
import Hotels from './pages/Hotels'

import { Routes, Route } from 'react-router-dom'
import Destination1 from './details/destination1'
import Destination2 from './details/destination2'
import Destination3 from './details/destination3'
import Destination4 from './details/destination4'
import Destination5 from './details/destination5'


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
        <Route path="/adventures" element={<Adventures/>}/> 
        <Route path="/marathons" element={<Marathons/>}/> 
        <Route path="/tournaments" element={<Tournaments/>}/> 
        <Route path="/feedback" element={<Feedback/>}/> 

        <Route path="/destination1" element={<Destination1/>}/> 
        <Route path="/destination2" element={<Destination2/>}/> 
        <Route path="/destination3" element={<Destination3/>}/> 
        <Route path="/destination4" element={<Destination4/>}/> 
        <Route path="/destination5" element={<Destination5/>}/> 

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

export default App
