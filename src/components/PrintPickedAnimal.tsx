import { GetPickedAnimal } from "./GetPickedAnimal";
import { useState, useEffect } from "react";
import { IAnimal } from "../models/IAnimal";
import { GetAnimalsFromLocalstorage } from "../services/GetAnimalFromLocalstorageService";

export const PrintPickedAnimal = () => {
  
  const [animalList, setAnimalList] = useState<IAnimal[]>([]);
  const [newFeedTime, setNewFeedTime] = useState<Date>(new Date());
  const [isFed, setIsFed] = useState<boolean>(false);
   const foundAnimal = GetPickedAnimal()
  //const timerFourHours = 4 * 60 * 60 * 1000;
  const timerFourHours = 10 * 1000;

  const fetchedData = async () =>{

    const animalListLocal = await GetAnimalsFromLocalstorage() 
    if(animalListLocal){
      setAnimalList(animalListLocal)
    }  
    }

  useEffect(() => {
    
    fetchedData();
    if (foundAnimal?.lastFed) {
      setNewFeedTime(new Date(foundAnimal.lastFed));

      const currentTime = new Date();
      const lastFedTime = new Date(foundAnimal.lastFed);
      const timeSinceLastFed = currentTime.getTime() - lastFedTime.getTime();

      if (timeSinceLastFed < timerFourHours) {
        setIsFed(true);

        setTimeout(() => {
          setIsFed(false);
        }, timerFourHours - timeSinceLastFed);
      }
    }
  }, [foundAnimal?.lastFed, timerFourHours])

  useEffect(() => {
    const lastFedTime = new Date(foundAnimal?.lastFed || 0).getTime();
    localStorage.setItem('LastFedTime', lastFedTime.toString());
  });
   

  const handleFeedAnimal = (e: React.MouseEvent) => {
   const id = e.currentTarget.id

    if (!isFed) { 
      const currentTime = new Date();
    setNewFeedTime(currentTime);

      const updatedAnimalListFeed = animalList.map((animal) => {
        if (animal.id.toString() === id) {
          animal.lastFed = currentTime;
          animal.isFed = true;
        }
        return animal;
      });
  
      setAnimalList(updatedAnimalListFeed);
      localStorage.setItem('AnimalList', JSON.stringify(updatedAnimalListFeed));
     setIsFed(true);

    setTimeout(() => {
      setIsFed(false);
    }, timerFourHours)

    localStorage.setItem('LastFedTime', currentTime.getTime().toString());
  }
  }

  let htmlElements: JSX.Element | null = null;
  if (foundAnimal) {
    htmlElements = (
      <div key={foundAnimal.id} className="picked-animal-container">
          <h1 className="picked-animal-name">{foundAnimal.name}</h1>
          <img src={foundAnimal.imageUrl} alt={foundAnimal.name} className="picked-animal-img"/>
          <p className="picked-animal-year-of-birth">Födelseår: {foundAnimal.yearOfBirth}</p>
          <p className="picked-animal-description">{foundAnimal.longDescription}</p>
          <p className="picked-animal-last-fed"> Matades senast: {newFeedTime.toString() }</p>
          <button disabled={isFed} className="picked-animal-feed-btn" onClick={handleFeedAnimal} id={foundAnimal.id.toString()}>Mata {foundAnimal.name}</button>
      </div>
    );
  } else {
    htmlElements = <p>Djuret kunde inte hittas</p>;
  }
  
  return (
          <div className="picked-animal-page">{htmlElements}</div>
  )
}