import axios from "axios";

export const updateAnimal = async (id, inputForm) => {
    await axios.put(`http://localhost:3001/animals/${id}`, inputForm)
}