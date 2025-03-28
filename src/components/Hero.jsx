import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4-4.jpg";
import Aghroud from "../assets/Aghroud.jpg";
import Taghazout from "../assets/Taghazout.jpg";
import quad from "../assets/quadaga.jpg";
import jetskim from '../assets/jetskim.jpg';
import quadaga from '../assets/quadaga.jpg';
import hiking from '../assets/hiking.jpg';
import balloon from '../assets/balloon.jpg';
import horseridin from '../assets/balloon.jpg';
import diving from '../assets/diving.jpg';
import kitesurfing from '../assets/Kitesurfing.jpg';
import bashing from '../assets/bashing.jpg';
import canyoning from '../assets/canyoning.jpg';
import crocodile from "../assets/crocodile.jpg";
import camelride from "../assets/camelride.jpg";
import soukalhad from "../assets/soukalhad.jpg";
import telefrique from "../assets/telefrique.jpg";
import breakfast from "../assets/breakfast.jpg";
import sandboard from "../assets/sandboard.jpg";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const experiences = [
    { src: img3, title: "Resort View", desc: "Luxury stay with ocean view", link: "/destination1" },
    { src: img4, title: "Beach Escape", desc: "Golden sands and clear waters", link: "/destination2" },
    { src: Aghroud, title: "Aghroud Beach", desc: "Relaxing coastal experience", link: "/destination3" },
    { src: Taghazout, title: "Taghazout Surf", desc: "Surfing paradise in Morocco", link: "/destination4" },
    { src: quad, title: "Quad Adventure", desc: "Exciting desert rides", link: "/destination5" },
    { id: 1, name: 'Jet Ski Adventure', description: 'Ride the waves on a jet ski along Agadir’s beaches.', image: jetskim, price: '300 MAD (15 min)', link: 'adventures/jetski-adventure' },
    { id: 2, name: 'Quad Biking in the Desert', description: 'Explore Agadir’s rugged landscapes on a quad bike.', image: quadaga, price: '400 MAD (1 hour)', link: 'adventures/quad-biking' },
    { id: 3, name: 'Hiking in the Atlas Mountains', description: 'Explore scenic trails with breathtaking views.', image: hiking, price: '500 MAD', link: 'adventures/hiking-atlas-mountains' },
    { id: 4, name: 'Hot Air Balloon Ride', description: 'Enjoy panoramic views of Agadir from a hot air balloon.', image: balloon, price: '1500 MAD', link: 'adventures/hot-air-balloon' },
    { id: 5, name: 'Horse Riding in Souss-Massa National Park', description: 'Explore coastal areas and forests on horseback.', image: horseridin, price: '300-600 MAD', link: 'adventures/horse-riding-souss-massa' },
    { id: 6, name: 'Diving in Agadir', description: 'Explore Agadir’s rich underwater life.', image: diving, price: '600-1000 MAD', link: 'adventures/diving-agadir' },
    { id: 7, name: 'Kitesurfing in Agadir', description: 'Perfect wind conditions for kitesurfing in Agadir.', image: kitesurfing, price: '500-1000 MAD', link: 'adventures/kitesurfing-agadir' },
    { id: 8, name: 'Dune Bashing in the Sahara', description: 'Exciting off-road adventure in the Sahara desert.', image: bashing, price: '1000-1500 MAD', link: 'adventures/dune-bashing-sahara' },
    { id: 9, name: 'Canyoning in the Atlas Mountains', description: 'Explore narrow canyons and waterfalls.', image: canyoning, price: '800-1200 MAD', link: 'adventures/canyoning-atlas-mountains' },
    { name: 'Crocopark', description: 'Visit the Crocopark and learn about crocodiles.', image: crocodile, link: '/activite1' },
    { name: 'Camel Ride', description: 'Try a camel ride for a desert adventure.', image: camelride, link: '/activite2' },
    { name: 'Souk El Had', description: 'Explore the vibrant market of Agadir.', image: soukalhad, link: '/activite3' },
    { name: 'Telefrique', description: 'Watch the city from above with a cable car ride.', image: telefrique, link: '/activite4' },
    { name: 'Moroccan Breakfast', description: 'Taste a traditional Moroccan breakfast.', image: breakfast, link: '/activite5' },
    { name: 'Tamri\'s Dunes', description: 'Sandboard on the famous Tamri dunes.', image: sandboard, link: '/activite6' },
  ];

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);

    if (event.target.value === "") {
      setResults([]);
      return;
    }

    const filteredResults = experiences.filter((experience) =>
      (experience.title || experience.name).toLowerCase().includes(event.target.value.toLowerCase())
    );

    setResults(filteredResults);
  };

  const handleResultClick = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={"https://visitagadir.com/wp-content/uploads/2022/11/webpromo_visitagadir-1.mp4"}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-shadow-lg"
            >
              Discover Souss Massa
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-4xl font-medium !leading-relaxed"
            >
              A <span className="italic font-semibold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                region
              </span> full of life, culture, and adventure!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center justify-center mt-8"
            >
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Search experiences..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full py-4 pl-6 pr-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-white/80 text-lg"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-amber-400 transition-colors"
                >
                  <BiSearch className="w-6 h-6" />
                </button>

                {results.length > 0 && (
                  <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-md max-h-60 overflow-y-auto text-black">
                    {results.map((item, index) => (
                      <div
                        key={index}
                        className="cursor-pointer p-4 hover:bg-gray-200 transition-colors"
                        onClick={() => handleResultClick(item.link)}
                      >
                        <div className="flex items-center">
                          <img
                            src={item.src || item.image}
                            alt={item.title || item.name}
                            className="w-12 h-12 object-cover rounded-full mr-4"
                          />
                          <div>
                            <h4 className="font-semibold">{item.title || item.name}</h4>
                            <p className="text-sm">{item.desc || item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
