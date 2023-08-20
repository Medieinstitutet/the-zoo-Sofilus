import { GetPickedAnimal } from "./GetPickedAnimal";

export const PrintPickedAnimal = () => {

    let foundAnimal = GetPickedAnimal();

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