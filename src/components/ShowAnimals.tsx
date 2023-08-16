import { useEffect } from "react"
import { GetAnimals } from "./GetAnimals"

export const ShowAnimals = () => {

    useEffect(() => {
        GetAnimals();
    })

    return (
        <>
            <p>hej</p>
        </>
    )
}