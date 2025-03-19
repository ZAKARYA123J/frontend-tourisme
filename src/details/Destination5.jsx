import React from 'react';
import quadaga from '../assets/quadaga.jpg';

const Destination5 = () => {
  const adventureData = {
    name: "Quad Adventure Agadir",
    description: "Quad Adventure Agadir propose des excursions passionnantes à travers le désert et les montagnes de l'Atlas, à bord de quads puissants et faciles à piloter. Les aventuriers peuvent choisir parmi différentes options de parcours, allant des balades relaxantes en famille aux aventures plus extrêmes pour les amateurs de sensations fortes. Les guides expérimentés vous emmèneront à travers des paysages spectaculaires, entre dunes de sable, vallées verdoyantes et villages berbères. Après une journée pleine d'adrénaline, vous pourrez vous détendre avec un repas traditionnel marocain dans un cadre authentique.",
    location: "Agadir, Maroc",
    services: [
      "Excursions en quad guidées",
      "Parcours pour tous les niveaux",
      "Visite des villages berbères",
      "Repas traditionnels marocains",
      "Sécurité et équipements fournis",
      "Guide local expérimenté"
    ],
    bestTimeToVisit: "Le meilleur moment pour participer à une aventure en quad est de mars à novembre, lorsque les températures sont modérées.",
    tips: "Portez des vêtements légers, des lunettes de protection et de la crème solaire. Ne partez jamais sans votre guide et assurez-vous que votre quad est bien préparé avant le départ."
  };

  return (
    <div className="relative">
      {/* Image de couverture */}
      <div className="relative bg-cover bg-center h-screen transition-transform duration-500 hover:scale-105">
        <img
          src={quadaga}
          alt="Quad Adventure"
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
        />
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 hover:opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-shadow">{adventureData.name}</h1>
          <p className="text-lg md:text-xl mb-6">{adventureData.location}</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 py-12">
        {/* Section Description */}
        <div className="mb-12 p-6 bg-white rounded-lg shadow-2xl hover:shadow-xl transition-all duration-500">
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Description de l'Aventure</h2>
          <p className="text-lg leading-relaxed">{adventureData.description}</p>
        </div>

        {/* Section Meilleur Moment pour Visiter */}
        <div className="mb-12 p-6 bg-yellow-200 rounded-lg shadow-2xl hover:shadow-xl transition-all duration-500">
          <h3 className="text-2xl font-semibold text-center text-orange-600 mb-4">Meilleur moment pour visiter</h3>
          <p className="text-lg text-center">{adventureData.bestTimeToVisit}</p>
        </div>

        {/* Section Services Disponibles */}
        <div className="mb-12 p-6 bg-green-200 rounded-lg shadow-2xl hover:shadow-xl transition-all duration-500">
          <h3 className="text-2xl font-semibold text-center text-green-600 mb-4">Services disponibles</h3>
          <ul className="list-disc pl-5 text-lg space-y-2">
            {adventureData.services.map((service, index) => (
              <li key={index} className="hover:text-green-500 transition-colors">{service}</li>
            ))}
          </ul>
        </div>

        {/* Section Conseils pour les Visiteurs */}
        <div className="p-6 bg-blue-200 rounded-lg shadow-2xl hover:shadow-xl transition-all duration-500">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-4">Conseils pour les visiteurs</h3>
          <p className="text-lg text-center">{adventureData.tips}</p>
        </div>
      </div>
    </div>
  );
};

export default Destination5;
