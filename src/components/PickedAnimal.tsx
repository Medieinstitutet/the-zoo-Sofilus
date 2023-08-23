import { GetPickedAnimal } from "./GetPickedAnimal";
import { useState, useEffect } from "react";
import { IAnimal } from "../models/IAnimal";
import { GetAnimalsFromLocalstorage } from "../services/GetAnimalFromLocalstorageService";
import { HtmlPickedAnimal } from "./HtmlPickedAnimal";

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

    const lastFedTime = new Date(foundAnimal?.lastFed || 0).getTime();
    localStorage.setItem('LastFedTime', lastFedTime.toString());
  }, [foundAnimal?.lastFed, timerFourHours])

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
  
  return (
    <>
      <HtmlPickedAnimal 
        newFeedTime={newFeedTime}
        isFed={isFed}
        handleFeedAnimal={handleFeedAnimal}></HtmlPickedAnimal>
    </>      
  )
}