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

    const animal: JSX.Element[] = animalList.map((animal)=> {return <div className="animal-card-container"> 
                <img src={animal.imageUrl} className="animal-card-img"/>
                <p className="animal-card-name">{animal.name}</p>
                <p className="animal-card-description">{animal.shortDescription}</p>
            </div>}) 

    return (
        <>
            <div className="animal-cards-container">{animal}</div>
        </>
    )
}