import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector) 
  .init({
    debug: true,
    lng: "en", 
    resources: {
      en: {
        translation: {
          discover: "Discover Souss Massa",
          region_life: "A region full of life, culture, and adventure!",
        },
      },
      fr: {
        translation: {
          discover: "Découvrez Souss Massa",
          region_life: "Une région pleine de vie, de culture et d'aventure!",
        },
      },
      ar: {
        translation: {
          discover: "اكتشف سوس ماسة",
          region_life: "منطقة مليئة بالحياة والثقافة والمغامرة!",
        },
      },
    },
    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: false, 
    },
  });

export default i18n;
