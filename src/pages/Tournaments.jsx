import { useState } from "react";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import footb from '../assets/footb.jpg';
import volleyball from '../assets/volleyball.jpg';
import golf from '../assets/golf.jpg';
import Basketball from '../assets/Basketball.jpg';

const tournaments = () =>{
 const [tournaments,settournaments] = useState([
    
        {
            id: 1,
        name:' Football Tournament, Agadir City Football Cup', 
        date:'Typically held in May', 
        description:'A local football (soccer) tournament featuring teams from Agadir and surrounding regions. Held at a local stadium, it’s a great event for football fans.',
        price:' Free to watch; team registration starts at 1,000 MAD.', 
        image: footb ,
        isFavorite: false ,

        },
        { 
            id: 2,
            name:' Golf Tournament,Agadir Golf Open', 
            date:'Typically held in April', 
            description:' A golf tournament held at one of Agadir’s premier golf courses. Open to amateur and professional golfers.', 
            price:'Registration starts at 800 MAD.', 
            image: golf ,
            isFavorite: false ,
            },
            { 
                id: 3,
                name:'Basketball Tournament, Agadir Basketball Cup', 
                date:'Typically held in June', 
                description:' A local basketball tournament featuring teams from Agadir and nearby cities. Held at indoor and outdoor courts.',
                price:'team registration starts at 700 .', 
                image: Basketball,
                isFAvorite: false 
                },
                {
        id: 4,
        name:'Beach Volleyball Tournament', 
        date:' Typically held in July or August ', 
        description:'A competitive beach volleyball tournament held on Agadir’s sandy beaches. Open to both amateur and professional teams.',
        price:'Free to watch; team registration starts at 500 MAD.', 
        image: volleyball ,
        isFavorite: false ,
        },
            

 ])
 const toggleFavorite = (id) => {
    settournaments(tournaments.map((tournament) => tournament.id === id ? { ...tournament, isFavorite: !tournament.isFavorite } : tournament));
};

return (
    <div className="container mx-auto  p-8">
        <h1 className="text-4xl font-bold text-blue-800 p-11 mb-8">tournaments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
                <div key={tournament.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <img src={tournament.image} alt={tournament.name} className="tournament-image" />
                    <h3>{tournament.name}</h3>
                    <p>{tournament.description}</p>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                        </h2>
                        <button onClick={() => toggleFavorite(tournament.id)} className="text-red-500 hover:text-red-600">
                            {tournament.isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart color="gray" size={24} />}
                        </button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                            <span className="font-semibold">Date:</span> {tournament.date}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Price:</span> {tournament.price} MAD
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default tournaments;




