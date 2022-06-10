import { getAnimals } from './index';
import axios from "axios"
import Swal from 'sweetalert2';

export const deleteAnimals = (id, setAnimals) => {
    Swal.fire({
        title: 'Estas seguro?',
        text: "El animal eliminado no se podrá recuperar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#93c942',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            setTimeout(async () => {
                await axios.delete(`http://localhost:3001/animals/${id}`)
                getAnimals()
                    .then((response) => {
                        Swal.fire({
                            title: 'Eliminado',
                            text: "Bien hecho",
                            icon: 'success',
                            confirmButtonColor: '#93c942',
                        })
                        setAnimals(response)
                    })
            }, 400);
        }
    })
}