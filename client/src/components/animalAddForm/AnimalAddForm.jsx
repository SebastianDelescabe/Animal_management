import React, { useState } from 'react';
import { addAnimal, getAnimals } from '../../helpers';

const AnimalAddForm = ({ openAddForm, setOpenAddForm, setAnimals }) => {

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
                setOpenAddForm(false)
            })
    }

    if (openAddForm) {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <div className='AnimalForm__title'>
                        <h1>Nuevo Animal</h1>
                        <button
                            className="close-btn"
                            onClick={() => setOpenAddForm(false)}
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
                                maxlength={16}
                                oninput="this.setCustomValidity('')"
                            />
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
                                maxlength={200}
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
                                maxlength={8}
                            />
                            <br /><br />
                            <button className='app__buttons '>Agregar Animal</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnimalAddForm