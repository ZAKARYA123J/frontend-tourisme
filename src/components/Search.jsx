import map2 from "../assets/map2.png"
import {useNavigate} from 'react-router-dom';
import {useInView} from 'react-intersection-observer'
import { motion } from "framer-motion";

const Search = () => {
  const navigate = useNavigate();
  const handleMapClick=()=>{
    window.open("https://map.proxi.co/r/C4R1g03KTxSCBtvaS5wE",'_blank');
  };
  
       
      
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="text-2xl font-bold text-center " >WHY CHOOSE AGADIR</h2>
          <p className="py-4 text-lg font-semibold">
          Agadir is a city of beauty and calm. With its long,
           sandy beaches and the peaceful Atlas Mountains in the distance, it offers a perfect mix of nature and culture.
            The warm sun, tasty local food, and friendly people make you feel right at home.
              From lively markets to quiet beachside escapes,
              we know Agadir well. Let us show your clients the best of this amazing city, 
              where every day feels special and relaxing.
          </p>
     
        </div>
        
      
      </div>
  <div className='relative group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
    <div className='relative overflow-hidden rounded-lg cursor-pointer'
    onClick={handleMapClick}
    role='button'
    tabIndex={0}
    >
      <img src={map2} alt="Interactive agadir Map"
      className='w-full h-auto rounded-lg transform group-hover:scale-105 transition-transform duration-300' />
      <div className='absolute inset-0 bg-gradient-to-t form-blue-900/60 to-transparent flex items-end p-6'>
      
      </div>
    </div>
   <p className='text-center text-black-600 mt-4'>
    click to discover AGADIR
    discover key locations,beaches,and attractions
   </p>
  </div>
    
      
      </div>
      
   
  );
};

export default Search;