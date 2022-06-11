import React, { useState } from 'react';
import { deleteIcon, editIcon } from '../../assets';
import { deleteAnimals } from '../../helpers';
import { AnimalUpdateForm } from '../../components'

const AnimalCard = ({ animal, setAnimals }) => {

    const { senasaId, animalType, weight, paddockName, deviceType, deviceNumber, _id } = animal

    const [openUpdateForm, setOpenUpdateForm] = useState(false)

    const handleOnDelete = (id) => {
        deleteAnimals(id, setAnimals)
    }
    const handleOnUpdate = (id) => {
        setOpenUpdateForm(true)
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
                    onClick={() => handleOnUpdate(_id)}

                />
                <img
                    onClick={() => handleOnDelete(_id)}
                    src={deleteIcon} alt="delete-icon"
                />
                {
                    openUpdateForm && (
                        <AnimalUpdateForm
                            setOpenUpdateForm={setOpenUpdateForm}
                            openUpdateForm={openUpdateForm}
                            animalUpdate = {animal}
                        />
                    )
                }
            </td>
        </tr>
    )
}

export default AnimalCard