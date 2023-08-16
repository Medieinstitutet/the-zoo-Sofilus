import { Nav } from "./Nav"
import { GetAnimals } from "./GetAnimals"

export const Header = () => {
    return (
        <>
            <div className="header-container">
                <h1 className="headline">Vårt lyckliga zoo</h1>
                <Nav></Nav>
                <GetAnimals></GetAnimals>
            </div>
        </>
    )
}