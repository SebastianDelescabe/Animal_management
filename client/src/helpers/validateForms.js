import { getAnimals } from "./getAnimals"

export const validateForm = async (inputForm, animalUpdate) => {

    const animalsInDb = await getAnimals()
    let duplicateErrors = {}

    const senasaIdInDb = animalsInDb.find(element => element.senasaId === inputForm.senasaId)
    const deviceNumberInDb = animalsInDb.find(element => element.deviceNumber === inputForm.deviceNumber)

    if (!animalUpdate) {
        //verify that it is not an animal to update
        if (senasaIdInDb) {
            duplicateErrors.senasaId = true
        }
        if (deviceNumberInDb) {
            duplicateErrors.deviceNumber = true
        }
        return duplicateErrors

    } else {
        //I verify that they are different ._id to be able to update even if they have the same senasa id and device number
        if (senasaIdInDb && animalUpdate._id !== senasaIdInDb._id) {
            duplicateErrors.senasaId = true
        }
        if (deviceNumberInDb && animalUpdate._id !== deviceNumberInDb._id) {
            duplicateErrors.deviceNumber = true
        }

        return duplicateErrors
    }

}