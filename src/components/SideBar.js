import StudentNameList from "./StudentNameList"
import { Link } from "react-router-dom"
import "../styles/HeaderSidebarContentContainer.css"
import {useSpring, animated} from "react-spring"

function SideBar() {
    const fade = useSpring({from: { opacity: 0,}, opacity: 1 })
    return(
        <animated.div className='sideBar' style={fade}>
            <div className="uploadCSVButtonContainer">
                <Link  to="/UploadPage">
                    <button className="uploadCSVButton" >Upload CSV-File</button>
                </Link>
            </div>
            <StudentNameList/>
        </animated.div>


    )
}

export default SideBar