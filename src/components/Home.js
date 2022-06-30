
import "../styles/HeaderSidebarContentContainer.css"
import "../styles/Home.css"

import React from 'react';
import BarChart from './BarChart';




function Home () {

return (
    <div>
        <div className='contentContainer'> 
            <div className='grafic'>
                <BarChart/>
            </div>
        </div>
    </div>
    )
}

export default Home