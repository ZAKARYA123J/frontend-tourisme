import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="text-2xl font-bold text-center " >WHY CHOOSE AGADIR</h2>
          <p className="py-4 text-lg font-semibold">
          Agadir is a city of beauty and calm. With its long, sandy beaches and the peaceful Atlas Mountains in the distance, it offers a perfect mix of nature and culture. The warm sun, tasty local food, and friendly people make you feel right at home.

From lively markets to quiet beachside escapes, we know Agadir well. Let us show your clients the best of this amazing city, where every day feels special and relaxing.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button className="hover:bg-gray-300 p-4 rounded-full transition duration-300">
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2 text-xl">LEADING SERVICE</h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button className="hover:bg-gray-300 p-4 rounded-full transition duration-300">
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2 text-xl">EXPLORATION AWAITS</h3>
              <p className="py-1">ALL-INCLUSIVE VACATION EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gray-100 p-6 text-center rounded-lg shadow-md">
          <p className="text-xl font-semibold text-gray-800">Get an Additional <span className="text-blue-600">10% Off</span></p>
          <p className="py-2 text-lg text-red-500 font-medium">12 Hours Left</p>
          <p className="bg-gray-800 text-white py-2 rounded-md font-semibold">Book Now and Save</p>
        </div>
        <form className="bg-white p-6 mt-6 shadow-md rounded-lg">
          <div className="mb-4">
            <label className="text-lg font-semibold text-gray-800">Destination</label>
            <select className="border rounded-md p-2 w-full mt-2 text-gray-700">
              <option>Agadir Beach</option>
              <option>Taghazout</option>
              <option>Paradise Valley</option>
              <option>Imsouane</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="text-lg font-semibold text-gray-800">Check-In</label>
            <input className="border rounded-md p-2 w-full mt-2 text-gray-700" type="date" />
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold text-gray-800">Check-Out</label>
            <input className="border rounded-md p-2 w-full mt-2 text-gray-700" type="date" />
          </div>

          <button className="w-full bg-blue-500 text-white p-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300">
            Check Availability
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
