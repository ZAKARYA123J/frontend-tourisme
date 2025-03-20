import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  userInput: "",
};

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
    clearUserInput: (state) => {
      state.userInput = "";
    },
  },
});

export const { addMessage, setUserInput, clearUserInput } = chatbotSlice.actions;
export default chatbotSlice.reducer;
