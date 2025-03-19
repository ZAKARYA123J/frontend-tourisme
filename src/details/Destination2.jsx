import React from 'react';

const Destination2 = () => {
  const resortData = {
    name: "Beach Escape Resort",
    description: "Beach Escape Resort est un havre de paix situé sur une plage immaculée, offrant des vues spectaculaires sur l'horizon. Ce refuge de luxe est parfait pour ceux qui cherchent à se détendre loin du tumulte quotidien. L'endroit propose des chambres modernes avec des balcons privés donnant sur l'océan. Les visiteurs peuvent profiter de nombreuses activités en bord de mer, telles que la plongée, le kayak et les promenades sur la plage. Le resort abrite également un restaurant de fruits de mer réputé pour ses plats raffinés. Les installations de bien-être, comprenant un spa et un sauna, permettent aux invités de se ressourcer. En journée, les clients peuvent se détendre au bord de la piscine ou participer à des cours de yoga en plein air. Le meilleur moment pour visiter est pendant la saison estivale, de juin à septembre, pour profiter du soleil et des eaux cristallines. Pour une expérience plus exclusive, des services de massage sur la plage sont disponibles. Beach Escape Resort est l'endroit idéal pour s'évader et se reconnecter avec la nature.",
    imageUrl: "https://example.com/beach-escape-image.jpg",
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
    tips: "Réservez vos activités à l'avance pour garantir votre place, et n'oubliez pas de profiter du coucher du soleil depuis la plage."
  };

  return (
    <div>
     
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

export default Destination2;
