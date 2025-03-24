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
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SelectCard bg={crocodile} text="Crocopark" link="/activite1" />
            <SelectCard bg={camelride} text="Try camel ride" link="/activite2" />
            <SelectCard bg={soukalhad} text="Souk El Had" link="/activite3" />
            <SelectCard bg={telefrique} text="Watch the whole city from up" link="/activite4" />
            <SelectCard bg={breakfast} text="Moroccan breakfast" link="/activite5" />
            <SelectCard bg={sandboard} text="Tamri's dunes" link="/activite6" />
        </div>
    );
};

export default Selects;
