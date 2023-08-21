import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { GetAnimalsFromLocalstorage } from "../services/GetAnimalFromLocalstorage";


export const GetPickedAnimal = () => {

    const [animalList, setAnimalList] = useState<IAnimal[]>([]);
  
    const fetchedData = async () =>{
    const animalListLocal = await GetAnimalsFromLocalstorage() 
      if(animalListLocal){
        setAnimalList(animalListLocal)
      }  
    }
    
    useEffect(() => {
      fetchedData();
    },[]) 

    const { id } = useParams<{ id: string }>();
    const foundAnimal = animalList.find((animal) => animal.id.toString() === id);
    console.log(foundAnimal)

    return foundAnimal
}