import React, { useState,useEffect,useRef } from "react";
import { FaRobot } from "react-icons/fa"; 
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setUserInput, clearUserInput } from "../redux/ChatbotSlice";

const Chatbot = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chatbot.messages || []);
  const userInput = useSelector((state) => state.chatbot.userInput || "");
  const [isChatVisible, setIsChatVisible] = useState(false);
  const chatWindowRef = useRef(null);
  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    dispatch(addMessage({ text: userInput, sender: "user" }));
    dispatch(clearUserInput());

    setTimeout(() => {
      dispatch(addMessage({ text: `Let me find some options for you about "${userInput}"...`, sender: "bot" }));
      fetchDestinationInfo(userInput);
    }, 1000);
  };

  const fetchDestinationInfo = async (destination) => {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${destination}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        const placeInfo = data.extract 
            ? data.extract 
            : "I couldn't find specific information about this place, but you can check Wikipedia for more details.";

        dispatch(
            addMessage({
                text: `I found some information about ${destination}: ${placeInfo}`,
                sender: "bot",
            })
        );
    } catch (error) {
        dispatch(
            addMessage({
                text: `Sorry, I couldn't find any info about "${destination}". Try searching on Google or Wikipedia.`,
                sender: "bot",
            })
        );
    }
};
 

  return (
    <>
      <button
        onClick={() => setIsChatVisible(!isChatVisible)} 
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        <FaRobot size={24} />
      </button>

      {isChatVisible && (
        <div ref={chatWindowRef} className="fixed bottom-5 right-5 w-96 h-96 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "bot" ? "justify-start" : "justify-end"}`}>
                <div className={`inline-block px-4 py-2 rounded-lg ${message.sender === "bot" ? "bg-blue-200" : "bg-green-200"} max-w-[70%]`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-100 flex">
            <input
              type="text"
              className="w-full p-2 border-2 border-gray-300 rounded-lg"
              placeholder="Ask me about a destination.."
              value={userInput}
              onChange={(e) => dispatch(setUserInput(e.target.value))}
            />
            <button onClick={handleSendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
