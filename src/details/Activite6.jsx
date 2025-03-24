import React from "react";
import { motion } from "framer-motion";
import desert from "../assets/desert.jpg";
import desert2 from "../assets/desert2.jpg";
import desert3 from "../assets/desert3.jpg";
import desert4 from "../assets/desert4.jpg";
import desert5 from "../assets/desert5.jpg";
import desert6 from "../assets/desert6.jpg";

const images = [
  { src: desert, alt: "Dunes de sable", description: "Les vastes dunes de sable du désert, créant un paysage majestueux et sans fin." },
  { src: desert2, alt: "Coucher de soleil sur le désert", description: "Un coucher de soleil spectaculaire sur le désert, avec des teintes orange et rouge sur l'horizon." },
  { src: desert3, alt: "adorable vue desertique", description: "Un paysage désertique à couper le souffle, avec des dunes dorées s'étendant à perte de vue, offrant une vue sereine et magnifique au cœur du désert." },
  { src: desert4, alt: "Tempête de sable", description: "Des animaux résistant à la chaleur du désert, se camouflant dans les paysages secs." },
  { src: desert5, alt: "Végétation désertique", description: "Quelques plantes et cactus robustes qui parviennent à survivre dans l'aridité du désert." },
  { src: desert6, alt: "Faune du désert", description: "Une tempête de sable balayant le désert, réduisant la visibilité et créant une atmosphère mystérieuse." },
];

const Activite6 = () => {
  return (
    <div className="bg-yellow-800 min-h-screen py-10 px-5 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">Découverte du Désert et ses Merveilles</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-center mt-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="bg-brown-600 p-4 rounded-xl shadow-lg"
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

export default Activite6;
