import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext';
import AuthContext from '../context/AuthContext';
import LanguageContext from '../context/LanguageContext';

const Home = () => {
  const navigate = useNavigate();
  const {theme,changeTheme}= useContext(ThemeContext);
  const user =useContext(AuthContext);
  const {language,changeLanguage}=useContext(LanguageContext);
  const handleClick=()=>{
    navigate("/about");
  }
  const message={
    en:{
      greeting:"Hello"
    },
    tel:{
      greeting:"నమస్కారం"
    },
    tam:{
      greeting:"வணக்கம்"
    },
    kan:{
      greeting:"ನಮಸ್ಕಾರ"
    },
    mal:{
      greeting:"ഹലോ"
    }
  }
  const text=message[language];
  return (
    <div>
      <button onClick={handleClick}>About</button>
      <h1>{theme}</h1>
      <button onClick={()=>changeTheme('dark')}>dark</button>
      <button onClick={()=>changeTheme('light')}>light</button>
      <h2>user details</h2>
      <p>id:{user.id}</p>
      <p>name:{user.name}</p>
      <p>email:{user.email}</p>
      <p>Greeting:{text.greeting}</p>
      <button onClick={()=>changeLanguage('en')}>english</button>
      <button onClick={()=>changeLanguage('tel')}>telugu</button>
      <button onClick={()=>changeLanguage('tam')}>tamil</button>
      <button onClick={()=>changeLanguage('kan')}>kannada</button>
      <button onClick={()=>changeLanguage('mal')}>malayalam</button>
    </div>
  )
}

export default Home