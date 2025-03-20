import React from "react";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Selects from "../components/Selects";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
const Home = () => {
  return (
    <>
   
      <Hero />
      <Carousel />
      <Destinations />
      <Selects />
      <Categories />
      <Search />
      <Chatbot/>
    </>
  );
};

export default Home;
