import React from "react";
import { motion } from "framer-motion";
import jmal1 from "../assets/jmal1.jpg";
import jmal2 from "../assets/jmal2.jpg";
import jmal3 from "../assets/jmal3.jpg";
import jmal4 from "../assets/jmal4.jpg";
import jmal5 from "../assets/jmal5.jpg";
import jmal6 from "../assets/jmal6.jpg";

const images = [
  { src: jmal1, alt: "Chameau dans le désert", description: "Un majestueux chameau marchant à travers les dunes dorées du désert." },
  { src: jmal2, alt: "Chameau au coucher du soleil", description: "Un chameau silhouette contre un magnifique coucher de soleil dans le désert." },
  { src: jmal3, alt: "Chameau et son troupeau", description: "Un groupe de chameaux se déplaçant ensemble, avec une vue panoramique sur le désert." },
  { src: jmal4, alt: "Chameau à l'ombre", description: "Un chameau se reposant à l'ombre d'un arbre, cherchant à échapper à la chaleur du désert." },
  { src: jmal5, alt: "Chameau avec coloration claire", description: "Un chameau à la couleur claire, se dirigeant lentement à travers le sable chaud." },
  { src: jmal6, alt: "Chameau et ses taches", description: "Un chameau au pelage tacheté, traversant les vastes étendues désertiques." },
];

const Activite2 = () => {
  return (
    <div className="bg-yellow-800 min-h-screen py-10 px-5 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">Découverte des Chameaux dans le Désert</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-center mt-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="bg-yellow-700 p-4 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-3">{image.alt}</h3>
            <p className="text-sm mt-2">{image.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Activite2;
