import {useSelector, useDispatch} from "react-redux"
import {MergedList} from "../features/studentMergedList"

import { Link } from "react-router-dom"
import {v4 as uuidv4} from "uuid"

function MergeParseList() {

const dispatch = useDispatch()
const parsedList = useSelector((state) => state.lists.value)
const checkboxNameList = useSelector((state) => state.checkboxNameList.value)

const StudentNameList = parsedList
    .slice(0, -1)  
    .filter(n => n) // filtering out the empty values
    .reduce( (students , student) => { 
            const {name} = student
            const studentIndex = students.findIndex( student => student.name === name)
            if (studentIndex === -1 )  { 
                students.push({  
                  id: uuidv4(),
                  name: student.name, 
                  last_name: student.last_name, 
                  adress: student.adress,
                  email: student.email, 
                  gender: student.gender, 
                  avatar: student.avatar,          
                })
              
             }
            return students
            }, []) 

const projectList = [] 
  const names = parsedList.map((student) => student.name);
  const uniqueNames = [...new Set(names)];
  
  uniqueNames.forEach((student) => {
    let temp = [];
    temp.name = student;
    temp.projects = [];
    parsedList.forEach((student2) => {
      if (student === student2.name) {
        temp.projects.push({project:student2.project, difficulty: Number(student2.difficulty), fun: Number(student2.fun)}); 
      }
    });
    projectList.push(temp)

  });

  Array.isArray(projectList)
  
  
  const FinalDataList = StudentNameList.map((student, i) => {
    
    return {...student, ...projectList[i]} 
  })

  Array.isArray(FinalDataList)
  
  


  return (
    <div className="uploadPageButtonContainer">
        <Link to="/">
         <button className="uploadPageButton" onClick={() => dispatch(MergedList(FinalDataList))}>Go to Dashboard</button>
        </Link> 
    </div>
  )
}

export default MergeParseList
