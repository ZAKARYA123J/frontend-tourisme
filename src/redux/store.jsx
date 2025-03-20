import {configureStore} from "@reduxjs/toolkit";
import ChatbotReducer from "./ChatbotSlice";
export const store = configureStore({
    reducer : {
        chatbot : ChatbotReducer,
    },
});