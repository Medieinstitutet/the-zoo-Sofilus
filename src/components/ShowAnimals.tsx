import { GetAnimalsFromLocalstorage } from "./GetAnimalFromLocalstorage"


export const ShowAnimals = () => {

    const animalList = GetAnimalsFromLocalstorage()

    const goToAnimal = (e: React.MouseEvent) => {
        let id = (e.currentTarget as HTMLButtonElement).id
        window.location.href = `http://localhost:5173/${id}`
    }

    const animalElements: JSX.Element[] = animalList.map((animal) => (
        <div  key={animal.id} className="animal-card-container">
          <img src={animal.imageUrl} className="animal-card-img" alt={animal.name} />
          <p className="animal-card-name">{animal.name}</p>
          <p className="animal-card-description">{animal.shortDescription}</p>
          <button id={animal.id.toString()} onClick={goToAnimal} >Besök djuret</button>
        </div>
      ));

    return (
        <>
            <div className="animal-cards-container">{animalElements}</div>
        </>
    )
}