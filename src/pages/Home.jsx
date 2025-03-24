import React from "react";
import { useTranslation } from "react-i18next"; 
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Selects from "../components/Selects";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import Weather from "../components/Weather";
import FadeInScroll from "../components/Fade";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation(); 
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <NavBar />}
      <FadeInScroll id="hero" delay={300} animationType="bottom">
        <Hero title={t("heroTitle")} /> 
      </FadeInScroll>

      <FadeInScroll id="carousel" delay={600} animationType="left">
        <Carousel />
      </FadeInScroll>

      <FadeInScroll id="destinations" delay={900} animationType="right">
        <Destinations title={t("destinationsTitle")} /> 
      </FadeInScroll>

      <FadeInScroll id="selects" delay={1200} animationType="bottom">
        <Selects />
      </FadeInScroll>

      <FadeInScroll id="search" delay={1500} animationType="left">
        <Search placeholder={t("searchPlaceholder")} /> 
      </FadeInScroll>

      <FadeInScroll id="chatbot" delay={1800} animationType="right">
        <Chatbot />
      </FadeInScroll>

      <FadeInScroll id="weather" delay={2100} animationType="bottom">
        <Weather />
      </FadeInScroll>
    </>
  );
};

export default Home;
