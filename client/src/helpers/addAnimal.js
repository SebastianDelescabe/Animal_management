import axios from 'axios'

export const addAnimal = async (animal) => {
    try {
        await axios.post('http://localhost:3001/animals', animal)
    } catch (error) {
        console.log(error);
    }
}