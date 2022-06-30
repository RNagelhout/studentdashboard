import { current } from "@reduxjs/toolkit"
import {useSelector} from "react-redux"

function StudentInfoBlock() {

    const currentStudent = useSelector((state) => state.currentStudent.value)

    return(
        <div className='studentInfoBlock'>
            <img src={currentStudent.student.avatar}/>
            <p>{currentStudent.student.name} {" "} {currentStudent.student.last_name}</p>
            <p>{currentStudent.student.gender}</p>
            <p>{currentStudent.student.adress}</p>
            <p>{currentStudent.student.email}</p>
        </div>
    )
}

export default StudentInfoBlock