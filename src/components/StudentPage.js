import "../styles/HeaderSidebarContentContainer.css"
import "../styles/StudentPage.css"

import BarChart from "./BarChart"
import StudentInfoBlock from "./StudentInfoBlock"
import {useSpring, animated} from "react-spring"


function StudentPage() {
    const fade = useSpring({from: { opacity: 0,}, opacity: 1 })
    return (
        <animated.div className="contentContainer" style={fade} >
            <StudentInfoBlock />
            <div className='grafic'>
                <BarChart/>
            </div>
        </animated.div>
    )
}

export default StudentPage 