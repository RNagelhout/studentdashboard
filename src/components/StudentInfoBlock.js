import { current } from "@reduxjs/toolkit"
import {useSelector} from "react-redux"

function StudentInfoBlock() {

    const checkboxNameList = useSelector((state) => state.checkboxNameList.value)

    return(
        <div className='studentInfoBlock'>
            <div className="studentAvatar">
                <img src={checkboxNameList[0].student.avatar}/>
            </div>
            <div className="studentInfo">
                <p>Name: {checkboxNameList[0].student.name} {" "} {checkboxNameList[0].student.last_name}</p>
                <p>Gender: {checkboxNameList[0].student.gender}</p> 
                <p>Adress: {checkboxNameList[0].student.adress}</p>
                <p>E-mail: {checkboxNameList[0].student.email}</p> 
            </div>
        </div>
    )
}

export default StudentInfoBlock