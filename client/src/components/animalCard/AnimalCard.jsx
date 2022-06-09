import React from 'react';
import { deleteIcon, editIcon } from '../../assets';
import { deleteAnimals } from '../../helpers';

const AnimalCard = ({ animal, setAnimals }) => {

    const { senasaId, animalType, weight, paddockName, deviceType, deviceNumber, _id } = animal

    const handleOnDelete = (id) => {
        deleteAnimals(id, setAnimals)
    }

    return (
        <tr>
            <td>{senasaId}</td>
            <td>{animalType}</td>
            <td>{weight} Kg</td>
            <td>{paddockName}</td>
            <td>{deviceType}</td>
            <td>{deviceNumber}</td>
            <td>
                <img
                    src={editIcon} alt="edit-icon"
                />
                <img
                    onClick={() => handleOnDelete(_id)}
                    src={deleteIcon} alt="delete-icon"
                />
            </td>
        </tr>
    )
}

export default AnimalCard