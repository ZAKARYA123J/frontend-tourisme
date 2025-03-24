import React from "react";
import { motion } from "framer-motion";
import cro1 from "../assets/crocoparc1.jpg";
import cro2 from "../assets/crocoparc2.jpg";
import cro3 from "../assets/crocoparc3.jpg";
import cro4 from "../assets/crocoparc4.jpg";
import cro5 from "../assets/crocoparc5.jpg";
import cro6 from "../assets/crocoparc6.jpg";
import cro7 from "../assets/crocoparc7.jpg";


const images = [
  { src: cro1, alt: "Crocodile au soleil", description: "Un crocodile se prélassant sous le soleil." },
  { src: cro2, alt: "deux crocodile", description: "Gros plan d’un crocodile imposant." },
  { src: cro3, alt: "Serpent Couleureux", description: "des adorable serpents découvrant son environnement." },
  { src: cro4, alt: "Serpent enroulé", description: "Un serpent majestueux enroulé autour d'une branche." },
  { src: cro5, alt: "grenouille dans l'eau", description: "Un grenouille nageant discrètement dans l'eau." },
  { src: cro6, alt: "Serpent en mouvement", description: "Un serpent se déplaçant gracieusement sur le sol." },
  { src: cro7, alt: "Crocodile avec gueule ouverte", description: "Un crocodile impressionnant montrant ses dents acérées." },
];

const Activite1 = () => {
  return (
    <div className="bg-green-600 min-h-screen py-10 px-5 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">Découverte des Crocodiles et Serpents</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-center mt-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="bg-green-700 p-4 rounded-xl shadow-lg"
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

export default Activite1;
