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
  { src: food1, alt: "Chicken tajine", description: "A chicken tajine with olives and preserved lemons, slowly cooked for a rich taste." },
  { src: food2, alt: "Couscous dish", description: "A traditional couscous dish, garnished with fresh and flavorful vegetables." },
  { src: food3, alt: "Traditional Moroccan pastry", description: "Sweet Moroccan pastries, made with honey and almonds." },
  { src: food4, alt: "Refissa dish", description: "Delicious Refissa with chicken and a wonderful sauce." },
  { src: food5, alt: "Moroccan bread", description: "Moroccan bread, prepared with salt and handmade." },
  { src: food6, alt: "Traditional cake", description: "Sweet Moroccan cakes, made with honey and almonds." },
  { src: food7, alt: "Mint tea", description: "Fresh mint tea, brewed with mint leaves and sugar." },
  { src: food8, alt: "Fish tajine", description: "A fish tajine with apples and preserved lemons, slowly cooked for a rich taste." },
];

const Activite5 = () => {
  return (
    <div className="bg-yellow-200 min-h-screen py-10 px-5 text-gray flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">Discovery of Traditional Flavors</h2>
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
            <h3 className="text-xl font-semibold mt-3">{image.alt}</h3>
            <p className="text-sm text-black mt-2">{image.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Activite5;
