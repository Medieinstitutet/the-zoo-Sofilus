
export const HandleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    
    const imageElement = e.currentTarget;
    imageElement.src = '/src/assets/errorImg.jpg';
    imageElement.alt = 'Bild kunde inte laddas';
}