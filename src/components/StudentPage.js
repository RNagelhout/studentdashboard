import "../styles/HeaderSidebarContentContainer.css"
import "../styles/StudentPage.css"

import BarChart from "./BarChart"
import StudentInfoBlock from "./StudentInfoBlock"


function StudentPage() {

    return (
        <div className="contentContainer">
            <StudentInfoBlock />
            <div className='grafic'>
                {/* <BarChart/> */}
            </div>
        </div>
    )
}

export default StudentPage