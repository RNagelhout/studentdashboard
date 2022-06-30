import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import StudentPage from './components/StudentPage';
import UploadPage from './components/UploadPage';
import SideBar from "./components/SideBar"

function App() {
  
  return (
    <Router>
      <div>
        <Header/>
        <Navbar/>
        
        <div className='appContainer'>
          {/* <Profile />
          <Login/> */}
          <Switch>
            <Route exact path="/">
              <SideBar />
              <Home/>
            </Route>
            <Route path="/student/">
              <SideBar />
              <StudentPage/>
            </Route>
            <Route exact path="/UploadPage">
              <UploadPage/>
            </Route>
          </Switch>
        </div>
      </div> 
    </Router>
  );
}

export default App;


