import { GetPickedAnimal } from "./GetPickedAnimal";
import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { useEffect } from "react";
import { GetAnimalsFromLocalstorage } from "../services/GetAnimalFromLocalstorage";

export const PrintPickedAnimal = () => {
  
  const [animalList, setAnimalList] = useState<IAnimal[]>([]);
  const [newFeedTime, setNewFeedTime] = useState<Date>(new Date());
  const [isFed, setIsFed] = useState<boolean>(false);
   const foundAnimal = GetPickedAnimal()
  //const timerFourHours = 4 * 60 * 60 * 1000;
  //const timerFourHours = 5 * 1000;

  const fetchedData = async () =>{
  const animalListLocal = await GetAnimalsFromLocalstorage() 
    if(animalListLocal){
      setAnimalList(animalListLocal)
    }  
    

    // const foundAnimal = GetPickedAnimal();
    // const currentDate = new Date();

    // if (foundAnimal?.lastFed) {
    //     const lastFedTime = new Date(foundAnimal.lastFed);
    //     setNewFeedTime(lastFedTime);
    //     const dateDiff = (currentDate.getTime() - lastFedTime.getTime()) / 1000
    //     if (dateDiff >= 5) {
    //       setIsFed(false)
    //     }

    //   }
    }

  useEffect(() => {
    
    fetchedData();
    if (foundAnimal?.lastFed) {
      setNewFeedTime(new Date(foundAnimal.lastFed));
    }
  }, [foundAnimal?.lastFed])
   

  

  const handleFeedAnimal = (e: React.MouseEvent) => {
    // if (isFed) {
    //   return;
    // }
    const id = e.currentTarget.id

    const currentTime = new Date();
      
    console.log(currentTime)
    setNewFeedTime(currentTime);
    console.log(newFeedTime.toString())


    if (!isFed) {
      setIsFed(true);
  
      const updatedAnimalListFeed = animalList.map((animal) => {
        if (animal.id.toString() === id) {
          animal.lastFed = currentTime;
          animal.isFed = true;
        }
        return animal;
      });
  
      setAnimalList(updatedAnimalListFeed);
      localStorage.setItem('AnimalList', JSON.stringify(updatedAnimalListFeed));
    }

    

    /*
    setTimeout(() => {
      setIsFed(false); // Ska byta tillbaka i localstorage
      const updatedAnimalListIsFedFalse = animalList.map((animal) => {
        if (animal.id.toString() === id) {
            animal.isFed = false
        }
       
        return animal;
    });
    
    console.log(updatedAnimalListIsFedFalse)
    setAnimalList(updatedAnimalListIsFedFalse);
      localStorage.setItem('AnimalList', JSON.stringify(updatedAnimalListIsFedFalse));
    }, timerFourHours);
    */

  }

 
  //formattedTime = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  foundAnimal?.lastFed

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


// Den ska inte uppdatera tiden varje gång sidan laddas om, varför gör den de?
//Kolla så de funkar med att desparas i localstorage även när man går fram och