import React, { useState, useEffect } from 'react'
import { Navbar, Home } from "./views";
import { AnimalContext } from "./context/AnimalContext";
import { getAnimals } from './helpers';
import './App.css';

function App() {

  const [animals, setAnimals] = useState([])

  useEffect(() => {
    getAnimals()
      .then((response) => {
        setAnimals(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [setAnimals])

  return (
    <div className="App">
      <AnimalContext.Provider value={{ animals, setAnimals }}>
        <Navbar />
        <Home />
      </AnimalContext.Provider>
    </div>
  );
}

export default App;
