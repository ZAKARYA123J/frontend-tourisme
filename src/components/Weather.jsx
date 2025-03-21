import React, { useState, useEffect, useRef } from "react";
import { FaCloudSun } from "react-icons/fa"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/WeatherSlice";

const Weather = () => {
  const dispatch = useDispatch();
  const { weatherData, status, error } = useSelector((state) => state.weather);
  const [isWeatherVisible, setIsWeatherVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  const getWeatherIcon = (weatherCode) => {
    const icons = {
      1: "01d", 
      2: "02d", 
      3: "03d",
      4: "04d", 
      5: "09d", 
      6: "13d", 
      7: "11d", 
    };
    return icons[weatherCode] || "03d"; 
  };

  return (
    <>
      <button
        onClick={() => setIsWeatherVisible(!isWeatherVisible)}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg  hover:translate-x-0"
      >
        <FaCloudSun size={24} />
      </button>

      {isWeatherVisible && (
        <div className="fixed bottom-20 right-5 w-96 h-96 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {status === "loading" && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {weatherData && (
              <div>
                <p className="text-xl font-semibold text-center">Temperature: {weatherData.temperature}°C</p>
                <p className="text-lg font-medium text-center">Wind Speed: {weatherData.windspeed} km/h</p>
                <p className="text-lg font-medium text-center">Condition: {weatherData.weathercode === 3 ? "Cloudy" : "Clear"}</p>
                <div className="text-center mt-4">
                  <img
                    src={`https://openweathermap.org/img/wn/${getWeatherIcon(weatherData.weathercode)}.png`}
                    alt="Weather Icon"
                    className="mx-auto w-16 h-16"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-gray-100 flex justify-center">
            <button
              onClick={() => dispatch(fetchWeather())}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Refresh Weather
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Weather;
