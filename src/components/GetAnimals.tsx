import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import axios from'axios'

export const GetAnimals = () => {

    useEffect(() => {
        const getAnimal = async () => {
            const response = await axios.get<IAnimal>(
                'https://animals.azurewebsites.net/api/animals'
            );

           
            console.log(response.data)
            console.log('hj')

        } 
        getAnimal();
    })

    return (
        <>
            <p>hej</p>
        </>
    )
}