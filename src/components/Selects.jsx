import React from "react";
import { Link } from "react-router-dom";
import camelride from "../assets/camelride.jpg";
import breakfast from "../assets/breakfast.jpg";
import telefrique from "../assets/telefrique.jpg";
import soukalhad from "../assets/soukalhad.jpg";
import SelectCard from "../components/SelectCard";
import crocodile from "../assets/crocodile.jpg";
import sandboard from "../assets/sandboard.jpg";

const Selects = () => {
    return (
        <>
            <div className="max-w-[900px] mx-auto text-center px-4">
                <h1 className="text-gray-500 text-lg font-bold">Best Destinations In Agadir</h1>
                <p className="text-black text-lg md:text-xl leading-relaxed">
                    Destinations are travel spots chosen for tourism or exploration, 
                    offering <span className="font-extrabold">attractions, activities, and experiences</span>. 
                    They can be <span className="font-extrabold">historical sites, resorts, or natural wonders</span>. 
                    A good destination provides memorable experiences for visitors.
                </p>
            </div>

            <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <SelectCard bg={crocodile} text="Crocopark" link="/activite1" />
                <SelectCard bg={camelride} text="Try camel ride" link="/activite2" />
                <SelectCard bg={soukalhad} text="Souk El Had" link="/activite3" />
                <SelectCard bg={telefrique} text="Watch the whole city from up" link="/activite4" />
                <SelectCard bg={breakfast} text="Moroccan breakfast" link="/activite5" />
                <SelectCard bg={sandboard} text="Tamri's dunes" link="/activite6" />
            </div>
        </>
    );
};

export default Selects;
