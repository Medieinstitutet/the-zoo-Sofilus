import { GetPickedAnimal } from "./GetPickedAnimal";
import { IAnimailDetailsProps } from "../../models/IAnimalDetailsProps";

export const HtmlPickedAnimal = ({newFeedTime, activButton, handleFeedAnimal}: IAnimailDetailsProps) => {
  const foundAnimal = GetPickedAnimal()
  let htmlElements: JSX.Element | null = null;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
       
    const imageElement = e.currentTarget;
    imageElement.src = '/src/assets/david-pupaza-heNwUmEtZzo-unsplash.jpg';
    imageElement.alt = 'Bild kunde inte laddas';
};

  if (foundAnimal) {
    htmlElements = (
      <div key={foundAnimal.id} className="picked-animal-container">
          <h1 className="picked-animal-name">{foundAnimal.name}</h1>
          <img src={foundAnimal.imageUrl} alt={foundAnimal.name} className="picked-animal-img" onError={handleImageError}/>
          <p className="picked-animal-year-of-birth">Födelseår: {foundAnimal.yearOfBirth}</p>
          <p className="picked-animal-description">{foundAnimal.longDescription}</p>
          <p className="picked-animal-last-fed"> Matades senast: {newFeedTime.toString() }</p>
          <p>{foundAnimal.name} är {activButton ? 'mätt' : 'hungrig'}</p>
          <button disabled={activButton} className="picked-animal-feed-btn" onClick={handleFeedAnimal} id={foundAnimal.id.toString()}>Mata {foundAnimal.name}</button>
      </div>
    );
  } else {
    htmlElements = <p>Djuret kunde inte hittas</p>;
  }
  
  return (
    <div className="picked-animal-page">{htmlElements}</div>
  )
}