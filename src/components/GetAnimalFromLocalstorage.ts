
import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal";
import { GetAnimals } from "./GetAnimals";


export const GetAnimalsFromLocalstorage = async () => {

    let animalList: IAnimal[] =[]

    await GetAnimals();
    const storedAnimalList = localStorage.getItem('AnimalList')!

        if(storedAnimalList){
            animalList = JSON.parse(storedAnimalList)
            
        }else{
            console.log('inga djur')
        GetAnimals(); 
        }

return animalList
}

