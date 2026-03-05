import LanguageContext from './LanguageContext'
import React,{useState} from 'react';
import { use } from 'react';
const LanguageProvider = ({children}) => {
    const [language,setLanguage]=useState("en");
    const changeLanguage=(lang)=>{
        setLanguage(lang);
    }
  return (
    <LanguageContext.Provider value={{language,changeLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider