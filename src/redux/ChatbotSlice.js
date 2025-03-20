import {createSlice} from "@reduxjs/toolkit";
const initialState ={
    messages:[
        {
            text: "Hi there ! how can i help plan your trip today?", sender:"bot"
        },
    ],
    userInput:"",
};
const chatbotSlice = createSlice({
    name:"chatbot",
    initialState,
    reducers:{
        addMessage:(state,action)=>{
            state.messages.push(action.payload);
        },
    setUserInput:(state,action)=>{
        state.userInput= action.payload;
    },
    clearUserInput:(state) =>{
        state.userInput = "";
    },
    },
});
export const {addMessage, setUserInput, clearUserInput} = chatbotSlice.actions;
export default chatbotSlice.reducer;