import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <>
            <h3 className='searchBar__title'>Nombre / Número de registro</h3>
            <div className='searchBar__body'>
                <input
                    type="text"
                    placeholder='Nombre / Número de registro'
                />
            </div>
        </>
    )
}

export default SearchBar