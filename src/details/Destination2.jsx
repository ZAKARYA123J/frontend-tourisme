import React from 'react';
import img4 from '../assets/img4-4.jpg';
import surf from '../assets/surf.jpg';
import surf2 from '../assets/surf2.jpg';
import surf3 from '../assets/surf3.jpg';
import surf4 from '../assets/surf4.jpg'; 
import surf5 from '../assets/surf5.jpg'; 
import surf6 from '../assets/surf6.jpg'; 

const Destination2 = () => {
  const resortData = {
    name: "Beach Escape Resort",
    description: "Beach Escape Resort est un havre de paix situé sur une plage immaculée, offrant des vues spectaculaires sur l'horizon. Ce refuge de luxe est parfait pour ceux qui cherchent à se détendre loin du tumulte quotidien. L'endroit propose des chambres modernes avec des balcons privés donnant sur l'océan. Les visiteurs peuvent profiter de nombreuses activités en bord de mer, telles que la plongée, le kayak et les promenades sur la plage. Le resort abrite également un restaurant de fruits de mer réputé pour ses plats raffinés. Les installations de bien-être, comprenant un spa et un sauna, permettent aux invités de se ressourcer. En journée, les clients peuvent se détendre au bord de la piscine ou participer à des cours de yoga en plein air. Le meilleur moment pour visiter est pendant la saison estivale, de juin à septembre, pour profiter du soleil et des eaux cristallines. Pour une expérience plus exclusive, des services de massage sur la plage sont disponibles. Beach Escape Resort est l'endroit idéal pour s'évader et se reconnecter avec la nature.",
    location: "Plage de Miami, Floride",
    services: [
      "Plongée et kayak",
      "Restaurant de fruits de mer",
      "Spa et bien-être",
      "Cours de yoga en plein air",
      "Piscine à débordement",
      "Massage sur la plage"
    ],
    bestTimeToVisit: "Le meilleur moment pour visiter est de juin à septembre, lorsque le climat est parfait pour profiter des activités en extérieur.",
    tips: "Réservez vos activités à l'avance pour garantir votre place, et n'oubliez pas de profiter du coucher du soleil depuis la plage.",
    images: [
      { src: surf, alt: "Plage avec quad", description: "Explorez la plage avec des quads." },
      { src: surf2, alt: "Kayak sur la mer", description: "Faites du kayak dans des eaux cristallines." },
      { src: surf3, alt: "Cours de yoga sur la plage", description: "Participez à un cours de yoga au lever du soleil." },
      { src: surf4, alt: "Piscine à débordement", description: "Détendez-vous au bord de la piscine à débordement." },
      { src: surf5, alt: "Massage sur la plage", description: "Profitez d'un massage relaxant sur la plage." },
      { src: surf6, alt: "Promenade sur la plage", description: "Faites une promenade tranquille sur la plage au coucher du soleil." }
    ]
  };

  return (
    <div className="bg-gray-50">
      {/* Image de couverture */}
      <div className="relative bg-cover bg-center h-screen">
        <img 
          src={img4} 
          alt="Beach Escape Resort" 
          className="absolute inset-0 w-full h-full object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 hover:text-indigo-600 transition-all duration-300">{resortData.name}</h1>
          <p className="text-lg md:text-xl mb-6">{resortData.location}</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 py-12 text-gray-800">
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

        {/* Section pour afficher les images de manière professionnelle */}
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

export default Destination2;
