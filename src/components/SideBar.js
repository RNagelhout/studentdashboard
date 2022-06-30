import StudentNameList from "./StudentNameList"
import { Link } from "react-router-dom"
import "../styles/HeaderSidebarContentContainer.css"

function SideBar() {
    return(
        <div className='sideBar'>
            <div className="uploadCSVButtonContainer">
                <Link  to="/UploadPage">
                    <button className="uploadCSVButton" >Upload CSV-File</button>
                </Link>
            </div>
            <StudentNameList/>
        </div>


    )
}

export default SideBar