import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import { GetAnimals } from "./GetAnimals"

export const ShowAnimals = () => {

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

    const goToAnimal = (e: React.MouseEvent) => {
        let id = (e.currentTarget as HTMLButtonElement).id
        window.location.href = `http://localhost:5173/${id}`
    }

    const animalElements: JSX.Element[] = animalList.map((animal) => (
        <div  key={animal.id} className="animal-card-container">
          <img src={animal.imageUrl} className="animal-card-img" alt={animal.name} />
          <p className="animal-card-name">{animal.name}</p>
          <p className="animal-card-description">{animal.shortDescription}</p>
          <button id={animal.id.toString()} onClick={goToAnimal} >Besök djuret</button>
        </div>
      ));

    return (
        <>
            <div className="animal-cards-container">{animalElements}</div>
        </>
    )
}