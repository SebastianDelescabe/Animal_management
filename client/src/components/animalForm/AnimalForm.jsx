import React, { useState } from 'react';
import { addAnimal, getAnimals } from '../../helpers';
import './AnimalForm.css';

const AnimalForm = ({ openForm, setOpenForm, setAnimals }) => {

    const [inputForm, setInputForm] = useState({
        senasaId: '',
        animalType: '',
        weight: '',
        paddockName: '',
        deviceType: '',
        deviceNumber: '',
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
        await addAnimal(inputForm)
        getAnimals()
            .then((response) => {
                setAnimals(response)
                console.log(response);
            })
    }

    if (openForm) {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <div className='AnimalForm__title'>
                        <h1>Nuevo Animal</h1>
                        <button
                            className="close-btn"
                            onClick={() => setOpenForm(false)}
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

export default AnimalForm