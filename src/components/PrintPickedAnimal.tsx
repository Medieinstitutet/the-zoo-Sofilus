import { GetPickedAnimal } from "./GetPickedAnimal";
import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { useEffect } from "react";
import { GetAnimals } from "./GetAnimals";

export const PrintPickedAnimal = () => {
  
  const [animalList, setAnimalList] = useState<IAnimal[]>([]);
    useEffect(() => {
      
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

    const [newFeedTime, setNewFeedTime] = useState<string>('');

    const handleFeedAnimal = (e: React.MouseEvent) => {
        const today = new Date();
        const hour = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        const currentDate = `${hour}:${minutes}:${seconds}`;
        setNewFeedTime(currentDate);

        const updatedAnimalList = animalList.map((animal) => {
            if (animal.id.toString() === e.currentTarget.id) {
                return { ...animal, lastFed: currentDate };
            }
            return animal;
        });

        setAnimalList(updatedAnimalList);
        localStorage.setItem('AnimalList', JSON.stringify(updatedAnimalList));
    }
  
    // jag kanske kan ha kvar min hämta från localstorage i min egna fil men behöver uppdatera statet i denna lixom. 

    let foundAnimal = GetPickedAnimal();

    let htmlElements: JSX.Element | null = null;
    if (foundAnimal) {
      htmlElements = (
        <div key={foundAnimal.id} className="picked-animal-container">
            <h1 className="picked-animal-name">{foundAnimal.name}</h1>
            <img src={foundAnimal.imageUrl} alt={foundAnimal.name} className="picked-animal-img"/>
            <p className="picked-animal-year-of-birth">Födelseår: {foundAnimal.yearOfBirth}</p>
            <p className="picked-animal-description">{foundAnimal.longDescription}</p>
            <p className="picked-animal-last-fed"> Matades senast: {newFeedTime || foundAnimal.lastFed}</p>
            <button className="picked-animal-feed-btn" onClick={handleFeedAnimal} id={foundAnimal.id.toString()}>Mata {foundAnimal.name}</button>
        </div>
      );
    } else {
      htmlElements = <p>Djuret kunde inte hittas</p>;
    }
    
    return (
        <>
           <div className="picked-animal-page">{htmlElements}</div>
        </>
    
    )
  }