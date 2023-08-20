import { RouterProvider } from 'react-router-dom'
import './css/Header.css'
import './css/Main.css'
import './css/Nav.css'
import './css/AnimalCardsHome.css'
import './css/PickedAnimal.css'
import { router } from './Router'

function App() {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
