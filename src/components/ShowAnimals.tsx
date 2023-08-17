import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import { GetAnimals } from "./GetAnimals"

export const ShowAnimals = () => {

    const [animalList, setAnimalList] = useState<IAnimal[]>([]);

    useEffect(() => {
        // Checkes if data allready existing in localstorage
       const storedAnimalList = localStorage.getItem('AnimalList')!

        if(animalList){
            const parsedAnimalList: IAnimal[] = JSON.parse(storedAnimalList)
            setAnimalList(parsedAnimalList)
            console.log(parsedAnimalList)
        }else{
            console.log('inga djur')
           GetAnimals(); 
        }
    })

    const animal: JSX.Element[] = animalList.map((animal)=> {return <div> 
                <img src={animal.imageUrl} />
                <p>{animal.name}</p>
                <p>{animal.shortDescription}</p>
            </div>}) 

    return (
        <>
            <div>{animal}</div>
        </>
    )
}