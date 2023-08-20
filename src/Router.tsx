import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { PickedAnimalPage } from "./components/PickedAnimalPage";

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