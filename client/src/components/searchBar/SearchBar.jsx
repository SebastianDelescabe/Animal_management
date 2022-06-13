import React, { useState, useEffect } from 'react';
import { getAnimals } from '../../helpers';
import Swal from 'sweetalert2';
import './SearchBar.css';

const SearchBar = ({ setAnimals }) => {

    const [inputSearch, setInputSearch] = useState('')

    
    const handleInputChange = (e) => {
        setInputSearch(e.target.value)
    }
    
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if (inputSearch.length === 0) {
            Swal.fire({
                title: 'Ingrese mas de un caracter!',
                text: "Error al buscar",
                icon: 'error',
                confirmButtonColor: 'red',
            })
        } else {
            //I bring animals from the database to always be filtering with what is there
            const animalsInBd = await getAnimals()
            const filterData = animalsInBd.filter(element => element.paddockName.toLowerCase().includes(inputSearch.toLowerCase()) || element.deviceNumber.includes(inputSearch))
            if (filterData.length === 0) {
                Swal.fire({
                    title: 'No se encontro resultado!',
                    text: "Error al buscar",
                    icon: 'warning',
                    confirmButtonColor: 'orange',
                })
            } else {
                setAnimals(filterData)
            }
        }
    }

    useEffect(() => {
        //delete filters, reload info when input if empty
        if (inputSearch.length === 0) {
            getAnimals()
                .then((response) => {
                    setAnimals(response)
                })
        }
    }, [inputSearch,setAnimals])


    return (
        <div className='searchBar'>
            <h3 className='searchBar__title'>Nombre de potrero / Número de dispositivo </h3>
            <form onSubmit={handleOnSubmit} className='searchBar__body'>
                <input
                    type="text"
                    placeholder='Nombre de potrero / Número de dispositivo '
                    onChange={handleInputChange}
                />
                <button
                    className='app__buttons'
                >
                    Buscar
                </button>
            </form>
        </div>
    )
}

export default SearchBar