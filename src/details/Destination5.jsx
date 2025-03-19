import React from 'react';
import aglou from '../assets/aglou.jpg';
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
    <div>
   
      <div className="relative h-screen">
        <img 
          src={aglou} 
          alt="Quad Adventure" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{adventureData.name}</h1>
          <p className="text-lg md:text-xl mb-6">{adventureData.location}</p>
        </div>
      </div>

   
      <div className="container mx-auto px-6 py-12">
        <section className="prose lg:prose-xl text-gray-800">
 
          <h2 className="text-3xl font-semibold mb-4">Description de l'Aventure</h2>
          <p className="mb-6">{adventureData.description}</p>

    
          <h3 className="text-2xl font-semibold mt-8">Meilleur moment pour visiter</h3>
          <p className="mb-6">{adventureData.bestTimeToVisit}</p>

       
          <h3 className="text-2xl font-semibold mt-8">Services disponibles</h3>
          <ul className="list-disc pl-5 mb-6">
            {adventureData.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>

         
          <h3 className="text-2xl font-semibold mt-8">Conseils pour les visiteurs</h3>
          <p className="mb-6">{adventureData.tips}</p>
        </section>
      </div>
    </div>
  );
};

export default Destination5;
