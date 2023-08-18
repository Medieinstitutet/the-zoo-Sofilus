import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { PickedAnimal } from "./components/PickedAnimal";

export const router = createBrowserRouter([
    {
        path:"/:id",
        element: <Home></Home>
    },
    {
        path:"/1",
        element: <PickedAnimal></PickedAnimal>
    }

])