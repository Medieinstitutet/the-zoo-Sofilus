import { Nav } from "./Nav"
import { ShowAnimals } from "./ShowAnimals"

export const Header = () => {
    return (
        <>
            <div className="header-container">
                <h1 className="headline">Vårt lyckliga zoo</h1>
                <Nav></Nav>
                <ShowAnimals></ShowAnimals>
            </div>
        </>
    )
}