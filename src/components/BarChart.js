import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryZoomContainer, VictoryLegend } from "victory"
import {useSelector} from "react-redux"
import {v4 as uuidv4} from "uuid"

function BarChart() {
    const checkboxNameList = useSelector((state) => state.checkboxNameList.value)

    const DataList = checkboxNameList
    
    let RawChartList = []

    if (checkboxNameList.length === 0) {
        RawChartList = []
    } else {
        RawChartList =  DataList
            .map(student => student.student.projects
            .map((project) => ({project: project.project, difficulty: project.difficulty, fun: project.fun})))          
            }

    //DIFFICULTY AVGCALCULATION
    let AVGList = []

    if  (RawChartList.length === 0){
        AVGList = ([]) 
    } else if (RawChartList.length === 1){
        const tempAVGList = RawChartList[0].map((c) => {
            return {
                id: uuidv4(),
                projectName: c.project, 
                difficultyRating: c.difficulty,
                funRating: c.fun
            }
        }) 
        AVGList = tempAVGList
    } else { 
        const [first] = RawChartList
        const tempAVG = first.map((_, i) => {
            return {
                id: uuidv4(),
                projectName: RawChartList.map((project) => {return project[i].project}).shift(), 
                difficultyRating: RawChartList.map((student )=> student[i]).reduce((result, project) => result + project.difficulty, 0)/RawChartList.length,
                funRating: RawChartList.map((student )=> student[i]).reduce((result, project) => result + project.fun, 0)/RawChartList.length
            }
        })
    AVGList = tempAVG
    }  
   
    return( 
        <div className="barChart">
            <h1 className="ChartTitle">Student Rating / Students Average</h1>
            <VictoryChart
            height={1000}
            width={2700}
            domainPadding={40}
            containerComponent={<VictoryZoomContainer zoomDomain={{x: [0, 10], y: [0,5]}}/>}
            >
                <VictoryLegend x={125} y={5}
                title={["Legend Color"]}
                orientation="horizontal"
                gutter={ 100}
                height={400}
                style={{ border: { stroke: "white" }, title: { fontSize: 40, fill: "#efefef" } }}
                data={[
                    { name: "Difficulty", symbol: { fill: "#334d5c"}, labels: {fontSize: 40, fill: "#334d5c" }    },
                    { name: "Fun", symbol: { fill: "#45b29d"  }, labels: {fontSize: 40, fill: "#45b29d" } },       
                ]}
                />
                <VictoryAxis 
                height={100}
                style={{ 
                    tickLabels: {
                        width: 20,
                        fontSize: 20,
                        fill: '#efefef',
                    }}}
                />
                <VictoryAxis 
                dependentAxis
                tickValues={[1,2,3,4,5]}
                tickFormat={[1,2,3,4,5]}
                style={{ 
                    tickLabels: {
                        width: 20,
                        fontSize: 20,
                        fill: '#efefef',
                    }}}
                />
                <VictoryGroup
                offset={20}
                colorScale={"qualitative"}
                style={{ data: { width: 20 } }}
                >                   
                    <VictoryBar
                    data={AVGList}
                    x="projectName" y="difficultyRating"
                    style={{
                        data: {
                            width: 15
                        }
                    }}/>
                    <VictoryBar
                    data={AVGList}
                    x="projectName" y="funRating"
                    style={{
                        data: {
                            width: 15
                        }
                    }}
                    />
                </VictoryGroup>
            </VictoryChart>
        </div>

    )
}

export default BarChart