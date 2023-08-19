import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { PrintPickedAnimal } from "./components/PickedAnimal";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home></Home>
    },
    {
        path:"/:id",
        element: <PrintPickedAnimal></PrintPickedAnimal>
    }

])