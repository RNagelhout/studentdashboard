import logo from "../SVG/logo.png"

function Header() {
    return(
        <header className="App-header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="headerName">
                <h1>Student Dashboard</h1>
            </div>
        </header>
    )
}

export default Header