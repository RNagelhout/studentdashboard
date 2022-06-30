import { VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme,VictoryStack, VictoryGroup, VictoryLabel   } from "victory"
import {useSelector} from "react-redux"
import {v4 as uuidv4} from "uuid"

function BarChart() {

    const checkboxNameList = useSelector((state) => state.checkboxNameList.value)
    const RawChartList = checkboxNameList
            .map(student => student.student.projects
            .map((project) => ({project: project.project, difficulty: project.difficulty, fun: project.fun})))          

//DIFFICULTY AVGCALCULATION
        const DifficultyList = []

        if  (RawChartList.length === 0){
        DifficultyList.push([]) 
        } else if (RawChartList.length === 1){
        const tempList = RawChartList[0]
      
        DifficultyList.slice()
        DifficultyList.push(tempList)
        } else {
        const tempList3= []
        
        const tempList2 = RawChartList.map((b) => b.map((prev, curr) => (prev.difficulty + curr),0))
        tempList3.push(tempList2)
        
        const result = tempList3[0].reduce((a,b) => a.map((c,i) => c + b[i])) // sum difficulty arrays to 1 array
        const difficultyAVG = result.map(number => Number((number / tempList2.length).toFixed(2)) ) //get AVG of numbers
        DifficultyList.push(difficultyAVG)

        }  
 //FUN AVGCALCULATION  
        const FunList = []

        if  (RawChartList.length === 0){
        FunList.push([]) 
        } else if (RawChartList.length === 1){
        const tempFunList = RawChartList[0].map((c) => (c.fun)) 

        FunList.slice() 
        FunList.push(tempFunList) 
        } else {
        const tempFunList3= []
        const tempFunList2 = RawChartList.map((b)  => b.map(project => (project.fun)))

        tempFunList3.push(tempFunList2)
        const resultFun = tempFunList3
            .map((a,i) => {return a
                .reduce((prev, curr) => curr = prev + curr[i])}) // sum difficulty arrays to 1 array
            // console.log("ik ben ResultFun ", resultFun)
            // console.log("ik ben Templist3 ", tempFunList3)
            console.log("ik ben tempFunList2", resultFun)
        const FunAVG = resultFun.map(number => Number((number / tempFunList2.length).toFixed(2)) )
        FunList.slice()
        FunList.push(FunAVG) 
        }  
   
//COMBINE FUNAVG AND DIFFICULTAVG INCL. PROJECTNAMES
        // const ProjectNames = RawChartList[0].map(project => projectNames)
        const NameList= []
        if  (RawChartList.length === 0){
            DifficultyList.push([]) 
            } else {
                const getNameList = RawChartList[0].map(project => project.project)
                NameList.push(getNameList)
            }
        
        const ChartList = []

        if (NameList.length === 0) {
            ChartList.push([])
        } else {
        const CreateChartList = NameList[0].map((project, i) => {
            return{
                id: uuidv4(),
                project: project,
                difficulty: DifficultyList[0][i],
                fun: FunList[0][i]
            }
         })
         ChartList.push(CreateChartList)
        }
    // console.log("ChartList ben ik: ", ChartList)        
    // console.log("FunList ben ik: ", FunList)  
    return( 
        <div> 
            <button >PRINT MIJ</button>
        <div className="barChart">
            <VictoryChart
            height={4000}
            width={18000}
            domainPadding={200}
            >
                <VictoryAxis 
                style={{ 
                    tickLabels: {
                        width: 200,
                        fontSize: 80,
                        fill: '#efefef',
                    }}}
                />
                <VictoryAxis 
                dependentAxis
                tickValues={[1,2,3,4,5]}
                tickFormat={[1,2,3,4,5]}
                style={{ 
                    tickLabels: {
                        fontSize: 80,
                        fill: '#efefef',
                    }}}
                />
                <VictoryGroup
                offset={100}
                colorScale={"qualitative"}
                style={{ data: { width: 50 } }}
                >                   
                    <VictoryBar
                    data={ChartList}
                    x="project" y="difficulty"
                    style={{
                        data: {
                            width: 60
                        }
                    }}/>
                    {/* <VictoryBar
                    data={FunList}
                    x="project" y="fun"
                    style={{
                        data: {
                            width: 60
                        }
                    }}
                    /> */}
                </VictoryGroup>
            </VictoryChart>
        </div>
        </div>
    )
}

export default BarChart