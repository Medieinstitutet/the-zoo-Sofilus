import { useParams } from "react-router-dom";
import { GetAnimalsFromLocalstorage } from "./GetAnimalFromLocalstorage";


export const GetPickedAnimal = () => {

    const animalList = GetAnimalsFromLocalstorage();

    const { id } = useParams<{ id: string }>();
    const foundAnimal = animalList.find((animal) => animal.id.toString() === id);
    console.log(foundAnimal)

    return foundAnimal
}