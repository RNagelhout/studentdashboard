import './styles/App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import StudentPage from './components/StudentPage'
import UploadPage from './components/UploadPage'
import SideBar from "./components/SideBar"
import {useSpring, animated} from "react-spring"


const App = () => {
  const fade = useSpring({from: { opacity: 0,}, opacity: 1 })
  
  return (
    <Router>
      <animated.div className='fullpage' style={fade}>
        <Header/>
        <Navbar/>  
        <animated.div className='appContainer'  style={fade}>
          <Switch>
            <Route exact path="/">
              <SideBar />
              <Home/>
            </Route>
            <Route path="/student/">
              <StudentPage/>
            </Route>
            <Route exact path="/UploadPage">
              <UploadPage/>
            </Route>
          </Switch>
        </animated.div>
      </animated.div> 
    </Router>
  );
}

export default App;


