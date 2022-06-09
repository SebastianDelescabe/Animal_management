import axios from 'axios';

export const getAnimals = async () => {
    const animals = await axios.get('http://localhost:3001/animals/');
    return animals.data.animals
}