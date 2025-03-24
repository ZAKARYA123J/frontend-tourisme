import React from "react";
import { motion } from "framer-motion";
import souk from "../assets/souk.jpg";
import souk2 from "../assets/souk2.jpg";
import souk3 from "../assets/souk3.jpg";
import souk4 from "../assets/souk4.jpg";
import souk5 from "../assets/souk5.jpg";
import souk6 from "../assets/souk6.jpg";
import souk7 from "../assets/souk7.jpg";
import soukalhad from "../assets/soukalhad.jpg";


const images = [
  { src: souk, alt: "Marché coloré", description: "Un marché animé avec des étals de tissus colorés et des épices exotiques." },
  { src: souk2, alt: "Épices du souk", description: "Un étal rempli de magnifiques épices aux couleurs vibrantes et aux arômes envoûtants." },
  { src: souk3, alt: "Artisanat local", description: "Des artisans locaux créant des objets d'art faits main dans un atelier du souk." },
  { src: souk4, alt: "ails", description:"Magnifique design de textiles au souk, une véritable œuvre d'art qui reflète la richesse et la diversité de l'artisanat local."},
  { src: souk5, alt: "Vendeurs au souk", description: "Des vendeurs discutent avec des clients dans une rue bondée, entourée de stands colorés." },
  { src: souk6, alt: "Souk en soirée", description: "Le souk illuminé par des lanternes, créant une ambiance magique et chaleureuse." },
  { src: souk7, alt: "vetements traditionnel", description: "vetements traditionnels, tissés à la main et remplis de motifs fascinants" },
    { src: soukalhad, alt: "Marchand de tapis", description: "Un souk animé avec des gens marchant parmi les étals de fruits, légumes et produits artisanaux." },

];

const Activite3 = () => {
  return (
    <div className="bg-orange-700 min-h-screen py-10 px-5 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">Découverte des Souks Traditionnels</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-center mt-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="bg-orange-600 p-4 rounded-xl shadow-lg"
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

export default Activite3;
