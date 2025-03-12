import React from "react";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Selects from "../components/Selects";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import RouterComponent from "../router";

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <Destinations />
      <Selects />
      <Categories />
      <Search />
      <RouterComponent/>
    </>
  );
};

export default Home;
