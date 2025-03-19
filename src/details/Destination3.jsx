import React from 'react';
import Aghroud from '../assets/Aghroud.jpg';
import viewplage from '../assets/viewplage.jpg';
import viewplage2 from '../assets/viewplage2.jpg';
import viewplage4 from '../assets/viewplage4.jpg';
import plage4 from '../assets/plage4.jpg'; 
import plage5 from '../assets/plage5.jpg'; 


const Destination3 = () => {
  const resortData = {
    name: "Aghroud Beach Resort",
    description: "Aghroud Beach Resort est un lieu idyllique situé sur la plage d'Aghroud, offrant une vue imprenable sur l'océan Atlantique. Ce complexe de luxe propose des chambres modernes avec des balcons privés, parfait pour profiter du climat doux toute l'année. L'endroit est idéal pour ceux qui recherchent des vacances reposantes et actives, avec des activités comme le surf, la plongée sous-marine et des excursions en bateau. Le resort dispose de plusieurs restaurants servant des plats traditionnels marocains et internationaux. Vous pourrez également profiter du spa pour un moment de relaxation après une journée d'activités. Le meilleur moment pour visiter est de mars à novembre, lorsque la météo est idéale pour se détendre au bord de l'eau et explorer les environs.",
    location: "Plage d'Aghroud, Agadir, Maroc",
    services: [
      "Surf et sports nautiques",
      "Restaurant marocain et international",
      "Spa et bien-être",
      "Excursions en bateau",
      "Piscine à débordement",
      "Salle de sport moderne"
    ],
    bestTimeToVisit: "Le meilleur moment pour visiter est de mars à novembre, quand la météo est idéale pour profiter des activités en extérieur.",
    tips: "N'oubliez pas de visiter le souk d'Agadir et de goûter à la cuisine locale. Pensez à réserver les excursions et activités à l'avance pour garantir votre place.",
    images: [
          { src: viewplage, alt: "Plage avec quad", description: "Explorez la plage avec des quads." },
          { src: viewplage2, alt: "Kayak sur la mer", description: "Faites du kayak dans des eaux cristallines." },
          { src: viewplage4, alt: "Cours de yoga sur la plage", description: "Participez à un cours de yoga au lever du soleil." },
          { src: plage4, alt: "Piscine à débordement", description: "Détendez-vous au bord de la piscine à débordement." },
          { src: plage5, alt: "Massage sur la plage", description: "Profitez d'un massage relaxant sur la plage." },
        ]
  };

  return (
    <div className="bg-gray-50">
      {/* Image de couverture */}
      <div className="relative bg-cover bg-center h-screen">
        <img 
          src={Aghroud} 
          alt="Aghroud Beach Resort" 
          className="absolute inset-0 w-full h-full object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 hover:text-indigo-600 transition-all duration-300">{resortData.name}</h1>
          <p className="text-lg md:text-xl mb-6">{resortData.location}</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 py-12">
        {/* Description du resort */}
        <section className="bg-white p-8 rounded-xl shadow-xl mb-8 hover:shadow-2xl transition-all duration-500">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-700 hover:text-indigo-600 transition-all duration-300">Description du Resort</h2>
          <p className="mb-6 text-gray-700 leading-relaxed text-lg hover:text-gray-800 transition-all duration-300">{resortData.description}</p>
        </section>

        {/* Meilleur moment pour visiter */}
        <section className="bg-white p-8 rounded-xl shadow-xl mb-8 hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Meilleur moment pour visiter</h3>
          <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{resortData.bestTimeToVisit}</p>
        </section>

        {/* Services du Resort */}
        <section className="bg-white p-8 rounded-xl shadow-xl mb-8 hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Services du Resort</h3>
          <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
            {resortData.services.map((service, index) => (
              <li key={index} className="transition-all duration-300 hover:text-indigo-600">{service}</li>
            ))}
          </ul>
        </section>

        {/* Conseils pour les visiteurs */}
        <section className="bg-white p-8 rounded-xl shadow-xl mb-8 hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 hover:text-indigo-500 transition-all duration-300">Conseils pour les visiteurs</h3>
          <p className="mb-6 text-gray-700 leading-relaxed hover:text-gray-800 transition-all duration-300">{resortData.tips}</p>
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

export default Destination3;
