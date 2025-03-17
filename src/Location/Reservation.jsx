import { useState, useEffect } from "react";
import axios from "axios";
import voitureImage from '../Location/voiture.jpg';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Reservation = ({ categories = [] }) => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [prixTotal, setPrixTotal] = useState(0);
  const [emailClient, setEmailClient] = useState("");
  const [nomClient, setNomClient] = useState("");
  const [transmission, setTransmission] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCarDetails, setSelectedCarDetails] = useState(null);
  const [successMessage, setSuccessMessage] = useState(""); 

  useEffect(() => {
    if (categoryId) {
      axios
        .get(`http://127.0.0.1:8000/api/cars?category_id=${categoryId}`)
        .then((response) => {
          setCars(response.data);
        })
        .catch((error) => {
          console.error("Erreur de récupération des voitures:", error);
        });
    } else {
      setCars([]);
      setFilteredCars([]);
    }
  }, [categoryId]);

  useEffect(() => {
    if (transmission && Array.isArray(cars)) {
      setFilteredCars(cars.filter((car) => car.transmission === transmission));
    } else {
      setFilteredCars([]);
    }
  }, [transmission, cars]);

  useEffect(() => {
    if (selectedCar) {
      const car = cars.find((c) => c.id === parseInt(selectedCar));
      setSelectedCarDetails(car || null);
    } else {
      setSelectedCarDetails(null);
    }
  }, [selectedCar, cars]);

  useEffect(() => {
    if (selectedCar && dateDebut && dateFin) {
      const car = cars.find((c) => c.id === parseInt(selectedCar));
      if (car) {
        const startDate = new Date(dateDebut);
        const endDate = new Date(dateFin);
        if (startDate >= endDate) {
          setPrixTotal(0);
        } else {
          const diffInDays = Math.max(
            (endDate - startDate) / (1000 * 60 * 60 * 24),
            1
          );
          setPrixTotal(diffInDays * car.price_per_day);
        }
      }
    } else {
      setPrixTotal(0);
    }
  }, [selectedCar, dateDebut, dateFin, cars]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCar || !dateDebut || !dateFin || !emailClient || !nomClient) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const reservation = {
      car_id: selectedCar,
      email_client: emailClient,
      nom_client: nomClient,
      date_debut: dateDebut,
      date_fin: dateFin,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/reservations",
        reservation
      );
      setSuccessMessage("✅ Réservation réussie ! Votre voiture est réservée.");
      setTimeout(() => setSuccessMessage(""), 5000); 

      setDateDebut("");
      setDateFin("");
      setSelectedCar("");
      setCategoryId("");
      setPrixTotal(0);
      setEmailClient("");
      setNomClient("");
      setTransmission("");
      setCars([]);
      setFilteredCars([]);
      setSelectedCarDetails(null);
    } catch (error) {
      console.error("Erreur lors de la réservation:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Une erreur s'est produite");
    }
  };

  return (
    <><NavBar/> 
    <div className="flex justify-center w-full p-10  h-screen items-center min-h-screen" style={{ position: 'relative' }}>
      
      <div className="absolute inset-0">
        <img src={voitureImage} alt="Car" className="w-full h-full object-cover opacity-50" />
      </div>

      
      <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg z-10">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Réservez votre voiture à Agadir</h2>

        {successMessage && (
          <p className="text-green-500 text-lg font-semibold text-center mb-4">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
        
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-lg text-gray-800 mb-2">Date de début :</label>
              <input
                type="date"
                value={dateDebut}
                onChange={(e) => setDateDebut(e.target.value)}
                className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 hover:border-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg text-gray-800 mb-2">Date de fin :</label>
              <input
                type="date"
                value={dateFin}
                onChange={(e) => setDateFin(e.target.value)}
                className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 hover:border-blue-500"
                required
              />
            </div>
          </div>

         
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-lg text-gray-800 mb-2">Choisir une catégorie :</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 hover:border-blue-500"
                required
              >
                <option value="">Sélectionner une catégorie</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.nom}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-lg text-gray-800 mb-2">Type de transmission :</label>
              <select
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 hover:border-blue-500"
                required
              >
                <option value="">Sélectionner</option>
                <option value="Manuelle">Manuelle</option>
                <option value="Automatique">Automatique</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-lg text-gray-800 mb-2">Choisir une voiture :</label>
            <select
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 hover:border-blue-500"
              required
            >
              <option value="">Sélectionner une voiture</option>
              {filteredCars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.marque} {car.modele} - {car.price_per_day} MAD/jour
                </option>
              ))}
            </select>
          </div>

       
          {selectedCarDetails && (
            <div className="flex flex-col mt-4 text-gray-800">
              <p><strong>Marque :</strong> {selectedCarDetails.marque}</p>
              <p><strong>Modèle :</strong> {selectedCarDetails.modele}</p>
              <p><strong>Transmission :</strong> {selectedCarDetails.transmission}</p>
              <p><strong>Prix par jour :</strong> {selectedCarDetails.price_per_day} MAD</p>
            </div>
          )}

         
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-lg text-gray-800 mb-2">Nom du client :</label>
              <input
                type="text"
                value={nomClient}
                onChange={(e) => setNomClient(e.target.value)}
                className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 hover:border-blue-500"
                required
                placeholder="Entrez votre nom"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg text-gray-800 mb-2">Email du client :</label>
              <input
                type="email"
                value={emailClient}
                onChange={(e) => setEmailClient(e.target.value)}
                className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 hover:border-blue-500"
                required
                placeholder="Entrez votre email"
              />
            </div>
          </div>

          <p className="text-xl font-semibold text-gray-800 text-center my-4">💰 Prix Total : {prixTotal} MAD</p>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition duration-300"
          >
            Réserver
          </button>
        </form>
      </div>
    </div>
<Footer/> </> );
};

export default Reservation;
