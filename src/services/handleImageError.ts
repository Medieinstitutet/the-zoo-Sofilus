
export const HandleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    
    const imageElement = e.currentTarget;
    imageElement.src = '/src/assets/david-pupaza-heNwUmEtZzo-unsplash.jpg';
    imageElement.alt = 'Bild kunde inte laddas';
}