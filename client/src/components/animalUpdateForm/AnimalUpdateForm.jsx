import React, { useState, useContext } from 'react';
import { AnimalContext } from '../../context/AnimalContext';
import { getAnimals, updateAnimal, validateForm } from '../../helpers';

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

    const [errorDuplicate, setErrorDuplicate] = useState({
        senasaId: false,
        deviceNumber: false
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

        const duplicateErrors = await validateForm(inputForm,animalUpdate)
        
        if (duplicateErrors.senasaId || duplicateErrors.deviceNumber) {
            setErrorDuplicate(duplicateErrors)
        } else {
            //update animal waiting response then get and set animals to reload results
            await updateAnimal(animalUpdate._id, inputForm)
            getAnimals()
                .then((response) => {
                    setAnimals(response)
                    setOpenUpdateForm(false)
                })

        }
    }

    if (openUpdateForm) {
        return (
            <div className='AnimalForm'>
                <div className='AnimalForm-dimensions'>
                    <div className='AnimalForm__title'>
                        <h1>Editar Animal</h1>
                        <button
                            className="close-btn"
                            onClick={() => setOpenUpdateForm(false)}
                        >
                            X
                        </button>
                    </div>
                    <hr />
                    <div className="AnimalForm__body">
                        <form onSubmit={handleOnSubmit}>
                            <span>Senasa ID:</span>
                            <input
                                required
                                type='text'
                                name="senasaId"
                                placeholder='Senasa ID'
                                value={inputForm.senasaId}
                                onChange={handleInputChange}
                                maxLength={16}
                            />
                            {
                                errorDuplicate.senasaId && <em> ID duplicado</em>
                            }
                            <span>Tipo de Animal</span>
                            <select
                                required
                                name='animalType'
                                onChange={handleSelectChange}
                                defaultValue={""}
                            >
                                <option value="" disabled hidden >Tipo de Animal</option>
                                <option value='Novillo'>Novillo</option>
                                <option value='Toro'>Toro</option>
                                <option value='Vaquillona'>Vaquillona</option>
                            </select>
                            <span>Peso (KG)</span>
                            <input
                                required
                                type="number"
                                name="weight"
                                placeholder='Peso'
                                value={inputForm.weight}
                                onChange={handleInputChange}
                                min={0}
                            />
                            <span>Nombre del potrero</span>
                            <input
                                required
                                type="text"
                                name="paddockName"
                                placeholder='Nombre del potrero'
                                value={inputForm.paddockName}
                                onChange={handleInputChange}
                                maxLength={200}
                            />
                            <span>Tipo de dispositivo</span>
                            <select
                                required
                                name='deviceType'
                                onChange={handleSelectChange}
                                defaultValue={""}

                            >
                                <option value="" disabled hidden >Tipo de dispositivo</option>
                                <option value='Collar'>Collar</option>
                                <option value='Caravana'>Caravana</option>
                            </select>
                            <span>Número de dispositivo</span>
                            <input
                                required
                                type="text"
                                name="deviceNumber"
                                placeholder='Número de dispositivo'
                                value={inputForm.deviceNumber}
                                onChange={handleInputChange}
                                maxLength={8}
                            />
                            {
                                errorDuplicate.deviceNumber && <em> Dispositivo en uso</em>
                            }
                            <br /><br />
                            <button
                                className='app__buttons '
                            >
                                Editar Animal
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnimalUpdateForm