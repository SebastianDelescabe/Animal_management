import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='searchBar'>
            <h3 className='searchBar__title'>Nombre de potrero / Número de dispositivo </h3>
            <div className='searchBar__body'>
                <input
                    type="text"
                    placeholder='Nombre de potrero / Número de dispositivo '
                />
                <button
                    className='app__buttons'
                >
                    Buscar
                </button>
            </div>
        </div>
    )
}

export default SearchBar