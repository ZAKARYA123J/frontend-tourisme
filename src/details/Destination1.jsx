import React from "react";

const Destination1 = () => {
  const resortData = {
    name: "Ocean Breeze Resort",
    description:
      "Ocean Breeze Resort est un complexe de luxe situé au bord de la mer, offrant une vue imprenable sur l'océan. Avec ses installations modernes et son cadre idyllique, il est l'endroit idéal pour une escapade paisible. Le resort propose une piscine à débordement, un spa haut de gamme, ainsi que plusieurs restaurants gastronomiques. Les amateurs de sport nautique pourront profiter des activités telles que le jet-ski et le surf. En plus de ses services de qualité, l'établissement offre des chambres spacieuses avec des vues panoramiques. Le meilleur moment pour visiter est de mai à octobre, lorsque le climat est optimal. Les visiteurs peuvent aussi profiter des soirées animées avec des concerts en plein air. Des excursions en bateau et des randonnées sont disponibles pour explorer la région. L'emplacement du resort, proche de la plage, permet un accès facile à l'eau cristalline. Le resort garantit une expérience de vacances inoubliable dans un cadre paradisiaque.",
    imageUrl: "https://example.com/resort-image.jpg",
    location: "Plage de Los Angeles, Californie",
    services: [
      "Piscine à débordement",
      "Spa et bien-être",
      "Restaurants gastronomiques",
      "Activités nautiques",
      "Salle de sport moderne",
    ],
    bestTimeToVisit:
      "Le meilleur moment pour visiter est de mai à octobre, lorsque le climat est doux et propice aux activités extérieures.",
    tips: "Il est conseillé de réserver les activités populaires à l'avance, comme le jet-ski ou les excursions en bateau. N'oubliez pas de profiter des soirées avec vue sur le coucher du soleil.",
  };

  return (
    <div>
     
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${resortData.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {resortData.name}
          </h1>
          <p className="text-lg md:text-xl mb-6">{resortData.location}</p>
        </div>
      </div>

     
      <div className="container mx-auto px-6 py-12">
        <section className="prose lg:prose-xl text-gray-800">
       
          <h2 className="text-3xl font-semibold mb-4">Description du Resort</h2>
          <p className="mb-6">{resortData.description}</p>

         
          <h3 className="text-2xl font-semibold mt-8">
            Meilleur moment pour visiter
          </h3>
          <p className="mb-6">{resortData.bestTimeToVisit}</p>

          <h3 className="text-2xl font-semibold mt-8">Services du Resort</h3>
          <ul className="list-disc pl-5 mb-6">
            {resortData.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>

      
          <h3 className="text-2xl font-semibold mt-8">
            Conseils pour les visiteurs
          </h3>
          <p className="mb-6">{resortData.tips}</p>
        </section>
      </div>
    </div>
  );
};

export default Destination1;
