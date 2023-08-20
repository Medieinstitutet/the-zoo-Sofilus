
import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal";
import { GetAnimals } from "./GetAnimals";


export const GetAnimalsFromLocalstorage = () => {

    const [animalList, setAnimalList] = useState<IAnimal[]>([]);

   useEffect(() => {
 
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
return animalList
}

