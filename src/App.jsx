import './App.css';
import { setCORS } from 'google-translate-api-browser';
import SearchBar from './SearchBar';
import { useState } from 'react';
import Translation from './Translation';

const translate = setCORS('https://cors-proxy-santistebanc.herokuapp.com/');

function App() {
  const [englishTrans, setEnglishTrans] = useState();
  const [germanTrans, setGermanTrans] = useState();
  const [frenchTrans, setFrenchTrans] = useState();
  const [detectedLang, setDetectedLang] = useState();

  const handleSubmit = (query) => {
    translate(query, { to: 'en' })
      .then((res) => {
        setEnglishTrans(res.text);
        setDetectedLang(res.from.language.iso);
        console.log(res, res.text);
      })
      .catch((err) => {
        console.error(err);
      });
    translate(query, { to: 'de' })
      .then((res) => {
        setGermanTrans(res.text);
      })
      .catch((err) => {
        console.error(err);
      });
    translate(query, { to: 'fr' })
      .then((res) => {
        setFrenchTrans(res.text);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      <Translation iso="en" text={englishTrans} />
      <Translation iso="de" text={germanTrans} />
      <Translation iso="fr" text={frenchTrans} />
    </div>
  );
}

export default App;
