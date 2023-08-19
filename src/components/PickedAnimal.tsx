import { useState, useEffect } from "react";
import { IAnimal } from "../models/IAnimal";
import { GetAnimals } from "./GetAnimals";
import { useParams } from "react-router-dom";

export const PrintPickedAnimal = () => {
    const [animalList, setAnimalList] = useState<IAnimal[]>([]);

    useEffect(() => {
        // Checkes if data allready existing in localstorage
       const storedAnimalList = localStorage.getItem('AnimalList')!

        if(storedAnimalList){
            const parsedAnimalList: IAnimal[] = JSON.parse(storedAnimalList)
            setAnimalList(parsedAnimalList)
            console.log(parsedAnimalList)
        }else{
            console.log('inga djur')
           GetAnimals(); 
        }
    },[])


    const { id } = useParams<{ id: string }>();

    const foundAnimal = animalList.find((animal) => animal.id.toString() === id);
    console.log(foundAnimal)
        
        
    


    return (
        <>test
        </>
    
    )
}