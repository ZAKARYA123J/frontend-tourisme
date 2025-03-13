import React from "react"

import { AiOutlineSearch } from "react-icons/ai";
import {BiSearch} from "react-icons/bi"
const Hero = () =>{
    return(
        <div className="w-full h-screen relative">
<video className="w-full h-full object-cover" src={"https://res.cloudinary.com/doi4cmnue/video/upload/v1741714828/bfwygznsy7xmfc7hruci.mp4"} autoPlay loop muted/>
<div className="absolute w-full h-full top-0 left-0 border-gray-900/30">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4  ">
            <h1 className="text-color p-4">Discover Agadir</h1>
            <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
            rounded-md
             text-black bg-gray-100/90 " >
                <div>
              
           </div><BiSearch className="text-gray-500 ml-2" size={24} />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full px-4 py-2 text-gray-800 bg-transparent outline-none"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                Search
              </button>
            </form>
        </div>
 
</div>
        </div>
    )
}


export default Hero;