import { useEffect } from "react"
import { IAnimal } from "../models/IAnimal"
import { GetAnimals } from "./GetAnimals"

export const ShowAnimals = () => {

    useEffect(() => {
        // Checkes if data allready existing in localstorage
        const animalList = localStorage.getItem('AnimalList')

        if(animalList){
            const parsedAnimalList: IAnimal = JSON.parse(animalList)
            console.log(parsedAnimalList)
        }else{
            console.log('inga sjur')
           GetAnimals(); 
        }
        
    })

    return (
        <>
            <p>hej</p>
        </>
    )
}