import {useSelector, useDispatch} from "react-redux"
import { checkboxNameList } from "../features/checkboxNameList"
import { Link } from "react-router-dom"
import {useSpring, animated} from "react-spring"


function StudentNameList() {

  const fadeSlice = useSpring({
    from: { opacity: 0, marginBottom: 800}, 
    to: { opacity: 1, marginBottom: 0 },
    config: {
      delay: 50, 
      duration: 900, 
      tension: 170,
      mass: 15,
      friction: 96,velocity: 10,
      precision: 0.01
    }
  })

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
      return  <animated.li key={student.id} className="listItem" style={fadeSlice}>
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
              </animated.li>
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