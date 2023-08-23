import { GetAnimalsFromLocalstorage } from "../../services/GetAnimalFromLocalstorageService"
import { useState, useEffect } from "react";
import { IAnimal } from "../../models/IAnimal";
import { HandleImageError } from "../../services/handleImageError";

export const PrintAnimals = () => {

    const [animalList, setAnimalList] = useState<IAnimal[]>([]);
    //const timerFourHours = 4 * 60 * 60 * 1000;
    const timerFourHours = 20 * 1000;

    const fetchedData = async () =>{
        const animalListLocal = await GetAnimalsFromLocalstorage() 
        if(animalListLocal){
            setAnimalList(animalListLocal)
        }  
    }

    useEffect(() => {
        fetchedData();

        animalList.map((animal) => {
            if (((new Date()).getTime() - (new Date(animal.lastFed)).getTime()) < timerFourHours) {
               animal.isFed = false;
            } else {
                animal.isFed = true;
            }
        
            return animal;
        }); 
    }) 


    const goToAnimal = (e: React.MouseEvent) => {
        const id = (e.currentTarget as HTMLButtonElement).id
        window.location.href = `http://localhost:5173/${id}`
    }

    const animalElements: JSX.Element[] = animalList.map((animal) => (
        <div  key={animal.id} className={`animal-card-container ${((new Date()).getTime() - (new Date(animal.lastFed)).getTime()) < timerFourHours  ? '' : 'hungry'}`}>
            <img src={animal.imageUrl} className="animal-card-img" alt={animal.name} onError={HandleImageError} />
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