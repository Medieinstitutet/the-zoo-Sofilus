export const Nav = () => {

    const goToHomepage = () =>{
        window.location.href = `http://localhost:5173`
    }
    
    return (
        <>
            <div >
                <ul className="nav-container">
                    <button onClick={goToHomepage} className="nav-option-home">Hem</button>
                </ul>
            </div>
        </>
    )
}