import {configureStore} from "@reduxjs/toolkit";
import ChatbotReducer from "./ChatbotSlice";
import weatherReducer from "./WeatherSlice";
export const store = configureStore({
    reducer : {
        chatbot : ChatbotReducer,
        weather : weatherReducer,
    },
});