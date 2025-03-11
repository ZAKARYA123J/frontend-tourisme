import React from "react";
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
            <SelectCard bg={crocodile} text="crocopark" />
            <SelectCard bg={camelride} text="try camel ride" />
            <SelectCard bg={soukalhad} text="souk El Had" />
            <SelectCard bg={telefrique} text="watch the whole sity from up " />
            <SelectCard bg={breakfast} text="maroccan breakfast " />
            <SelectCard bg={sandboard} text="Tamri's dunes"/>
        </div>
    );

}
export default Selects;