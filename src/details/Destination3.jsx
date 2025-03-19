import React from 'react';

const Destination3 = () => {
  const resortData = {
    name: "Aghroud Beach Resort",
    description: "Aghroud Beach Resort est un lieu idyllique situé sur la plage d'Aghroud, offrant une vue imprenable sur l'océan Atlantique. Ce complexe de luxe propose des chambres modernes avec des balcons privés, parfait pour profiter du climat doux toute l'année. L'endroit est idéal pour ceux qui recherchent des vacances reposantes et actives, avec des activités comme le surf, la plongée sous-marine et des excursions en bateau. Le resort dispose de plusieurs restaurants servant des plats traditionnels marocains et internationaux. Vous pourrez également profiter du spa pour un moment de relaxation après une journée d'activités. Le meilleur moment pour visiter est de mars à novembre, lorsque la météo est idéale pour se détendre au bord de l'eau et explorer les environs.",
    imageUrl: "https://example.com/aghroud-beach-image.jpg",
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
    tips: "N'oubliez pas de visiter le souk d'Agadir et de goûter à la cuisine locale. Pensez à réserver les excursions et activités à l'avance pour garantir votre place."
  };

  return (
    <div>
      {/* Image d'arrière-plan */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${resortData.imageUrl})` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{resortData.name}</h1>
          <p className="text-lg md:text-xl mb-6">{resortData.location}</p>
        </div>
      </div>

      {/* Article détaillé */}
      <div className="container mx-auto px-6 py-12">
        <section className="prose lg:prose-xl text-gray-800">
          {/* Description */}
          <h2 className="text-3xl font-semibold mb-4">Description du Resort</h2>
          <p className="mb-6">{resortData.description}</p>

          {/* Meilleur moment pour visiter */}
          <h3 className="text-2xl font-semibold mt-8">Meilleur moment pour visiter</h3>
          <p className="mb-6">{resortData.bestTimeToVisit}</p>

          {/* Services disponibles */}
          <h3 className="text-2xl font-semibold mt-8">Services du Resort</h3>
          <ul className="list-disc pl-5 mb-6">
            {resortData.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>

          {/* Conseils pour les visiteurs */}
          <h3 className="text-2xl font-semibold mt-8">Conseils pour les visiteurs</h3>
          <p className="mb-6">{resortData.tips}</p>
        </section>
      </div>
    </div>
  );
};

export default Destination3;
