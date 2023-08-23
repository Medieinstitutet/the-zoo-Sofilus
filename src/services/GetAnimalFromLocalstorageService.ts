
import { IAnimal } from "../models/IAnimal";
import { GetAnimals } from "../components/GetAnimalFromApi/GetAnimals";


export const GetAnimalsFromLocalstorage = async () => {

    let animalList: IAnimal[] =[]
    
    
    const storedAnimalList = localStorage.getItem('AnimalList')!

        if(storedAnimalList){
            
            animalList = JSON.parse(storedAnimalList)
            
        }else{
            console.log('inga djur')
            await GetAnimals(); 
            const storedAnimalList = localStorage.getItem('AnimalList')!
            animalList = JSON.parse(storedAnimalList)
        }

return animalList
}

