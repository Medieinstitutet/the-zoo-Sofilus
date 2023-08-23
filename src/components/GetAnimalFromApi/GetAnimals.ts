import { IAnimal } from "../../models/IAnimal"
import {get} from '../../services/AnimalService'

export const GetAnimals = async (): Promise<IAnimal> => {
    const response = await get<IAnimal>('https://animals.azurewebsites.net/api/animals')
    localStorage.setItem('AnimalList', JSON.stringify(response))

    return response
}