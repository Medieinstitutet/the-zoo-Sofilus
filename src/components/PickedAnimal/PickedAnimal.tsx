import { GetPickedAnimal } from "./GetPickedAnimal";
import { useState, useEffect } from "react";
import { IAnimal } from "../../models/IAnimal";
import { GetAnimalsFromLocalstorage } from "../../services/GetAnimalFromLocalstorageService";
import { HtmlPickedAnimal } from "./HtmlPickedAnimal";

export const PickedAnimal = () => {
  
  const [animalList, setAnimalList] = useState<IAnimal[]>([]);
  const [newFeedTime, setNewFeedTime] = useState<Date>(new Date());
  const [activeBtn, setActiveBtn] = useState<boolean>(false);

   const foundAnimal = GetPickedAnimal()
   let id = "";
  //const timerThreeHours = 3 * 60 * 60 * 1000;
  const timerThreeHours = 10 * 1000;
  

  const fetchedData = async () =>{
    const animalListLocal = await GetAnimalsFromLocalstorage() 
    if(animalListLocal){
      setAnimalList(animalListLocal)
    }  
  }

  useEffect(() => {
    fetchedData();

    const currentTime = new Date(); 
   
    if (foundAnimal?.lastFed) {
      const lastFedTime = new Date(foundAnimal.lastFed);
      setNewFeedTime(lastFedTime);
      
      const timeSinceLastFed = currentTime.getTime() - lastFedTime.getTime();

      if (timeSinceLastFed < timerThreeHours) {
        setActiveBtn(true);

        setTimeout(() => {
          setActiveBtn(false);
        }, timerThreeHours - timeSinceLastFed);
      }

    }
  }, [foundAnimal?.lastFed, timerThreeHours])

  const handleFeedAnimal = (e: React.MouseEvent) => {
    id = e.currentTarget.id
    
    const currentTime = new Date();
    setNewFeedTime(currentTime);

    const updatedAnimalFed = animalList.map((animal) => {
      if (animal.id.toString() === id) {
        animal.lastFed = currentTime;
      }
      return animal;
    });

    setAnimalList(updatedAnimalFed);
    localStorage.setItem('AnimalList', JSON.stringify(updatedAnimalFed));
    setActiveBtn(true);

    setTimeout(() => {
      setActiveBtn(false);
    }, timerThreeHours)
}
  
  return (
    <>
      <HtmlPickedAnimal 
        newFeedTime={newFeedTime}
        activButton={activeBtn}
        handleFeedAnimal={handleFeedAnimal}
        ></HtmlPickedAnimal>
    </>      
  )
}