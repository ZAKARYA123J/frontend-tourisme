import React from "react";
import { motion } from "framer-motion";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
import food5 from "../assets/food5.jpg";
import food6 from "../assets/food6.jpg";
import food7 from "../assets/food7.jpg";
import food8 from "../assets/food8.jpg";

const images = [
  { src: food1, alt: "Tajine de poulet", description: "Un tajine de poulet aux olives et citrons confits, cuit lentement pour un goût riche." },
  { src: food2, alt: "Plat de couscous", description: "Un plat traditionnel de couscous, garni de légumes frais et savoureux." },
  { src: food3, alt: "Pâtisserie marocaine Traditionel", description: "Des pâtisseries marocaines sucrées, préparées à base de miel et d'amandes." },
  { src: food4, alt: "Plat de Refissa", description: "Refissa de Poulet delicieus avec une sauce magnifique." },
  { src: food5, alt: "Pain Marrocain", description: "Des pain marocaines salee, préparées à base de main." },
  { src: food6, alt: "Gateau Traditionel", description: "Des Gateaux marocaines sucrées, préparées à base de miel et d'amandes." },
  { src: food7, alt: "Thé à la menthe", description: "Un thé à la menthe fraîche, infusé avec des feuilles de menthe et du sucre." },
  { src: food8, alt: "Tajine de poisson", description: "Un tajine de poisson aux pomme et citrons confits, cuit lentement pour un goût riche" },
];

const Activite5 = () => {
  return (
    <div className="bg-yellow-100 min-h-screen py-10 px-5 text-gray flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">Découverte des Saveurs Traditionnelles</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-center mt-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="bg-yellow-200 p-4 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-3">{image.alt}</h3>
            <p className="text-sm text-black mt-2">{image.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Activite5;
