import { Nav } from "./Nav"

export const Header = () => {
    return (
        <>
            <div className="header-container">
                <h1 className="headline">Vårt lyckliga zoo</h1>
                <Nav></Nav>
            </div>
        </>
    )
}