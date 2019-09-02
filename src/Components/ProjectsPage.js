import React from 'react'
import calculator from './GIFS/calculator.gif'
import python_rockpaperscissors from './GIFS/pythonRPS.gif'
import java_rockpaperscissors from './GIFS/javaRPS.gif'
import javascript_rockpaperscissors from './GIFS/javascriptRPS.gif'
import randompokemon from './GIFS/randompokemon.gif'
import pancakegame from './GIFS/pancakegame.gif'
import maze from './GIFS/maze.gif'
import roommatefinder from './GIFS/roommatefinder.gif'
import easybake from './GIFS/easybake.gif'

import HeaderProjects from './HeaderProjects.js'

class ProjectsPage extends React.Component {
    render(){
        return(
            <div id='cards'>
                {/* JavaFX calculator */}
                <div className='card'>
                    <img id='cardImg' src={calculator}/>
                    <h3 className='container'> A fully functional calculator with a Graphic User Interface. </h3>
                    <ul className='container'>
                        <li> Constructed with JavaFX framework </li>
                        <li> Uses JavaScript Script Engine to add functionality to the calculator </li>
                        <li> Uses grid pane to create layout for buttons and text field </li>
                    </ul>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/Java-Calculator' target="_blank"><h6> GitHub Link </h6></a>
                </div>
                {/* roommate finder */}
                <div className='card'>
                    <img id='cardImg' src={roommatefinder}/>
                    <h3 className='container'> An app to help you find a roommate easily. </h3>
                    <ul className='container'>
                        <li> Uses React.js and CSS for the frontend </li>
                        <li> Uses RESTful routing (GET, POST, PATCH and DELETE) with Ruby on Rails </li>
                        <li> Uses Postgres database and ActiveRecord to communicate with front-end </li>
                    </ul>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/Roommate-Finder-Frontend' target="_blank"><h6> Github Link (Frontend) </h6></a>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/Roommate-Finder-Backend' target="_blank"><h6> Github Link (Backend) </h6></a>
                </div>
                {/* python rock, paper, scissors */}
                <div className='card'>
                    <img id='cardImg' src={python_rockpaperscissors}/>
                    <h3 className='container'> A Rock, Paper, Scissors Game Written in Python </h3>
                    <ul className='container'>
                        <li> Constructed with PyQt5 framework </li>
                        <li> Consists of buttons and alert messages to create the game </li>
                    </ul>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/Rock-Paper-Scissors-Python' target="_blank"><h6> GitHub Link </h6></a>
                </div>
                {/* java rock, paper, scissors */}
                <div className='card'>
                    <img id='cardImg' src={java_rockpaperscissors}/>
                    <h3 className='container'> A Rock, Paper, Scissors Game Written in Java </h3>
                    <ul className='container'>
                        <li> Constructed with Java and JavaFX framework </li>
                        <li> Uses Grid Pane to create layout / Uses buttons and text input </li>
                    </ul>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/Rock-Paper-Scissors-Java' target="_blank"><h6> GitHub Link </h6></a>
                </div>
                {/* easy bake order */}
                <div className='card'>
                    <img id='cardImg' src={easybake}/>
                    <h3 className='container'> Find the best bakeries near you and make an order. </h3>
                    <ul className='container'>
                        <li> Created with Ruby and Ruby on Rails </li>
                        <li> Uses RESTful routing and forms to communicate with the client </li>
                        <li> Database is seeded with SQL and seeded with Rails </li>
                    </ul>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/easy_bake_order' target="_blank"><h6> Github Link </h6></a>
                </div>
                {/* pokemon maze game */}
                <div className='card'>
                    <img id='cardImg' src={maze}/>
                    <h3 className='container'> A maze game using a pokemon to get to the end. </h3>
                    <ul className='container'>
                        <li> Written in Java, JavaFX and CSS </li>
                        <li> Uses images and JavaFX shapes to create the background </li>
                        <li> Uses key press methods and conditional statements to add functionality  </li>
                    </ul>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/Maze-Game' target="_blank"><h6> Github Link </h6></a>
                </div>
                {/* javascript rock, paper, scissors */}
                <div className='card'>
                    <img id='cardImg' src={javascript_rockpaperscissors}/>
                    <h3 className='container'> A Rock, Paper, Scissors Game Written in JavaScript </h3>
                    <ul className='container'>
                        <li> Constructed with JavaScript, HTML and CSS </li>
                        <li> Uses DOM manipulation to load the page and create the game </li>
                    </ul>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/Rock-Paper-Scissors' target="_blank"><h6> GitHub Link </h6></a>
                </div>
                {/* pancake game */}
                <div className='card'>
                    <img id='cardImg' src={pancakegame}/>
                    <h3 className='container'> Play this game to practice your pancake flipping skills. </h3>
                    <ul className='container'>
                        <li> Consists of React.js, JavaScript and SCSS for frontend </li>
                        <li> Seeds user’s game with a Postgres database </li>
                        <li> Uses to Ruby on Rails to create table controllers and RESTful routing </li>
                    </ul>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/mod4_finalProject-frontend' target="_blank"><h6> Github Link (Frontend) </h6></a>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/mod4_finalProject_backend' target="_blank"><h6> Github Link (Backend) </h6></a>
                </div>
                {/* random pokemon generator */}
                <div className='card'>
                    <img id='cardImg' src={randompokemon}/>
                    <h3 className='container'> Find a random pokemon from a large list of pokemon. </h3>
                    <ul className='container'>
                        <li> Seeds data with the PokéApi </li>
                        <li> Created with JavaScript, HTML, CSS and React.js </li>
                        <li> Updates the App's state with the fetched pokemon </li>
                    </ul>
                    <a style={{textAlign:'center'}} href='https://github.com/ebolten/Random-Pokemon-React' target="_blank"><h6> Github Link </h6></a>
                </div>
            </div>
        )
    }
}
export default ProjectsPage;