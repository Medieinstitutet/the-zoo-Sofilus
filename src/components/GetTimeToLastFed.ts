export const GetCurrentTime = () => {

    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const currentTime = `${hour}:${minutes}:${seconds}`;
    return currentTime
}