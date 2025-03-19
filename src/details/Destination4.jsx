import React from 'react';
import Taghazout from '../assets/Taghazout.jpg';
import qawarib from '../assets/qawarib.jpg';
import qawarib2 from '../assets/qawarib2.jpg';
import qawarib3 from '../assets/qawarib3.jpg';
import qawarib4 from '../assets/qawarib4.jpg'; 
import qawarib5 from '../assets/qawarib5.jpg'; 

const Destination4 = () => {
  const resortData = {
    name: "Taghazout Surf Resort",
    description: "Taghazout Surf Resort est un lieu incontournable pour les passionnés de surf. Situé à Taghazout, un village côtier au Maroc, le resort bénéficie de l'une des meilleures vagues de la région, idéales pour les surfeurs de tous niveaux. Le complexe propose des cours de surf dispensés par des instructeurs expérimentés et des sessions guidées sur les plages locales. Les chambres sont modernes, avec des vues spectaculaires sur l'océan. Après une journée sur les vagues, les visiteurs peuvent se détendre au spa, savourer des repas locaux ou profiter des soirées animées sur la terrasse du resort. La meilleure période pour surfer à Taghazout est de septembre à avril, lorsque les vagues sont les plus constantes.",
    location: "Taghazout, Agadir, Maroc",
    services: [
      "Cours de surf et sessions guidées",
      "Vagues idéales pour tous niveaux",
      "Restaurant avec cuisine marocaine",
      "Spa et massage après surf",
      "Terrasse avec vue sur l'océan",
      "Soirées et événements animés"
    ],
    bestTimeToVisit: "La meilleure période pour surfer est de septembre à avril, lorsque les vagues sont les plus constantes.",
    tips: "N'oubliez pas de louer une planche de surf de qualité, et assurez-vous de prendre un guide local pour vous faire découvrir les meilleurs spots de surf. Les vagues peuvent être assez puissantes, alors soyez prêt à relever le défi !",
    images: [
      { src: qawarib, alt: "Plage avec quad", description: "Explorez la plage avec des quads." },
      { src: qawarib2, alt: "Kayak sur la mer", description: "Faites du kayak dans des eaux cristallines." },
      { src: qawarib3, alt: "Cours de yoga sur la plage", description: "Participez à un cours de yoga au lever du soleil." },
      { src: qawarib4, alt: "Piscine à débordement", description: "Détendez-vous au bord de la piscine à débordement." },
      { src: qawarib5, alt: "Massage sur la plage", description: "Profitez d'un massage relaxant sur la plage." },
      { src: Taghazout, alt: "Massage sur la plage", description: "Profitez d'un massage relaxant sur la plage." },

    ]
  };

  return (
    <div>
    
      <div className="relative bg-cover bg-center h-screen">
      <img 
                  src={Taghazout} 
                  alt="Quad Adventure" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{resortData.name}</h1>
          <p className="text-lg md:text-xl mb-6">{resortData.location}</p>
        </div>
      </div>

    
      <div className="container mx-auto px-6 py-12">
        <section className="prose lg:prose-xl text-gray-800">
        
          <h2 className="text-3xl font-semibold mb-4">Description du Resort</h2>
          <p className="mb-6">{resortData.description}</p>

         
          <h3 className="text-2xl font-semibold mt-8">Meilleur moment pour visiter</h3>
          <p className="mb-6">{resortData.bestTimeToVisit}</p>

        
          <h3 className="text-2xl font-semibold mt-8">Services du Resort</h3>
          <ul className="list-disc pl-5 mb-6">
            {resortData.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>

          
          <h3 className="text-2xl font-semibold mt-8">Conseils pour les visiteurs</h3>
          <p className="mb-6">{resortData.tips}</p>
        </section>
        <div className="mt-12">
          <h3 className="text-3xl font-semibold mb-6 text-indigo-700 hover:text-indigo-600 transition-all duration-300">Explorez notre Resort en Images</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {resortData.images.map((image, index) => (
              <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-72 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="p-4">
                  <p className="text-lg text-gray-800 font-medium mb-2 group-hover:text-indigo-600 transition-all duration-300">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination4;
