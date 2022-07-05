
import "../styles/HeaderSidebarContentContainer.css"
import "../styles/Home.css"
import React from 'react';
import BarChart from './BarChart';
import {useSpring, animated} from "react-spring"

function Home () {
    const fade = useSpring({from: { opacity: 0,}, opacity: 1 })
    return (
        <div>
            <animated.div className='contentContainer' style={fade} > 
                <div className='grafic'>
                    <BarChart/>
                </div>
            </animated.div>
        </div>
    )
}

export default Home