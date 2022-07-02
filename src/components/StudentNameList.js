import {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { currentStudent } from "../features/currentStudent"
import { checkboxNameList } from "../features/checkboxNameList"
import { Link } from "react-router-dom"


function StudentNameList() {

  const dispatch = useDispatch()
  const MergedList = useSelector((state) => state.MergedList.value)
  
  let nameList = []
  
 
  //Making a list from students whos checkbox is checked
  const CheckedNames = (e) => {
      const checked = e.target.checked
      const id = e.target.id
      let tempArray = [...nameList]
      if (checked === true) {
        MergedList.map(student=> {
        if (student.name === id) {
          tempArray.push({student: student})  
        }})
      nameList = tempArray
      dispatch(checkboxNameList(nameList))
      } 
    else {
      const decrCheckedList = tempArray
      .filter((student) => {return student.student.name !== id })
      .map(student => student)
      nameList = decrCheckedList
      dispatch(checkboxNameList(nameList))
    }
  }

  // StudentPage Chartdata 
  const StudentPageChartData = (e) => {
    const id = e.target.id 
    let tempList = []
    MergedList.map(student => {
      if (student.name === id) {
        tempList.push({student: student})
      } 
    })
    nameList = tempList
    dispatch(checkboxNameList(nameList))
  }

   // creates for every name an listItem with a checkbox and a <Link> to each personal page with the name of the student.
  const SideBarNames = MergedList      
      .map((student) => { 
      return  <li key={student.id} className="listItem">
                <input className="checkbox" 
                    type="checkbox" 
                    id={student.name}
                    onClick={CheckedNames} 
                /> 
                <Link to={`/student/${student.name}`} 
                  className="studentProp"
                  id={student.name} 
                  onClick={StudentPageChartData}
                  >
                    {student.name}
                </Link> 
              </li>
      })
  return (
    <div className='listContainer'> 
        <div className='titles'><p className='titleItem'>Students</p></div>
        <div className='studentListView'>
          <ul className="studentNameList">
              {SideBarNames}
          </ul>
       </div>
    </div>  
    )
  }

  export default StudentNameList