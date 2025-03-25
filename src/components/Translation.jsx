import React, { createContext, useState, useEffect } from "react";

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); 
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async (text, targetLang) => {
      try {
        const response = await fetch(`https://targum.api.mashape.com/translate?text=${text}&target_lang=${targetLang}`, {
          method: "GET",  // Ensure it's a GET request, as that's what most translation APIs use
          headers: {
            "X-Mashape-Key": "your-mashape-api-key",  // Replace with your actual API key
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch translations');
        }

        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error("Error fetching translations: ", error);
      }
    };

    fetchTranslations("Hello", language);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
