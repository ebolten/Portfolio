import React from 'react'
import calculator from './GIFS/calculator.gif'
import python_rockpaperscissors from './GIFS/pythonRPS.gif'
import pancakegame from './GIFS/pancakegame.gif'
import HeaderProjects from './HeaderProjects.js'

class ProjectsPage extends React.Component {
    render(){
        return(
            <div id='cards'>
                {/* JavaFX calculator image */}
                <div className='card'>
                    <img id='cardImg' src={calculator}/>
                    <h3 className='container'> A fully functional calculator with a Graphic User Interface. </h3>
                    <ul className='container'>
                        <li> Constructed with JavaFX framework </li>
                        <li> Uses JavaScript Script Engine to add functionality to the calculator </li>
                        <li> Uses grid pane to create layout for buttons and text field </li>
                    </ul>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/Java-Calculator'><h6> GitHub Link </h6></a>
                </div>

                <div className='card'>
                    <img id='cardImg' src={python_rockpaperscissors}/>
                    <h3 className='container'> A Rock, Paper, Scissors Game Written in Python </h3>
                    <ul className='container'>
                        <li> Constructed with PyQt5 framework </li>
                        <li> Consists of buttons and alert messages to create the game </li>
                    </ul>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/Rock-Paper-Scissors-Python'><h6> GitHub Link </h6></a>
                </div>

                <div className='card'>
                    <img id='cardImg' src={pancakegame}/>
                    <h3 className='container'> Play this game to practice your pancake flipping skills. </h3>
                    <ul className='container'>
                        <li> Consists of React.js, JavaScript and SCSS for frontend </li>
                        <li> Seeds user’s game with a Postgres database </li>
                        <li> Uses to Ruby on Rails to create table controllers and RESTful routing </li>
                    </ul>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/mod4_finalProject-frontend'><h6> Github Link (frontend) </h6></a>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/mod4_finalProject_backend'><h6> Github Link (backend) </h6></a>
                </div>

                

                


            </div>
        )
    }
}
export default ProjectsPage;