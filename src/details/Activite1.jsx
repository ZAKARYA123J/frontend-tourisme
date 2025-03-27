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
  { src: cro1, alt: "Crocodile in the sun", description: "A crocodile basking in the sun." },
  { src: cro2, alt: "Two crocodiles", description: "Close-up of an imposing crocodile." },
  { src: cro3, alt: "Colorful snake", description: "Adorable snakes discovering their surroundings." },
  { src: cro4, alt: "Coiled snake", description: "A majestic snake coiled around a branch." },
  { src: cro5, alt: "Frog in the water", description: "A frog swimming discreetly in the water." },
  { src: cro6, alt: "Moving snake", description: "A snake moving gracefully on the ground." },
  { src: cro7, alt: "Crocodile with mouth open", description: "An impressive crocodile showing its sharp teeth." },
];

const Activite1 = () => {
  return (
    <div className="bg-green-700 min-h-screen py-10 px-5 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">Discovery of Crocodiles and Snakes</h2>
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
            <p className="text-sm text-gray-800 mt-2">{image.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Activite1;
