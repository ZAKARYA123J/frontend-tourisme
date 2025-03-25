import React from "react";
import { motion } from "framer-motion";

import Views2 from "../assets/Views2.jpg";
import Views3 from "../assets/Views3.jpg";
import Views4 from "../assets/Views4.jpg";
import Views5 from "../assets/Views5.jpg";
import Views6 from "../assets/Views6.jpg";
import Views7 from "../assets/Views7.jpg";
import Views8 from "../assets/Views8.jpg";
import Views9 from "../assets/Views9.jpg";
import Views10 from "../assets/Views10.jpg";
import Views11 from "../assets/Views11.jpg";
import Views12 from "../assets/Views12.jpg";
import upview from "../assets/upview.jpg";
import Views1 from "../assets/Views1.jpg";

const images = [
  { src: Views1, alt: "Vue sur tradition decors", description: "Un panorama magnifique sur les decors enneigées a cotee de mur marron" },
  { src: Views2, alt: "Coucher de soleil", description: "Un coucher de soleil spectaculaire, illuminant le ciel de teintes orange et rouges." },
  { src: Views3, alt: "Forêt dense", description: "Une vue tranquille de la mer s'étendant à l'horizon, avec des vagues douces et des couleurs apaisantes." },
  { src: Views4, alt: "Paysage désertique", description: "Des dunes de sable doré, avec un ciel dégagé et un paysage désertique à couper le souffle." },
  { src: Views5, alt: "Vue sur la mer", description: "Une forêt luxuriante avec des arbres verts et une lumière filtrant à travers le feuillage." },
  { src: Views6, alt: "La Corniche en soir", description: "Une vallée verdoyante entourée de montagnes, offrant un paysage paisible et magnifique." },
  { src: Views7, alt: "Vue dans la corniche", description: "Une vue panoramique sur une ville vibrante, avec des bâtiments modernes et des rues animées." },
  { src: Views8, alt: "Montagnes au lever du soleil", description: "Les premières lueurs du soleil éclatant derrière des montagnes majestueuses." },
  { src: Views9, alt: "Plage paradisiaque", description: "Une plage de sable blanc, bordée de palmiers, avec des eaux turquoise scintillantes." },
  { src: Views10, alt: "Vue sur la plage", description: "Un lac tranquille entouré de montagnes, avec des eaux cristallines reflétant le ciel." },
  { src: Views11, alt: "Vue panoramique de fleur", description: "Une vue spectaculaire sur une vallée luxuriante, entourée de collines verdoyantes." },
  { src: Views12, alt: "Vue sur la plage privee", description: "Des champs verdoyants et des collines douces s'étendant à perte de vue sous un ciel bleu clair." },
  { src: upview, alt: "Vue sur la ville", description: "Des champs verdoyants et des collines douces s'étendant à perte de vue sous un ciel bleu clair." },

];

const Activite4 = () => {
  return (
    <div className="bg-blue-800 min-h-screen py-10 px-5 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">Découverte des Vues Spectaculaires</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-center mt-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-xl text-black font-semibold mt-3">{image.alt}</h3>
            <p className="text-sm text-gray-700 mt-2">{image.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Activite4;
