import { FaFacebook,FaTwitter,FaYoutube,FaPinterest,FaInstagram } from "react-icons/fa";
 const Footer = () => {
  return (
    <footer className="  mt-auto"> 
      <div className='w-full bg-gray-100 py-16'>
       <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
         <div className='sm:flex text-center justify-between items-center'>
           <h1>TravelTour</h1>
           
           <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
             <FaFacebook className='icon' />
             <FaTwitter className='icon' />
             <FaYoutube className='icon' />
             <FaPinterest className='icon' />
             <FaInstagram className='icon' />
           </div>
         </div>
         <div className='flex justify-between'>
           <ul className='lg:flex'>
             <li>About</li>
             <li>Partnerships</li>
             <li>Careers</li>
             <li>Newsroom</li>
             <li>Advertising</li>
           </ul>
           <ul className='text-right lg:flex'>
            <li><p>Copyright 2025 -
            All rights reserved
            This site is managed by the Regional Council of Tourism - Agadir Souss-Massa</p></li>
           </ul>
         </div>
       </div>
     </div>
     </footer>
    );
 };

 


 
 export default Footer;