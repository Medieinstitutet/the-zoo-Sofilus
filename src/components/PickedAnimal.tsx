import { useState, useEffect } from "react";
import { IAnimal } from "../models/IAnimal";
import { GetAnimals } from "./GetAnimals";

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


        let url = new URL(window.location.href)
        let urlSegments = url.pathname.split("/");
        let id = urlSegments.pop();
        
    


    return (
        <>test
        </>
    
    )
}