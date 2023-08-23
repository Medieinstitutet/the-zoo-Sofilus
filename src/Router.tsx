import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Homepage/Home";
import { PickedAnimalPage } from "./components/PickedAnimal/PickedAnimalPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home></Home>
    },
    {
        path:"/:id",
        element: <PickedAnimalPage></PickedAnimalPage>
    }

])