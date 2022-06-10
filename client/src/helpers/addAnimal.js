import axios from 'axios'

export const addAnimal = async (animal) => {
    await axios.post('http://localhost:3001/animals',animal)
}