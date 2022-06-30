import {useSelector, useDispatch} from "react-redux"
import { currentStudent } from "../features/currentStudent"
import { checkboxNameList } from "../features/checkboxNameList"
import { Link } from "react-router-dom"


function StudentNameList() {

  const dispatch = useDispatch()
  const MergedList = useSelector((state) => state.MergedList.value)
  let nameList = []

  // "René", "Evelyn", "Floris", "Hector", "Martina", "Maurits", "Rahima", "Sandra", "Storm", "Wietske"

//making a list from students withs checkbox is checked
 const CheckedNames = (e) => {
    const checked = e.target.checked
    const id = e.target.id
    const checkedList = [...nameList]
    if (checked === true) {
      MergedList.map(student=> {
      if (student.name === id) {
        checkedList.push({student: student})
      }})
    nameList = checkedList
    dispatch(checkboxNameList(nameList))
    } 
   else {
    const decrCheckedList = checkedList
    .filter((student) => {return student.student.name !== id })
    .map(student => student=student)
    nameList = decrCheckedList
    dispatch(checkboxNameList(nameList))
  }
}
  const SideBarNames = MergedList      
      .map((student) => { 
        // creates for every name an listItem with an <Link> to each personal page with the name of the student.
      return  <li key={student.id} className="listItem">
                <input type="checkbox" id={student.name} onChange={CheckedNames}/> 
                <Link to={`/student/${student.name}`} className="studentProp" onClick={() => dispatch(currentStudent({student}))}>{student.name}</Link> 
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