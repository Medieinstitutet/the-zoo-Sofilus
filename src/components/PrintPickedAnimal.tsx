import { GetPickedAnimal } from "./GetPickedAnimal";

export const PrintPickedAnimal = () => {

    let foundAnimal = GetPickedAnimal();

    let htmlElements: JSX.Element | null = null;
    if (foundAnimal) {
      htmlElements = (
        <div key={foundAnimal.id} className="picked-animal-container">
            <h1 className="picked-animal-name">{foundAnimal.name}</h1>
            <img src={foundAnimal.imageUrl} alt={foundAnimal.name} className="picked-animal-img"/>
            <p className="picked-animal-year-of-birth">Födelseår: {foundAnimal.yearOfBirth}</p>
            <p className="picked-animal-description">{foundAnimal.longDescription}</p>
            <p className="picked-animal-last-fed">Matades senast: {foundAnimal.lastFed}</p>
            <button className="picked-animal-feed-btn">Mata {foundAnimal.name}</button>
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