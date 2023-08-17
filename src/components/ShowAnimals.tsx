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

// Nästa steg är att skapa html för djur korten och sedan måste jag loopa igenom så jag kan skapa flera kort. Frågan är 
// Om jag ska ja js i min html. Kolla i när man ska printa en lista. Måste kanske mapa en lista eller så kan jag kanske göra en for loop med 15 loopar.