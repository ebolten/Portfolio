import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,withRouter } from 'react-router-dom'
import MainPage from './Components/MainPage.js'
import Overview from './Components/Overview.js'
import ProjectContainer from './Components/ProjectContainer.js'

//easy video to gif converter:
// https://ezgif.com/video-to-gif

function App() {
  return (
    <div>

      <Route exact path={'/'} render={() => {return( <MainPage/> )} }/>
        
      <Route exact path={'/projects'} render={() => {return ( <ProjectContainer/> )} }/>

      <Route exact path={'/overview'} render={() => {return ( <Overview/> )} }/>
      
    </div>
  );
}

export default App;
