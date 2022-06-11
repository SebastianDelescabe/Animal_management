import React, { useState } from 'react';
import { useContext } from 'react';
import { AnimalContext } from '../../context/AnimalContext';
import { getAnimals, updateAnimal } from '../../helpers';

const AnimalUpdateForm = ({ openUpdateForm, setOpenUpdateForm, animalUpdate }) => {

    const { setAnimals } = useContext(AnimalContext)

    const [inputForm, setInputForm] = useState({
        senasaId: animalUpdate.senasaId,
        animalType: animalUpdate.animalType,
        weight: animalUpdate.weight,
        paddockName: animalUpdate.paddockName,
        deviceType: animalUpdate.deviceType,
        deviceNumber: animalUpdate.deviceNumber,
    })

    const handleSelectChange = (e) => {
        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value
        })
    }

    const handleInputChange = (e) => {
        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        //add animal waiting response then get and set animals to reload results
        await updateAnimal(animalUpdate._id, inputForm)
        getAnimals()
            .then((response) => {
                setAnimals(response)
                setOpenUpdateForm(false)
            })
    }

    if (openUpdateForm) {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <div className='AnimalForm__title'>
                        <h1>Editar Animal</h1>
                        <button
                            className="close-btn"
                            onClick={() => setOpenUpdateForm(false)}
                        >
                            close
                        </button>
                    </div>
                    <hr />
                    <div className="AnimalForm__body">
                        <form>
                            <p>Senasa ID:</p>
                            <input
                                type='text'
                                name="senasaId"
                                value={inputForm.senasaId}
                                onChange={handleInputChange}
                            />
                            <p>Tipo de Animal</p>
                            <select
                                name='animalType'
                                onChange={handleSelectChange}
                            >
                                <option value='Novillo'>Novillo</option>
                                <option value='Toro'>Toro</option>
                                <option value='Vaquillona'>Vaquillona</option>
                            </select>
                            <p>Peso (KG)</p>
                            <input
                                type="text"
                                name="weight"
                                value={inputForm.weight}
                                onChange={handleInputChange}
                            />
                            <p>Nombre del potrero</p>
                            <input
                                type="text"
                                name="paddockName"
                                value={inputForm.paddockName}
                                onChange={handleInputChange}
                            />
                            <p>Tipo de dispositivo</p>
                            <select
                                name='deviceType'
                                onChange={handleSelectChange}
                            >
                                <option value='Collar'>Collar</option>
                                <option value='Caravana'>Caravana</option>
                            </select>
                            <p>Número de dispositivo</p>
                            <input
                                type="text"
                                name="deviceNumber"
                                value={inputForm.deviceNumber}
                                onChange={handleInputChange}
                            />
                            <br />
                            <button onClick={handleOnSubmit}>Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnimalUpdateForm