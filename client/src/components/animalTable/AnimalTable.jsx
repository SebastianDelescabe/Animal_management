import React, { useState } from 'react';
import AnimalCard from '../animalCard/AnimalCard';
import Pagination from '../pagination/Pagination';
import './AnimalTable.css'


const AnimalTable = ({ animals, setAnimals }) => {

    const tableTh = ['SENASA ID', 'Tipo de animal', 'Peso del Animal', 'Nombre de potrero', 'Tipo de dispositivo', 'Número de dispositivo', 'Acciones']

    //-------Paginado---------
    const [page, setPage] = useState(1);
    const [animalsPerPage, setAnimalsPerPage] = useState(3); // eslint-disable-line
    const max = Math.ceil(animals.length / animalsPerPage);

    return (
        <div className='AnimalTable'>
            <table>
                <thead>
                    <tr>
                        {tableTh.map(title => (
                            <th key={title}>{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {animals.slice((page - 1) * animalsPerPage, (page - 1) * animalsPerPage + animalsPerPage).map(animal => (
                        <AnimalCard
                            key={animal._id}
                            animal={animal}
                            setAnimals={setAnimals}
                        />
                    ))}
                </tbody>
            </table >
            <div className='AnimalTable'>
                <Pagination
                    page={page}
                    setPage={setPage}
                    max={max}
                />
            </div>
        </div>
    )
}

export default AnimalTable