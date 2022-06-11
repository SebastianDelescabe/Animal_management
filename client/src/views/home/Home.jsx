import React, { useState, useContext } from 'react';
import { SearchBar, AnimalTable, AnimalAddForm } from '../../components';
import { AnimalContext } from '../../context/AnimalContext';
import './Home.css';

const Home = () => {

    const { animals, setAnimals } = useContext(AnimalContext)

    const [openAddForm, setOpenAddForm] = useState(false)

    return (
        <div className='home'>
            <div className='home__head'>
                <h3>Admin / Establecimiento</h3>
                <h1>Establecimiento Ganadero</h1>
                <button
                    className='app__buttons'
                    onClick={() => setOpenAddForm(true)}
                >
                    Agregar nuevo animal
                </button>
                {openAddForm && (
                    <AnimalAddForm
                        setAnimals={setAnimals}
                        openAddForm={openAddForm}
                        setOpenAddForm={setOpenAddForm}
                    />
                )}
            </div>
            <div className='home__body'>
                <SearchBar />
                <h2>Lista de ganado</h2>
                <AnimalTable
                    animals={animals}
                    setAnimals={setAnimals}
                />
            </div>
        </div>
    )
}

export default Home