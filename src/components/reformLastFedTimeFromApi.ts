import { GetPickedAnimal } from "./GetPickedAnimal";

export const ReformLastFedTimeFromApi = () => {

    let foundAnimal = GetPickedAnimal();

  const lastFedTime = foundAnimal?.lastFed;
  let formattedTime = "";
  if (lastFedTime) {
    const dateObject = new Date(lastFedTime);
    formattedTime = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  return formattedTime
}