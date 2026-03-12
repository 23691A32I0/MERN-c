import ThemeContext from './ThemeContext'
import React,{useState} from 'react';
const ThemeProvider = ({children}) => {
    const [theme,setTheme]=useState("dark");
    const changeTheme=(mode)=>{
        setTheme(mode);
    }
  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider