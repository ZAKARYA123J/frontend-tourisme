import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import voitureImage from "../Location/voiture.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AnimatedSelect = ({ label, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div className="w-full">
      <label className="text-white font-semibold text-lg mb-1 block">{label}</label>
      <div
        className="p-4 text-lg rounded-lg bg-white border border-gray-400 cursor-pointer 
                   hover:bg-gray-200 transition duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLabel}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full mt-2 bg-white border border-gray-400 rounded-lg shadow-lg z-10"
          >
            {options.map((option) => (
              <motion.div
                key={option.value}
                className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer 
                           transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Reservation = ({ categories = [] }) => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [prixTotal, setPrixTotal] = useState(0);
  const [emailClient, setEmailClient] = useState("");
  const [nomClient, setNomClient] = useState("");
  const [num_tele, setNumTele] = useState('');
  const [transmission, setTransmission] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCarDetails, setSelectedCarDetails] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (categoryId) {
      axios
        .get(`http://127.0.0.1:8000/api/cars?category_id=${categoryId}`)
        .then((response) => setCars(response.data))
        .catch((error) => console.error("Error retrieving cars", error));
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
          const diffInDays = Math.max((endDate - startDate) / (1000 * 60 * 60 * 24), 1);
          setPrixTotal(diffInDays * car.price_per_day);
        }
      }
    } else {
      setPrixTotal(0);
    }
  }, [selectedCar, dateDebut, dateFin, cars]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoryId || categoryId === "") {
      alert("Please select a category");
      return;
    }
    if (!selectedCar || selectedCar === "") {
      alert("Please select a car");
      return;
    }

    const reservationData = {
    
      car_id: selectedCar,
      date_debut:dateDebut,
      date_fin:dateFin,
     
      nom_client:nomClient,
      email_client:emailClient,
      num_tele:num_tele,
    };

   axios
    .post("http://127.0.0.1:8000/api/reservations", reservationData)
    .then((response) => {
      setSuccessMessage("  Reservation successful !");
    })
    .catch((error) => {
      console.error("Reservation failed", error.response.data);
    });
  };
   
  
  
  

  return (
    <>
     
      <div className="flex justify-center w-full  h-screen  bg-black items-center min-h-screen relative">
        <div className="absolute inset-0">
          <img src={voitureImage} alt="Car" className="w-full h-full object-cover opacity-50" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl w-full p-8 mt-20 bg-white rounded-lg backdrop-blur-lg border bg-opacity-35 border-slate-950 border-opacity-30 shadow-xl z-10"
        >
          <h2 className="text-4xl font-semibold text-center text-white mb-6">
          Book your car in Agadir ✨😊
          </h2>

          <motion.form className="grid grid-cols-2 gap-6  " onSubmit={handleSubmit}>
            
            <AnimatedSelect
              label="Categories 😊"
              options={categories.map(cat => ({ value: cat.id, label: cat.nom }))} 
              value={categoryId}
              onChange={setCategoryId}
              placeholder="Select a Category"
            />

            <AnimatedSelect
              label="Transmission 😊"
              options={[{ value: "Manuelle", label: "Manuelle" }, { value: "Automatique", label: "Automatique" }]}
              value={transmission}
              onChange={setTransmission}
              placeholder="Select a Transmission"
            />

            <AnimatedSelect
              label="Cars 😊🚗"
              options={filteredCars.map(car => ({
                value: car.id, 
                label: `${car.marque} ${car.modele} - ${car.price_per_day} MAD/jour`
              }))}
              value={selectedCar}
              onChange={setSelectedCar}
              placeholder="Select a Car"
            />

            <motion.div>
              <label className="text-white font-semibold text-lg mb-1 block">Start Date 😊📅</label>
              <input type="date" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} className="input-style p-4 rounded-lg w-full" required />
            </motion.div>

            <motion.div>
              <label className="text-white font-semibold text-lg mb-1 block">End Date 😊📅</label>
              <input type="date" value={dateFin} onChange={(e) => setDateFin(e.target.value)} className="input-style p-4 rounded-lg w-full" required />
            </motion.div>

            <div>
              <label className="text-white font-semibold text-lg mb-1 block">Full Name 😊</label>
              <motion.input 
                type="text"
                value={nomClient}
                onChange={(e) => setNomClient(e.target.value)}
                className="input-style p-4 text-lg rounded-lg w-full border-black"
                required
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            <div>
              <label className="text-white font-semibold text-lg mb-1 block">Phone Number 😊📱</label>
              <motion.input 
                type="text"
                value={num_tele}
                onChange={(e) => setNumTele(e.target.value)}
                className="input-style p-4 text-lg rounded-lg w-full border-black"
                required
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            <div>
              <label className="text-white font-semibold text-lg mb-1 block">Email 📧</label>
              <motion.input 
                type="email"
                value={emailClient}
                onChange={(e) => setEmailClient(e.target.value)}
                className="input-style p-4 text-lg rounded-lg w-full border-black"
                required
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            <motion.p className="text-xl font-semibold text-white text-center col-span-2">
              💰 Prix Total : {prixTotal} MAD
            </motion.p>

            {/* {selectedCarDetails && (
              <div className="text-white text-center mt-4">
                <p><strong>Voiture sélectionnée:</strong> {selectedCarDetails.marque} {selectedCarDetails.modele}</p>
                <p><strong>Prix par jour:</strong> {selectedCarDetails.price_per_day} MAD</p>
                <p><strong>Transmission:</strong> {selectedCarDetails.transmission}</p>
              </div>
            )} */}

            <motion.button type="submit" className="col-span-2 bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out">
              Réserver maintenant
            </motion.button>
          </motion.form>

          {successMessage && (
            <motion.p className="mt-6 text-center text-green-500">{successMessage}</motion.p>
          )}
        </motion.div>
      </div>
    
    </>
  );
};

export default Reservation;
