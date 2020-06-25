import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import LanguageContext from './languageContext';

const App =() => {
  const [lang,setLang] = useState('pl');
  
  return(
    <BrowserRouter>
    <LanguageContext.Provider value={lang}>
      <Header onLanguageChange={setLang} />
      <Main />
      <Footer />
      </LanguageContext.Provider>
    </BrowserRouter>
);
}

export default App;
