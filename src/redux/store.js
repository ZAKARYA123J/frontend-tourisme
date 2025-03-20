import {configureStore} from "@reduxjs/toolkit";
import chatbotReducer from "./ChatbotSlice";
export const store=configureStore({
    reducer:{
        chatbot : chatbotReducer,
    },
});