import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';

const languages = [
    { code: "en", lang: 'English' },
    { code: "fr", lang: 'Français' },
    { code: "ar", lang: 'العربية' }
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (code) => {
        i18n.changeLanguage(code); 
    };
    useEffect(()=>{
        document.body.dir = i18n.dir();
    } ,[i18n,i18n.language])

    return (
        <div className='btn-container'>
            {
                languages.map((lng) => {
                    return (
                        <button
                            key={lng.code}
                            onClick={() => changeLanguage(lng.code)}
                        >
                            {lng.lang}
                        </button>
                    );
                })
            }
        </div>
    );
}

export default LanguageSelector;
