import { useState } from "react";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import footb from '../assets/footb.jpg';
import volleyball from '../assets/volleyball.jpg';
import golf from '../assets/golf.jpg';
import Basketball from '../assets/Basketball.jpg';
import football25 from '../assets/football25.jpg';
import tennis from '../assets/tennis.jpg';
import golf25 from '../assets/golf25.jpg';
import fairment from '../assets/fairment.jpg';
import yoga from '../assets/yoga.jpg';
import poker from '../assets/poker.jpg';

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
        name:'Agadir International Football Tournament', 
        date:' February 15-16, 2025. ', 
        description:'This event features eight teams (four from Morocco and four from Europe) competing for the Agadir Cup. Matches will be played over the weekend, with teams staying at Hotel Allegro near the beach ',
        price:'Free to watch; team registration starts at 500 MAD.', 
        image: volleyball ,
        isFavorite: false ,
        },
        {
            id: 5,
        name:' Football Tournament, Agadir City Football Cup', 
        date:'Typically held in May', 
        description:'A local football (soccer) tournament featuring teams from Agadir and surrounding regions. Held at a local stadium, it’s a great event for football fans.',
        price:' Free to watch; team registration starts at 1,000 MAD.', 
        image: football25 ,
        isFavorite: false ,

        },
        {
            id: 6,
        name:' MT200 Agadir Tennis Tournament', 
        date:'March 24-30, 2025', 
        description:'Hosted by the ITF, this clay-court event will take place in Morocco, with players competing in various categories ',
        price:' Free to watch; team registration starts at 1,000 MAD.', 
        image: tennis ,
        isFavorite: false ,

        },
        {
            id: 7,
        name:'Open Golf Agadir 2025', 
        date:'April 2-6, 2025', 
        description:'This tournament includes multiple rounds across different golf courses in Agadir, such as Golf du Soleil, Golf Océan, and Golf des Dunes. Open to both amateurs and professionals',
        price:' Free to watch; team registration starts at 1,000 MAD.', 
        image: golf25,
        isFavorite: false ,

        },
        {
            id: 8,
        name:'Poker Tournaments at Casino Atlantic Agadir', 
        date:'february and june', 
        description:' The casino hosts several poker events throughout the year, including high-stakes tournaments with guaranteed prize pools of up to 1,000,000 Dh. Key tournaments occur in February and June',
        price:' Free to watch; team registration starts at 1,000 MAD.', 
        image: poker ,
        isFavorite: false ,

        },
        {
            id: 9,
        name:'Fairmont Golf Cup de Taghazout ', 
        date:'Typically held in May', 
        description:' A golf tournament taking place from May 2-4 at the Tazegzout Bay Resort near Agadir【25】',
        price:' Free to watch; team registration starts at 1,000 MAD.', 
        image: fairment ,
        isFavorite: false ,

        },
        {
            id: 10,
        name:'Stage Yoga & Golf au Maroc', 
        date:' April 16-23', 
        description:'A unique sports event combining yoga and golf, scheduled at the Agadir Golf Training Center from April 16-23【25】',
        price:' Free to watch; team registration starts at 1,000 MAD.', 
        image: yoga ,
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
                    <img src={tournament.image} alt={tournament.name} className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
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




