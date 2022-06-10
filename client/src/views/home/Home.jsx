import React, { useEffect, useState } from 'react';
import { getAnimals } from '../../helpers';
import { SearchBar, AnimalTable, AnimalForm } from '../../components';
import './Home.css';


const Home = () => {

    const [animals, setAnimals] = useState([])
    const [openForm, setOpenForm] = useState(false)

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
        <div className='home'>
            <div className='home__head'>
                <h3>Admin / Establecimiento</h3>
                <h1>Establecimiento Ganadero</h1>
                <button
                    className='app__buttons'
                    onClick={() => setOpenForm(true)}
                >
                    Agregar nuevo animal
                </button>
                {openForm && (
                    <AnimalForm
                        setAnimals={setAnimals}
                        openForm={openForm}
                        setOpenForm={setOpenForm}
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