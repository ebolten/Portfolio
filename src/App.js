import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,withRouter } from 'react-router-dom'
import MainPage from './Components/MainPage.js'
import ProjectContainer from './Components/ProjectContainer.js'

//easy video to gif converter:
// https://ezgif.com/video-to-gif

function App() {
  return (
    <div>

      <Route exact path={'/'} render={() => {return( <MainPage/> )} }/>
        
      <Route exact path={'/projects'} render={() => {return ( <ProjectContainer/> )} }/>
      
    </div>
  );
}

export default App;
