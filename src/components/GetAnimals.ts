import { IAnimal } from "../models/IAnimal"
import axios from'axios'

export const GetAnimals = async (): Promise<IAnimal> => {
    const response = await axios.get<IAnimal>('https://animals.azurewebsites.net/api/animals')
    console.log(response.data)
    return response.data

}