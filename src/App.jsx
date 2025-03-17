import {React,useState,useEffect} from 'react'
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
import Reservation from './Location/Reservation'




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
    <Route path='/reservation/airbnb'  element={<Reservation categories={categories} />}/>
      </Routes>
   
      
    </>
  )
}

export default App
