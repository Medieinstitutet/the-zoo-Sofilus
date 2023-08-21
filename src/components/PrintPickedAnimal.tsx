import { GetPickedAnimal } from "./GetPickedAnimal";
import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { useEffect } from "react";
import { GetAnimalsFromLocalstorage } from "../services/GetAnimalFromLocalstorage";
import { GetCurrentTime } from "./GetTimeToLastFed";
import { ReformLastFedTimeFromApi } from "./reformLastFedTimeFromApi";

export const PrintPickedAnimal = () => {
  
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

  const [newFeedTime, setNewFeedTime] = useState<string>('');
  const [newIsFed, setNewIsFed] = useState<boolean>(false)

  const handleFeedAnimal = (e: React.MouseEvent) => {
      let currentTime = GetCurrentTime()
      setNewFeedTime(currentTime);
      setNewIsFed(true)

      const updatedAnimalListFeed = animalList.map((animal) => {
          if (animal.id.toString() === e.currentTarget.id) {
              return { ...animal, lastFed: currentTime, isFed: newIsFed };
          }
          return animal;
      });

      setAnimalList(updatedAnimalListFeed);
      localStorage.setItem('AnimalList', JSON.stringify(updatedAnimalListFeed));

  }

  let foundAnimal = GetPickedAnimal()
  let formattedTime = ReformLastFedTimeFromApi();

  let htmlElements: JSX.Element | null = null;
  if (foundAnimal) {
    htmlElements = (
      <div key={foundAnimal.id} className="picked-animal-container">
          <h1 className="picked-animal-name">{foundAnimal.name}</h1>
          <img src={foundAnimal.imageUrl} alt={foundAnimal.name} className="picked-animal-img"/>
          <p className="picked-animal-year-of-birth">Födelseår: {foundAnimal.yearOfBirth}</p>
          <p className="picked-animal-description">{foundAnimal.longDescription}</p>
          <p className="picked-animal-last-fed"> Matades senast: {newFeedTime || formattedTime }</p>
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