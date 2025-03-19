import {React,useState,useEffect} from 'react'
import NavBar from './components/NavBar'
import Destinations from './components/Destinations'
import Home from './pages/Home'
import View from './pages/View'

import Book from './pages/Book'
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';
import ResetPassword from './Auth/ResetPassword';
import Festivals from './pages/Festivals';
import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Reservation from './Location/Reservation'
import Exhibitions from './pages/Exhibitions'
import Heritages from './pages/Heritages'
import Adventures from './pages/Adventures'
import Marathons from './pages/Marathons'
import Tournaments from './pages/Tournaments'
import Feedback from './pages/Feedback'
import Hotels from './pages/Hotels'
import Airbnb from './pages/Airbnb'


import Destination1 from './details/destination1'
import Destination2 from './details/destination2'
import Destination3 from './details/destination3'
import Destination4 from './details/destination4'
import Destination5 from './details/destination5'

const  App=()=> {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/categories')  
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Erreur de récupération des catégories:', error));
  }, []);

  return (
    <>
      <NavBar />
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
        <Route path="/hotels" element={<Hotels/>}/> 
       <Route path='/view/:id' element={<View/>}/>
        <Route path='/book' element={<Book/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path='/carBooking'  element={<Reservation categories={categories} />}/>

      </Routes>
     <Footer/>
      
    </>
  )
}

export default App
