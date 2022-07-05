import {useSpring, animated} from "react-spring"

function Header() {
    const fade = useSpring({from: { opacity: 0,}, opacity: 1 })
    return(
        <animated.header className="App-header" style={fade}>
            <div className="headerName" >
                <h1>Student Dashboard</h1>
            </div>
        </animated.header>
    )
}

export default Header