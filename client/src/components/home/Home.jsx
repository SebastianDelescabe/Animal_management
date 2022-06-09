import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__head'>
                <h3>Admin / Establecimiento</h3>
                <h1>Establecimiento Ganadero</h1>
                <button>Crear nuevo animal</button>
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <h2>Lista de ganado</h2>
                <hr />
                <h1>tabla</h1>
                <hr />
            </div>
        </div>
    )
}

export default Home