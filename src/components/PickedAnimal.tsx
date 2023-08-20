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

    let htmlElements: JSX.Element | null = null;
    if (foundAnimal) {
      htmlElements = (
        <div key={foundAnimal.id}>
            <h1>{foundAnimal.name}</h1>
            <img src={foundAnimal.imageUrl} className="animal-card-img" alt={foundAnimal.name}/>
            <p>Födelseår: {foundAnimal.yearOfBirth}</p>
            <p className="animal-card-description">{foundAnimal.longDescription}</p>
            <p>Matades senast: {foundAnimal.lastFed}</p>
            <button>Mata {foundAnimal.name}</button>
        </div>
      );
    } else {
      htmlElements = <p>Djuret kunde inte hittas</p>;
    }

    // jag ska bara skriva ut rätt html

    return (
        <>
           <div>{htmlElements}</div>
        </>
    
    )
}